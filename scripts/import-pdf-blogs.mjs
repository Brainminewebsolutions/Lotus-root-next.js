// Imports the blog articles from "LRT - Content - November 2026.pdf" into the
// admin dashboard (`posts` table): title, slug, meta title/description,
// keywords, body HTML, featured image (the image embedded in the PDF, stored in
// the `media` table) and JSON-LD schemas built from each article's own content.
// Safe to re-run: posts are matched by slug and updated.
//
//   node --env-file=.env.local scripts/import-pdf-blogs.mjs "<pdf>" --dry-run
//   node --env-file=.env.local scripts/import-pdf-blogs.mjs "<pdf>"
//
// Needs `pdftotext` (poppler) on PATH and `sharp` (installed with Next.js).
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import zlib from "node:zlib";
import sharp from "sharp";

const PDF = process.argv[2];
const DRY = process.argv.includes("--dry-run");
if (!PDF) {
  console.error('Usage: node --env-file=.env.local scripts/import-pdf-blogs.mjs "<file.pdf>" [--dry-run]');
  process.exit(1);
}
const SITE = "https://www.thelotusroots.co.uk";
const PUBLISHED_AT = "2026-11-15 09:00:00"; // 15 November 2026 (UTC)
const AUTHOR = "Lotus Roots Technologies";

