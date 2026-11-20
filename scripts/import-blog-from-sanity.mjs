// Imports every blog post from the site's public Sanity dataset into the admin
// dashboard's `posts` table (title, slug, excerpt, body HTML with hyperlinks,
// cover image, meta title/description, FAQ + JSON-LD schemas from lib/blogSchemas.ts).
// Safe to re-run: posts are matched by slug and updated; cover images already
// imported are not uploaded again.
//
//   node --env-file=.env.local scripts/import-blog-from-sanity.mjs            # write to DB
//   node --env-file=.env.local scripts/import-blog-from-sanity.mjs --dry-run  # no DB, prints a report
import { randomUUID } from "node:crypto";
import MarkdownIt from "markdown-it";
import { blogSchemas } from "../lib/blogSchemas.ts";

const DRY = process.argv.includes("--dry-run");
const PROJECT = "gmwwqjqa";
const DATASET = "production";
const SITE = "https://www.thelotusroots.co.uk";

const md = new MarkdownIt({ html: false, linkify: false, breaks: false });

async function fetchPosts() {
  const q = '*[_type=="blogPost"] | order(publishedAt desc)';
  const url = `https://${PROJECT}.apicdn.sanity.io/v2024-01-01/data/query/${DATASET}?query=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status}`);
  return (await res.json()).result;
}

// Portable Text -> markdown (the existing bodies already hold markdown inside text spans).
function portableToMarkdown(blocks) {
  const out = [];
  let n = 0;
  for (const b of blocks || []) {
    if (b._type !== "block") continue;
    const defs = Object.fromEntries((b.markDefs || []).map((d) => [d._key, d]));
    const text = (b.children || [])
      .map((c) => {
        let t = c.text || "";
        for (const m of c.marks || []) {
          if (m === "strong") t = `**${t}**`;
          else if (m === "em") t = `*${t}*`;
          else if (defs[m]?.href) t = `[${t}](${defs[m].href})`;
        }
        return t;
      })
      .join("");
    if (!text.trim()) continue;
    if (b.listItem) {
      const indent = "  ".repeat(Math.max(0, (b.level || 1) - 1));
      out.push(`${indent}${b.listItem === "number" ? `${++n}.` : "-"} ${text}`);
      continue;
    }
    n = 0;
    const style = /^h([1-6])$/.exec(b.style || "");
    if (style) out.push(`${"#".repeat(Number(style[1]))} ${text}`);
    else if (b.style === "blockquote") out.push(`> ${text}`);
    else out.push(text);
  }
  // consecutive list lines must stay together, everything else is separated by a blank line
  return out.reduce((acc, line, i) => {
    const isList = /^\s*(-|\d+\.) /.test(line);
    const prevList = i > 0 && /^\s*(-|\d+\.) /.test(out[i - 1]);
    return acc + (i === 0 ? "" : isList && prevList ? "\n" : "\n\n") + line;
  }, "");
}

function toHtml(markdown, title) {
  let src = markdown.replace(/^﻿/, "").trim();
  // drop a leading "# Title" that just repeats the post title (the page renders the title itself)
  const m = /^#\s+(.+)\n+/.exec(src);
  if (m && m[1].trim().toLowerCase() === title.trim().toLowerCase()) src = src.slice(m[0].length);
  // the admin allows h2-h4 only
  let html = md.render(src);
  html = html.replace(/<(\/?)h1>/g, "<$1h2>").replace(/<(\/?)h[56]>/g, "<$1h4>");
  return html.trim();
}

function sanityImageUrl(asset) {
  const ref = asset?._ref;
  const m = /^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/.exec(ref || "");
  return m ? `https://cdn.sanity.io/images/${PROJECT}/${DATASET}/${m[1]}-${m[2]}.${m[3]}` : null;
}

function sniff(bytes) {
  const a = (s, e) => String.fromCharCode(...bytes.slice(s, e));
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes[0] === 0x89 && a(1, 4) === "PNG") return "image/png";
  if (a(0, 4) === "GIF8") return "image/gif";
  if (a(0, 4) === "RIFF" && a(8, 12) === "WEBP") return "image/webp";
  return null;
}

const utc = (iso) => new Date(iso).toISOString().replace("T", " ").slice(0, 19);
const clip = (s, n, label, slug, warn) => {
  s = (s || "").trim();
  if (s.length > n) {
    warn.push(`${slug}: ${label} is ${s.length} chars, clipped to ${n}`);
    return s.slice(0, n);
  }
  return s;
};

const posts = await fetchPosts();
const warnings = [];
const report = [];

let conn = null;
let adminId = null;
if (!DRY) {
  const mysql = (await import("mysql2/promise")).default;
  conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectTimeout: 20000,
    maxAllowedPacket: 64 * 1024 * 1024,
  });
  const [u] = await conn.query("SELECT id FROM users WHERE role = 'admin' ORDER BY created_at LIMIT 1");
  adminId = u[0]?.id ?? null;
}

