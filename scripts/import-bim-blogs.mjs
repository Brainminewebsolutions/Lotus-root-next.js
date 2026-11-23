// Adds the two blog posts from "Lotus Roots - BIM Services UK Page Content.docx.pdf"
// (pages 5 and 6) to the admin dashboard, with the featured images embedded in
// the PDF, meta title/description, internal hyperlinks and schemas.
// Safe to re-run: posts are matched by slug and updated.
//
//   node --env-file=.env.local scripts/import-bim-blogs.mjs "<pdf>" --dry-run
//   node --env-file=.env.local scripts/import-bim-blogs.mjs "<pdf>"
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const PDF = process.argv[2];
const DRY = process.argv.includes("--dry-run");
if (!PDF) {
  console.error('Usage: node --env-file=.env.local scripts/import-bim-blogs.mjs "<file.pdf>" [--dry-run]');
  process.exit(1);
}
const SITE = "https://www.thelotusroots.co.uk";
// Never later than now: a post dated in the future is treated as scheduled and hidden from the website.
const wanted = Date.parse("2026-11-20T09:00:00Z");
const PUBLISHED_AT = new Date(Math.min(wanted, Date.now() - 60_000)).toISOString().replace("T", " ").slice(0, 19); // UTC
const AUTHOR = "Lotus Roots Technologies";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// "[[text|/path]]" -> link
const rich = (s) =>
  esc(s).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, t, h) => `<a href="${SITE}${h}">${t}</a>`);