// ---------- headings (the PDF has no style info, so the section titles are listed) ----------
const H2 = new Set([
  // BIM services guide
  "What Are BIM Services?", "Core BIM Services Explained", "Why BIM Matters in the UK Market",
  "Key Benefits of Professional BIM Services", "In-House BIM or an External Partner?", "How Much Do BIM Services Cost?",
  "How to Choose a BIM Services Provider", "Common Mistakes to Avoid", "Getting Started",
  // Clash detection
  "What Is Clash Detection?", "The Three Types of Clashes", "Why Clashes Cost So Much on Site", "A Practical Clash Detection Workflow",
  "MEP Coordination: Where Most Clashes Live", "Common Clash Detection Mistakes", "Benefits Beyond Avoiding Clashes",
  "When to Bring In a Specialist", "What to Ask a Coordination Provider", "Final Thoughts",
  // AI in construction
  "Why the UK AEC Sector Is Looking at AI", "1. Design Automation", "2. Automated Model Checking", "3. Document and Data Extraction",
  "4. Programme and Risk Insight", "5. Cost Estimating Support", "6. Site Progress Monitoring", "7. Custom Dashboards and Reporting",
  "Off-the-Shelf Tools vs Custom Solutions", "How to Start Without a Huge Budget", "Risks and Things to Watch",
  "What a Good Technology Partner Looks For", "The Bottom Line",
  // Outsourcing
  "What Does Outsourcing BIM Mean?", "Common Engagement Models", "Benefits of Outsourcing BIM", "Risks, and How to Manage Them",
  "How to Choose an Outsourcing Partner", "Setting Up for Success: A Simple Onboarding Checklist", "What About Cost?",
  "Is Outsourcing Right for Your Firm?",
]);
const H3 = new Set([
  "1. Agree the information requirements", "2. Set up a common data environment", "3. Define clash rules",
  "4. Run regular coordination cycles", "5. Review, assign and track", "6. Re-test and close out",
]);
// Bold lead-ins ("Scan to BIM. Point cloud data...").
const LEADS = [
  "BIM modelling.", "Scan to BIM.", "BIM coordination and clash detection.", "4D and 5D BIM.", "Information management.", "Digital twin and asset data.",
  "ISO 19650.", "Building safety.", "Sustainability and compliance.",
  "Fewer errors and less rework.", "Better collaboration.", "More reliable cost and programme.", "Stronger tenders.", "Smoother handover.",
  "Standards knowledge.", "Relevant experience.", "Quality assurance.", "Communication.", "Data security.", "Scalability.",
  "Hard clashes.", "Soft clashes.", "Workflow or 4D clashes.",
  "Running tests too late.", "No agreed model ownership.", "Poor-quality models.", "Too many tests, no filtering.", "Treating it as a one-off.",
  "Better programme confidence.", "Improved prefabrication.", "Clearer communication.", "Stronger documentation.", "Safer sites.",
  "Step 1: List repetitive tasks.", "Step 2: Pick one pilot.", "Step 3: Check your data.", "Step 4: Involve the people doing the work.", "Step 5: Measure and expand.",
  "Data privacy and security.", "Accuracy.", "Over-reliance.", "Change management.", "Regulation and client requirements.",
  "Project-based.", "Dedicated team.", "Hybrid or on-demand.",
  "Flexible capacity.", "Access to specialist skills.", "Faster turnaround.", "Cost efficiency.", "Focus on core work.",
  "Quality variation.", "Communication gaps.", "Misunderstood standards.", "Unclear scope.", "Dependency.",
  "UK project experience.", "Transparent process.", "Relevant samples.", "Local presence.", "Technical breadth.", "Willingness to start small.",
  "Share your standards.", "Define the brief.", "Agree a communication rhythm.", "Start with a pilot.", "Give clear feedback.", "Review and refine.",
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (text) => {
  const lead = LEADS.find((l) => text.startsWith(l + " ") || text === l);
  return lead ? `<strong>${esc(lead)}</strong>${esc(text.slice(lead.length))}` : esc(text);
};
const leadOf = (text) => LEADS.find((l) => text.startsWith(l + " "));

// ---------- PDF text -> articles ----------
const raw = execFileSync("pdftotext", ["-layout", PDF, "-"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const lines = raw.split(/\r?\n/).map((l) => l.replace(/\f/g, ""));
const starts = lines.flatMap((l, i) => (l.startsWith("Meta Title:") ? [i] : []));
const warnings = [];

function parseArticle(chunk) {
  let i = 0;
  const grabUntilCount = () => {
    const parts = [];
    while (i < chunk.length) {
      parts.push(chunk[i].trim());
      if (/\(\d+ characters\)\s*$/.test(chunk[i])) { i++; break; }
      i++;
    }
    return parts.join(" ");
  };
  const metaTitleRaw = grabUntilCount().replace(/^Meta Title:\s*/, "");
  const metaDescRaw = grabUntilCount().replace(/^Meta Description:\s*/, "");
  const stated = (s) => Number(/\((\d+) characters\)\s*$/.exec(s)?.[1]);
  const metaTitle = metaTitleRaw.replace(/\s*\(\d+ characters\)\s*$/, "").trim();
  const metaDescription = metaDescRaw.replace(/\s*\(\d+ characters\)\s*$/, "").trim();
  if (metaTitle.length !== stated(metaTitleRaw)) warnings.push(`meta title length ${metaTitle.length} != PDF ${stated(metaTitleRaw)}: ${metaTitle}`);
  if (metaDescription.length !== stated(metaDescRaw)) warnings.push(`meta description length ${metaDescription.length} != PDF ${stated(metaDescRaw)} (${metaTitle})`);

  const slug = chunk[i++].replace(/^Suggested Slug:\s*/, "").trim().replace(/^\/+|\/+$/g, "");
  const primary = chunk[i++].replace(/^Primary Keyword:\s*/, "").trim();
  const sec = [chunk[i++].replace(/^Secondary Keywords:\s*/, "").trim()];
  while (chunk[i].trim() !== "") sec.push(chunk[i++].trim());
  const secondary = sec.join(" ").split(",").map((s) => s.trim()).filter(Boolean);

  while (!/^(Featured image|Post feature image)\s*-/.test(chunk[i].trim())) i++;
  i++;
  while (chunk[i].trim() === "") i++;
  const titleParts = [];
  while (chunk[i].trim() !== "") titleParts.push(chunk[i++].trim());
  const title = titleParts.join(" ");

  // body -> blocks
  const blocks = []; // {t:"h2"|"h3"|"p"|"ul"|"ol", text|items}
  let para = null;
  let prevLine = "";
  const flushPara = () => { if (para) blocks.push({ t: "p", text: para }); para = null; };
  const list = (type) => {
    const last = blocks[blocks.length - 1];
    if (last && last.t === type) return last;
    const b = { t: type, items: [] };
    blocks.push(b);
    return b;
  };
  for (; i < chunk.length; i++) {
    const line = chunk[i];
    const text = line.trim();
    if (text === "") { flushPara(); continue; }
    const indent = line.length - line.trimStart().length;
    if (H2.has(text)) { flushPara(); blocks.push({ t: "h2", text }); prevLine = text; continue; }
    if (H3.has(text)) { flushPara(); blocks.push({ t: "h3", text }); prevLine = text; continue; }
    const num = /^(\d+)\.\s+(.*)$/.exec(text);
    if (indent >= 8) { // wrapped continuation of a list item
      const last = blocks[blocks.length - 1];
      if (!last || !last.items) throw new Error(`Orphan continuation line in "${title}": ${text}`);
      last.items[last.items.length - 1] += " " + text;
    } else if (indent >= 4 && num) {
      flushPara();
      list("ol").items.push(num[2]);
    } else if (indent >= 4) {
      flushPara();
      list("ul").items.push(text);
    } else {
      // body paragraph text; a short sentence-ending line means the next line starts a new paragraph
      const prevEnds = /[.?!:]$/.test(prevLine) && prevLine.length < 84;
      if (para && prevEnds) flushPara();
      para = para ? para + " " + text : text;
    }
    prevLine = text;
  }
  flushPara();

  const html = blocks
    .map((b) => {
      if (b.t === "h2") return `<h2>${esc(b.text)}</h2>`;
      if (b.t === "h3") return `<h3>${esc(b.text.replace(/^\d+\.\s+/, ""))}</h3>`;
      if (b.t === "p") return `<p>${inline(b.text)}</p>`;
      return `<${b.t}>${b.items.map((x) => `<li>${inline(x)}</li>`).join("")}</${b.t}>`;
    })
    .join("\n");

  return { title, slug, primary, secondary, metaTitle, metaDescription, blocks, html };
}

const articles = starts.map((s, k) => parseArticle(lines.slice(s, starts[k + 1] ?? lines.length)));

// ---------- hyperlinks from the PDF ----------
// Read from the PDF's link annotations (page, URL and the exact text under each link).
const LINKS = {
  "bim-services-uk-guide": [{ text: "request work samples or book a call", href: "https://www.thelotusroots.co.uk/digital-engineering" }],
  "bim-clash-detection-coordination-uk": [{ text: "Contact us", href: "https://www.thelotusroots.co.uk/digital-engineering" }],
  "ai-in-construction-uk-aec": [{ text: "talk to our technology team", href: "https://www.thelotusroots.co.uk/technology-development" }],
  "outsource-bim-services-uk": [{ text: "get in touch with us", href: "https://www.thelotusroots.co.uk/talent-capability-building" }],
};
for (const a of articles) {
  for (const { text, href } of LINKS[a.slug] ?? []) {
    const needle = esc(text);
    const hits = a.html.split(needle).length - 1;
    if (hits !== 1) throw new Error(`Link text "${text}" found ${hits} times in ${a.slug} (expected 1)`);
    a.html = a.html.replace(needle, `<a href="${href}">${needle}</a>`);
  }
}

// ---------- images embedded in the PDF (same order as the articles) ----------
const pdfBuf = readFileSync(PDF);
const pdfStr = pdfBuf.toString("latin1");
const imgRe = /(\d+) 0 obj\s*<<([^]*?)>>\s*stream\r?\n/g;
const imageJobs = [];
for (let m; (m = imgRe.exec(pdfStr)); ) {
  if (!/\/Subtype\s*\/Image/.test(m[2])) continue;
  if (!/\/Filter\s*\/FlateDecode/.test(m[2]) || /\/SMask|\/DecodeParms/.test(m[2])) throw new Error(`Unsupported image encoding in object ${m[1]}`);
  const len = Number(/\/Length (\d+)/.exec(m[2])[1]);
  const w = Number(/\/Width (\d+)/.exec(m[2])[1]);
  const h = Number(/\/Height (\d+)/.exec(m[2])[1]);
  const start = m.index + m[0].length;
  const px = zlib.inflateSync(pdfBuf.subarray(start, start + len));
  if (px.length !== w * h * 3) throw new Error(`Unexpected pixel data size in object ${m[1]}`);
  imageJobs.push(sharp(px, { raw: { width: w, height: h, channels: 3 } }).webp({ quality: 88 }).toBuffer());
}
const images = await Promise.all(imageJobs);
if (images.length !== articles.length) warnings.push(`${articles.length} articles but ${images.length} images in the PDF`);

// ---------- schemas built from the article's own text ----------
const textUnder = (a, heading) => {
  const idx = a.blocks.findIndex((b) => (b.t === "h2" || b.t === "h3") && b.text === heading);
  return a.blocks[idx + 1];
};
const itemList = (a, name, items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  url: `${SITE}/blog/${a.slug}`,
  numberOfItems: items.length,
  itemListElement: items.map((it, n) => ({ "@type": "ListItem", position: n + 1, name: it.name, description: it.description })),
});
function buildSchemas(a, imageUrl) {
  const out = [];
  if (a.slug === "bim-services-uk-guide") {
    const idx = a.blocks.findIndex((b) => b.t === "h2" && b.text === "Core BIM Services Explained");
    const items = [];
    for (let k = idx + 1; a.blocks[k]?.t === "p"; k++) {
      const lead = leadOf(a.blocks[k].text);
      if (lead) items.push({ name: lead.replace(/\.$/, ""), description: a.blocks[k].text.slice(lead.length).trim() });
    }
    out.push(["ItemList", itemList(a, "Core BIM services", items)]);
  } else if (a.slug === "bim-clash-detection-coordination-uk") {
    const steps = [...H3].map((h) => ({ "@type": "HowToStep", name: h.replace(/^\d+\.\s+/, ""), text: textUnder(a, h).text }));
    out.push(["HowTo", { "@context": "https://schema.org", "@type": "HowTo", name: "How to run a BIM clash detection workflow", description: a.metaDescription, image: imageUrl, step: steps }]);
  } else if (a.slug === "ai-in-construction-uk-aec") {
    const hs = [...H2].filter((h) => /^[1-7]\.\s/.test(h));
    out.push(["ItemList", itemList(a, "7 practical uses of AI in UK construction", hs.map((h) => ({ name: h.replace(/^\d+\.\s+/, ""), description: textUnder(a, h).text })))]);
  } else if (a.slug === "outsource-bim-services-uk") {
    const ol = textUnder(a, "Setting Up for Success: A Simple Onboarding Checklist");
    const steps = ol.items.map((it) => {
      const lead = leadOf(it);
      return { "@type": "HowToStep", name: lead.replace(/\.$/, ""), text: it.slice(lead.length).trim() };
    });
    out.push(["HowTo", { "@context": "https://schema.org", "@type": "HowTo", name: "How to onboard an outsourced BIM team", description: a.metaDescription, image: imageUrl, step: steps }]);
  }
  return out.map(([type, obj]) => ({ type, json: JSON.stringify(obj, null, 2) }));
}

// ---------- report / write ----------
const clip = (s, n, label, slug) => {
  if (s.length > n) { warnings.push(`${slug}: ${label} ${s.length} > ${n}, clipped`); return s.slice(0, n); }
  return s;
};

let conn = null, adminId = null;
if (!DRY) {
  const mysql = (await import("mysql2/promise")).default;
  conn = await mysql.createConnection({
    host: process.env.DB_HOST, port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME, user: process.env.DB_USER, password: process.env.DB_PASSWORD, connectTimeout: 20000,
  });
  const [u] = await conn.query("SELECT id FROM users WHERE role = 'admin' ORDER BY created_at LIMIT 1");
  adminId = u[0]?.id ?? null;
}

const report = [];
for (const [n, a] of articles.entries()) {
  const keywords = [a.primary, ...a.secondary].join(", ");
  let imageUrl = null;
  let existingId = null;
  if (!DRY) {
    const [ex] = await conn.query("SELECT id, featured_image_url FROM posts WHERE post_type='blog' AND slug = ?", [a.slug]);
    existingId = ex[0]?.id ?? null;
    imageUrl = ex[0]?.featured_image_url?.startsWith("/media/") ? ex[0].featured_image_url : null;
    if (!imageUrl && images[n]) {
      const [ins] = await conn.query("INSERT INTO media (mime, size, data, created_by, created_at) VALUES (?, ?, ?, ?, ?)", [
        "image/webp", images[n].length, images[n], adminId, new Date(),
      ]);
      imageUrl = `/media/${ins.insertId}`;
    }
  }
  const schemas = buildSchemas(a, imageUrl ? `${SITE}${imageUrl}` : undefined);
  const cols = {
    post_type: "blog",
    status: "published",
    title: clip(a.title, 200, "title", a.slug),
    slug: clip(a.slug, 100, "slug", a.slug),
    excerpt: clip(a.metaDescription, 500, "excerpt", a.slug),
    content_html: a.html,
    author_name: AUTHOR,
    featured_image_url: imageUrl,
    featured_image_alt: clip(a.title, 300, "alt", a.slug),
    published_at: PUBLISHED_AT,
    focus_keyphrase: clip(a.primary, 100, "focus keyphrase", a.slug),
    meta_title: clip(a.metaTitle, 120, "meta title", a.slug),
    meta_description: clip(a.metaDescription, 320, "meta description", a.slug),
    meta_keywords: clip(keywords, 300, "keywords", a.slug),
    canonical_url: "",
    noindex: 0,
    og_title: clip(a.metaTitle, 120, "og title", a.slug),
    og_description: clip(a.metaDescription, 320, "og description", a.slug),
    og_image_url: imageUrl,
    faqs: "[]",
    auto_article_schema: 1,
    auto_faq_schema: 1,
    custom_schemas: JSON.stringify(schemas),
  };
  if (!DRY) {
    const now = new Date();
    const names = Object.keys(cols);
    if (existingId) {
      await conn.query(`UPDATE posts SET ${names.map((c) => `${c} = ?`).join(", ")}, updated_at = ?, updated_by = ? WHERE id = ?`, [...names.map((c) => cols[c]), now, adminId, existingId]);
    } else {
      await conn.query(
        `INSERT INTO posts (id, ${names.join(", ")}, created_at, updated_at, created_by, updated_by) VALUES (?, ${names.map(() => "?").join(", ")}, ?, ?, ?, ?)`,
        [randomUUID(), ...names.map((c) => cols[c]), now, now, adminId, adminId],
      );
    }
  }
  report.push({
    slug: a.slug, title: a.title.slice(0, 50), metaTitle: a.metaTitle.length, metaDesc: a.metaDescription.length,
    h2: a.blocks.filter((b) => b.t === "h2").length, h3: a.blocks.filter((b) => b.t === "h3").length,
    p: a.blocks.filter((b) => b.t === "p").length, lists: a.blocks.filter((b) => b.items).length,
    schema: schemas.map((s) => s.type).join("+") || "-", imageKB: Math.round((images[n]?.length ?? 0) / 1024), image: imageUrl ?? "(dry run)",
  });
}
if (conn) await conn.end();
console.table(report);
if (warnings.length) console.log("Warnings:\n- " + warnings.join("\n- "));
console.log(DRY ? "DRY RUN: nothing written." : `Imported ${report.length} posts dated ${PUBLISHED_AT} UTC.`);
if (DRY && process.argv.includes("--show")) {
  for (const a of articles) console.log(`\n===== ${a.slug}\nkeywords: ${[a.primary, ...a.secondary].join(", ")}\n${a.html}`);
}