for (const p of posts) {
  const slug = p.slug?.current;
  const title = clip(p.title, 200, "title", slug, warnings);
  const html = toHtml(portableToMarkdown(p.body), title);
  const links = [...html.matchAll(/<a href="([^"]+)"/g)].map((m) => m[1]);

  const schema = blogSchemas[slug];
  const faqs = (schema?.faq?.mainEntity || []).map((q) => ({ question: q.name, answer: q.acceptedAnswer?.text || "" }));
  const customSchemas = schema?.main
    ? [{ type: String(schema.main["@type"] || "Other"), json: JSON.stringify(schema.main, null, 2) }]
    : [];

  const imgUrl = sanityImageUrl(p.coverImage?.asset);
  const row = {
    title,
    slug: clip(slug, 100, "slug", slug, warnings),
    excerpt: clip(p.excerpt, 500, "excerpt", slug, warnings),
    content_html: html,
    author_name: clip(p.author || "Lotus Roots Technologies", 100, "author", slug, warnings),
    featured_image_alt: clip(p.coverImage?.alt || (imgUrl ? title : ""), 300, "image alt", slug, warnings),
    published_at: utc(p.publishedAt),
    meta_title: clip(p.seoTitle || title, 120, "meta_title", slug, warnings),
    meta_description: clip(p.seoDescription || p.excerpt, 320, "meta_description", slug, warnings),
    faqs: JSON.stringify(faqs),
    custom_schemas: JSON.stringify(customSchemas),
  };
  if (!p.seoTitle || !p.seoDescription) warnings.push(`${slug}: no seoTitle/seoDescription in source, used title/excerpt`);

  let imageNote = imgUrl ? "cover image (will upload)" : "no cover image in source";
  let featured = null;

  if (!DRY) {
    const [existing] = await conn.query("SELECT id, featured_image_url FROM posts WHERE post_type='blog' AND slug = ?", [row.slug]);
    featured = existing[0]?.featured_image_url?.startsWith("/media/") ? existing[0].featured_image_url : null;
    if (imgUrl && !featured) {
      const r = await fetch(imgUrl);
      if (!r.ok) throw new Error(`Image download failed (${r.status}): ${imgUrl}`);
      const bytes = new Uint8Array(await r.arrayBuffer());
      const mime = sniff(bytes);
      if (!mime) throw new Error(`Unrecognised image type: ${imgUrl}`);
      const [ins] = await conn.query("INSERT INTO media (mime, size, data, created_by, created_at) VALUES (?, ?, ?, ?, ?)", [
        mime, bytes.length, Buffer.from(bytes), adminId, new Date(),
      ]);
      featured = `/media/${ins.insertId}`;
      imageNote = `cover uploaded (${(bytes.length / 1024).toFixed(0)} KB) -> ${featured}`;
    } else if (featured) imageNote = `cover already imported (${featured})`;

    const cols = {
      ...row,
      featured_image_url: featured,
      og_image_url: featured,
      post_type: "blog",
      status: "published",
      focus_keyphrase: "",
      meta_keywords: "",
      canonical_url: "",
      noindex: 0,
      og_title: row.meta_title,
      og_description: row.meta_description,
      auto_article_schema: 1,
      auto_faq_schema: 1,
    };
    const now = new Date();
    if (existing[0]) {
      const names = Object.keys(cols);
      await conn.query(`UPDATE posts SET ${names.map((c) => `${c} = ?`).join(", ")}, updated_at = ?, updated_by = ? WHERE id = ?`, [
        ...names.map((c) => cols[c]), now, adminId, existing[0].id,
      ]);
    } else {
      const names = Object.keys(cols);
      await conn.query(
        `INSERT INTO posts (id, ${names.join(", ")}, created_at, updated_at, created_by, updated_by) VALUES (?, ${names.map(() => "?").join(", ")}, ?, ?, ?, ?)`,
        [randomUUID(), ...names.map((c) => cols[c]), now, now, adminId, adminId],
      );
    }
  }

  report.push({ slug: row.slug, html: html.length, links: links.length, faqs: faqs.length, schemas: customSchemas.length, image: imageNote });
}

if (conn) await conn.end();
console.table(report);
if (warnings.length) console.log("Warnings:\n- " + warnings.join("\n- "));
console.log(`${DRY ? "DRY RUN (nothing written)" : "Imported"}: ${report.length} posts, ${report.reduce((a, r) => a + r.links, 0)} hyperlinks, ${report.filter((r) => r.schemas).length} posts with schema, ${report.filter((r) => r.image.startsWith("cover") || r.image.includes("upload")).length} cover images.`);
console.log(`Source: ${SITE}/blog (Sanity project ${PROJECT})`);