const plain = (s) => s.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1");
const p = (s) => `<p>${rich(s)}</p>`;
const h2 = (s) => `<h2>${esc(s)}</h2>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${rich(i)}</li>`).join("")}</ul>`;
const lead = (s) => {
  const m = /^([^.]+\.)\s(.*)$/.exec(s);
  return `<li><strong>${esc(m[1])}</strong> ${rich(m[2])}</li>`;
};

const ISO = "/blog/iso-19650-explained-for-small-design-teams";
const CHOOSE = "/blog/how-to-choose-a-bim-outsourcing-partner";

// ---------------------------------------------------------------- Blog 5
const checklist = [
  ["1. Check They Understand UK Standards", `A provider that has not worked to UK requirements will often produce models that need rework. Ask whether they work to ISO 19650 principles, how they handle EIRs and BIM Execution Plans, and whether they understand UK naming, drawing conventions and CDE workflows. If standards are new to your team, start with our guide to [[ISO 19650 for small design teams|${ISO}]].`],
  ["2. Confirm Software and CDE Compatibility", "Your partner should work in the versions of Revit, Navisworks and CDE platform your project uses. Ask which software versions they run, whether they can work inside your CDE, and how they exchange files with other consultants."],
  ["3. Ask How They Check Quality", "Quality problems are the biggest hidden cost in outsourced BIM. Ask what checks happen before delivery, whether models are audited for naming, parameters and level of detail, and how errors are reported and fixed. A provider with a clear quality process will describe it easily."],
  ["4. Review Their Coordination Approach", "Modelling is only part of the job. If your project needs coordination, ask how they run clash tests, log issues and track them to closure. See what a good process looks like in our [[BIM coordination and clash detection service|/bim-coordination-clash-detection]]."],
  ["5. Look at Communication and Time Zones", "Fast answers keep projects moving. Check who your day-to-day contact will be, what hours they are available, and how they handle urgent changes. A provider with a UK base, such as [[our London team|/bim-services-london]], can make this simpler."],
  ["6. Understand Data Security", "You are sharing project drawings and data. Ask whether they will sign your NDA, how files are stored and who can access them, and whether they follow your CDE’s access rules."],
  ["7. Get the Scope and Pricing in Writing", "Unclear scope leads to disputes. A good quote lists the disciplines, the level of detail, the deliverables, the number of revisions included and the expected timeline. Ask how changes to scope are priced."],
  ["8. Start Small When You Can", "A small first package lets you test quality, communication and reliability before committing to a larger project."],
];
const blog5Html = [
  p("Outsourcing BIM work can add capacity, speed up delivery and give you access to specialist skills. But the wrong partner can cost you more in rework than you save. This checklist helps UK design and construction teams compare providers with confidence."),
  ...checklist.flatMap(([h, t]) => [h2(h), p(t)]),
  h2("Red Flags to Watch For"),
  ul([
    "Vague answers about standards or quality checks",
    "No clear point of contact",
    "A very low price with no breakdown",
    "Reluctance to explain their process",
    "Promises of unusually fast turnaround without understanding your scope",
  ]),
  h2("What to Send for an Accurate Quote"),
  p("To get a reliable price, share:"),
  ul([
    "Drawings, point clouds or existing models",
    "The EIR or project brief",
    "Disciplines and level of detail required",
    "Software versions and CDE platform",
    "Programme and deadlines",
  ]),
  h2("Next Step"),
  p("If you are comparing BIM providers, we are happy to talk through your project. Read about our full range of [[BIM services in the UK|/bim-services-uk]], or [[contact us|/contact]] for a quote."),
].join("\n");

// ---------------------------------------------------------------- Blog 6
const terms = [
  ["EIR (Exchange Information Requirements)", "The client’s list of what information they need, and in what form"],
  ["BEP (BIM Execution Plan)", "Your plan for how the team will deliver that information"],
  ["CDE (Common Data Environment)", "The shared digital space where project information is stored and exchanged"],
  ["Level of Information Need", "How much detail and information each model element must have"],
  ["Appointing party", "The client or organisation asking for the work"],
  ["Task team", "A group within your delivery team responsible for a set of deliverables"],
];
const steps6 = [
  "Read the EIR carefully. Note what is asked for, in what format and by when.",
  "Agree a BIM Execution Plan. Record who does what, which software versions you use and how files will be named.",
  "Set up your CDE. Use one shared location with clear folders and a simple approval flow, so everyone knows which version is current.",
  "Use consistent naming. Agree a file-naming convention and stick to it across all disciplines.",
  "Check before you share. Review models and drawings for errors and missing information before they leave your team.",
];
const blog6Html = [
  p("ISO 19650 can sound like a standard written for large organisations. In practice, it is a set of sensible rules for managing project information, and small teams can apply it without a big budget. This guide explains the basics."),
  h2("What Is ISO 19650?"),
  p("ISO 19650 is the international standard for organising and digitising information about buildings and civil engineering works using BIM. It describes how teams should create, share and manage information throughout a project and the life of an asset. In the UK, it sits alongside the UK BIM Framework, which gives national guidance for applying it."),
  p("In simple terms, it answers three questions: what information is needed, who provides it, and how is it shared and checked."),
  h2("Why It Matters for Small Teams"),
  p("More clients now ask for ISO 19650-aligned working in tenders and appointments. Even when it is not required, the same habits reduce confusion, duplicated drawings and version errors, which small teams cannot afford."),
  h2("Key Terms in Plain English"),
  `<ul>${terms.map(([t, m]) => `<li><strong>${esc(t)}:</strong> ${esc(m)}</li>`).join("")}</ul>`,
  h2("Five Practical Steps to Get Started"),
  `<ol>${steps6.map(lead).join("")}</ol>`,
  h2("Common Mistakes to Avoid"),
  ul([
    "Starting to model before the information requirements are clear",
    "Sharing files by email instead of through the CDE",
    "Inconsistent naming and coordinates between disciplines",
    "Modelling to a higher level of detail than the project needs",
    "Treating BIM as a software task rather than an information process",
  ]),
  h2("Where Outside Support Helps"),
  p(`Small teams do not need to build every BIM capability in-house. You can bring in support for modelling, [[clash detection and coordination|/bim-coordination-clash-detection]] or BIM Execution Plans when a project needs it. If you are weighing up providers, read [[How to Choose a BIM Outsourcing Partner|${CHOOSE}]].`),
  h2("Need a Hand With ISO 19650-Aligned BIM?"),
  p("Our team supports UK architects, engineers and contractors with modelling, coordination and information management. Explore our [[BIM Services UK|/bim-services-uk]] or [[get in touch|/contact]]."),
].join("\n");

// ---------------------------------------------------------------- posts
const posts = [
  {
    slug: "how-to-choose-a-bim-outsourcing-partner",
    title: "How to Choose a BIM Outsourcing Partner: A Practical Checklist",
    metaTitle: "How to Choose a BIM Outsourcing Partner | Lotus Roots",
    metaDescription: "A practical checklist for choosing a BIM outsourcing partner: standards, software, quality control, communication, security and pricing.",
    html: blog5Html,
    imageIndex: 0,
    schema: () => {
      const items = checklist.map(([h, t]) => ({ name: h.replace(/^\d+\.\s+/, ""), description: plain(t) }));
      return [
        ["ItemList", {
          "@context": "https://schema.org", "@type": "ItemList",
          name: "How to choose a BIM outsourcing partner: 8-point checklist",
          url: `${SITE}/blog/how-to-choose-a-bim-outsourcing-partner`, numberOfItems: items.length,
          itemListElement: items.map((it, n) => ({ "@type": "ListItem", position: n + 1, ...it })),
        }],
      ];
    },
  },
  {
    slug: "iso-19650-explained-for-small-design-teams",
    title: "ISO 19650 Explained for Small Design Teams",
    metaTitle: "ISO 19650 Explained for Small Design Teams | Lotus Roots",
    metaDescription: "A plain-English guide to ISO 19650: what it is, key terms, and five practical steps for small UK design teams to get started.",
    html: blog6Html,
    imageIndex: 1,
    schema: (imageUrl) => {
      const step = steps6.map((s) => {
        const m = /^([^.]+)\.\s(.*)$/.exec(s);
        return { "@type": "HowToStep", name: m[1], text: m[2] };
      });
      return [
        ["HowTo", {
          "@context": "https://schema.org", "@type": "HowTo",
          name: "Five practical steps to get started with ISO 19650",
          description: "A plain-English guide to ISO 19650: what it is, key terms, and five practical steps for small UK design teams to get started.",
          ...(imageUrl ? { image: imageUrl } : {}), step,
        }],
      ];
    },
  },
];

// ---------------------------------------------------------------- images (DCT/JPEG streams embedded in the PDF)
const buf = readFileSync(PDF);
const txt = buf.toString("latin1");
const jpegs = [];
for (const m of txt.matchAll(/(\d+) 0 obj\s*<<([^]*?)>>\s*stream\r?\n/g)) {
  if (!/\/Subtype\s*\/Image/.test(m[2])) continue;
  if (!/\/Filter\s*\/DCTDecode/.test(m[2])) throw new Error(`Unexpected image encoding in object ${m[1]}`);
  const len = Number(/\/Length (\d+)/.exec(m[2])[1]);
  const start = m.index + m[0].length;
  jpegs.push(buf.subarray(start, start + len));
}
if (jpegs.length !== posts.length) throw new Error(`Expected ${posts.length} images, found ${jpegs.length}`);
const images = await Promise.all(jpegs.map((j) => sharp(j).webp({ quality: 88 }).toBuffer()));

// ---------------------------------------------------------------- write
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
for (const post of posts) {
  let imageUrl = null, existingId = null;
  if (!DRY) {
    const [ex] = await conn.query("SELECT id, featured_image_url FROM posts WHERE post_type='blog' AND slug = ?", [post.slug]);
    existingId = ex[0]?.id ?? null;
    imageUrl = ex[0]?.featured_image_url?.startsWith("/media/") ? ex[0].featured_image_url : null;
    if (!imageUrl) {
      const img = images[post.imageIndex];
      const [ins] = await conn.query("INSERT INTO media (mime, size, data, created_by, created_at) VALUES (?, ?, ?, ?, ?)", ["image/webp", img.length, img, adminId, new Date()]);
      imageUrl = `/media/${ins.insertId}`;
    }
  }
  const schemas = post.schema(imageUrl ? `${SITE}${imageUrl}` : undefined).map(([type, obj]) => ({ type, json: JSON.stringify(obj, null, 2) }));
  const cols = {
    post_type: "blog", status: "published", title: post.title, slug: post.slug,
    excerpt: post.metaDescription, content_html: post.html, author_name: AUTHOR,
    featured_image_url: imageUrl, featured_image_alt: post.title, published_at: PUBLISHED_AT,
    focus_keyphrase: "", meta_title: post.metaTitle, meta_description: post.metaDescription, meta_keywords: "",
    canonical_url: "", noindex: 0, og_title: post.metaTitle, og_description: post.metaDescription, og_image_url: imageUrl,
    faqs: "[]", auto_article_schema: 1, auto_faq_schema: 1, custom_schemas: JSON.stringify(schemas),
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
    slug: post.slug, metaTitle: post.metaTitle.length, metaDesc: post.metaDescription.length,
    links: (post.html.match(/<a href/g) || []).length, h2: (post.html.match(/<h2>/g) || []).length,
    schema: schemas.map((s) => s.type).join("+"), imageKB: Math.round(images[post.imageIndex].length / 1024), image: imageUrl ?? "(dry run)",
  });
}
if (conn) await conn.end();
console.table(report);
console.log(DRY ? "DRY RUN: nothing written." : `Imported ${report.length} posts dated ${PUBLISHED_AT} UTC.`);
