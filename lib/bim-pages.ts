// Content for the four BIM landing pages, taken from
// "Lotus Roots - BIM Services UK Page Content" (pages 1 to 4).
// Inline links use [[anchor text|/path]]; every target comes from the PDF's
// Internal Linking Map and its in-text references.

export const SITE = "https://www.thelotusroots.co.uk";
export const WHATSAPP = "https://wa.me/447833818001";

export type Item = string | { label: string; text: string };

export type Block =
  | { t: "p"; text: string }
  | { t: "list"; items: Item[] }
  | { t: "chips"; items: string[] }
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "cards"; items: { title: string; text: string; href?: string }[] }
  | { t: "facts"; items: { label: string; text: string }[] };

export type Section = { title: string; blocks: Block[] };
export type Faq = { q: string; a: string };
export type Cta = { label: string; href: string; variant?: "primary" | "outline" | "whatsapp" };

export type BimPage = {
  slug: string;
  title: string; // <title> tag
  description: string; // meta description
  badge: string;
  h1: string;
  h1Highlight: string;
  lead: string;
  heroCtas: Cta[];
  sections: Section[];
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
  ctaButtons: Cta[];
  serviceName: string;
  serviceType: string[];
  areaServed: { type: "Country" | "City"; name: string };
};

const BLOG_ISO = "/blog/iso-19650-explained-for-small-design-teams";
const BLOG_CHOOSE = "/blog/how-to-choose-a-bim-outsourcing-partner";

export const BIM_PAGES: BimPage[] = [
  // ------------------------------------------------------------------ Page 1
  {
    slug: "bim-services-uk",
    title: "BIM Services UK | ISO 19650 BIM Modelling | Lotus Roots",
    description:
      "London-based BIM services for UK architects, engineers and contractors. ISO 19650-aligned modelling, coordination and AI-assisted delivery.",
    badge: "BIM Services UK",
    h1: "BIM Services for UK Architects, Engineers and Contractors",
    h1Highlight: "UK Architects, Engineers and Contractors",
    lead: "Accurate, coordinated BIM models delivered to UK standards, with AI-assisted workflows that reduce rework and keep your programme moving.",
    heroCtas: [
      { label: "Get a Free BIM Quote", href: "/contact", variant: "primary" },
      { label: "Book a 20-Minute Call", href: "/contact", variant: "outline" },
    ],
    sections: [
      {
        title: "Your BIM Partner in London and Across the UK",
        blocks: [
          {
            t: "p",
            text: "Lotus Roots Technologies is a London-based digital engineering company that supports UK design and construction teams with BIM modelling, coordination and information management. Our team works to ISO 19650 principles and the UK BIM Framework, so your models, drawings and data fit straight into your Common Data Environment (CDE).",
          },
          {
            t: "p",
            text: "We pair experienced BIM modellers with AI-assisted checking and automation. The aim is cleaner models, fewer clashes on site and faster turnaround, without adding overhead for your team.",
          },
          {
            t: "p",
            text: "Whether you need extra capacity on a live project or a full BIM delivery team, we work to your standards, your software and your deadlines. Based in the capital? See our [[BIM services in London|/bim-services-london]].",
          },
        ],
      },
      {
        title: "Why UK Projects Need BIM Done Properly",
        blocks: [
          {
            t: "p",
            text: "BIM has been required on centrally funded UK public sector projects since April 2016, and many private clients now issue Employer’s Information Requirements (EIRs) as a condition of appointment. Mistakes lead to rejected deliverables, redesign and delay.",
          },
          { t: "p", text: "Our BIM services help you:" },
          {
            t: "list",
            items: [
              "Meet EIR requirements and agreed Levels of Information Need",
              "Keep naming, coordinates and data consistent across every discipline",
              "Catch design clashes before they become costly site problems",
              "Hand over structured asset data ready for facilities management",
            ],
          },
          {
            t: "p",
            text: `New to the standard? Read our plain-English guide: [[ISO 19650 Explained for Small Design Teams|${BLOG_ISO}]].`,
          },
        ],
      },
      {
        title: "Our BIM Services",
        blocks: [
          {
            t: "cards",
            items: [
              { title: "CAD to BIM Conversion", text: "We turn 2D drawings (DWG, DXF, PDF) into intelligent Revit models at the level of detail you specify." },
              { title: "Scan to BIM", href: "/scan-to-bim-uk", text: "We convert point cloud data into accurate as-built models, ideal for refurbishment, retrofit and heritage projects." },
              { title: "3D BIM Modelling (Architecture, Structure and MEP)", text: "Coordinated, discipline-specific Revit models built to your BIM Execution Plan." },
              { title: "BIM Coordination and Clash Detection", href: "/bim-coordination-clash-detection", text: "Regular federated model reviews in Navisworks, with clear issue logs and tracked resolution." },
              { title: "Revit Family Creation", text: "Manufacturer-specific and generic content with correct parameters, ready for your library." },
              { title: "4D and 5D BIM", text: "Link models to programme and cost data to support planning, quantities and elemental cost plans." },
              { title: "BIM Execution Plans and Information Management", text: "Support with BEPs, EIR reviews, CDE set-up and information workflows." },
              { title: "Digital Twin Readiness", text: "Structured data and models prepared for operation, maintenance and facilities management." },
            ],
          },
        ],
      },
      {
        title: "The Lotus Roots Difference: BIM Plus AI",
        blocks: [
          { t: "p", text: "Most BIM providers sell modelling hours. We pair skilled modellers with AI-assisted tools that help with:" },
          {
            t: "list",
            items: [
              "Automated model checks against naming and data standards",
              "Faster extraction of quantities and schedules",
              "Early flagging of coordination issues",
              "Repetitive modelling tasks, so specialists can focus on design decisions",
            ],
          },
        ],
      },
      {
        title: "How We Work",
        blocks: [
          {
            t: "steps",
            items: [
              { title: "Brief and scoping", text: "Share your files, EIR and software requirements. We confirm scope, level of detail and timeline." },
              { title: "BIM Execution Plan", text: "We agree deliverables, responsibilities, naming and CDE structure." },
              { title: "Modelling and production", text: "Our team builds models to your standards and uploads them to your CDE." },
              { title: "Coordination and quality checks", text: "Scheduled clash reviews and model audits keep every discipline aligned." },
              { title: "Delivery and handover", text: "Final models, drawings and data are validated against the EIR and issued in your required formats." },
            ],
          },
          {
            t: "p",
            text: `Choosing a delivery partner? Our checklist will help: [[How to Choose a BIM Outsourcing Partner|${BLOG_CHOOSE}]].`,
          },
        ],
      },
      {
        title: "Sectors We Support",
        blocks: [
          {
            t: "chips",
            items: [
              "Commercial and office",
              "Residential and mixed-use",
              "Healthcare and education",
              "Retail and hospitality",
              "Infrastructure and civil",
              "Refurbishment and heritage",
              "Data centres",
            ],
          },
        ],
      },
      {
        title: "Who We Work With",
        blocks: [
          {
            t: "p",
            text: "Architects and designers, structural and MEP engineers, main contractors and subcontractors, quantity surveyors, developers, and facilities managers.",
          },
        ],
      },
      {
        title: "Areas We Serve",
        blocks: [
          {
            t: "p",
            text: "Based in London, we support projects across the UK, including Greater London and the South East, Manchester and Liverpool, Birmingham and the Midlands, Leeds and Yorkshire, Bristol and the South West, Glasgow and Edinburgh, and Cardiff.",
          },
        ],
      },
      {
        title: "Standards and Software",
        blocks: [
          {
            t: "facts",
            items: [
              { label: "Standards", text: "ISO 19650, UK BIM Framework, BIM Execution Plans, COBie." },
              { label: "Software", text: "Autodesk Revit, Navisworks, AutoCAD and Autodesk Construction Cloud." },
            ],
          },
        ],
      },
      {
        title: "Why Choose Lotus Roots",
        blocks: [
          {
            t: "list",
            items: [
              "London presence for clear communication and UK working hours",
              "A delivery team that works to UK standards and drawing conventions",
              "AI-assisted checking for cleaner models",
              "Flexible engagement: single project, ongoing support or dedicated team",
              "Happy to sign your NDA and work to your templates and BIM Execution Plan",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is BIM a legal requirement in the UK?",
        a: "BIM is not a legal requirement for every project, but it has been mandatory for centrally funded public sector projects since April 2016. Many private clients also require BIM deliverables in their appointment documents.",
      },
      {
        q: "What is ISO 19650 and why does it matter?",
        a: "ISO 19650 is the international standard for managing information over the life of a built asset. It sets out how teams name, share and approve project information in a Common Data Environment, which helps avoid errors and duplication.",
      },
      {
        q: "What is the difference between CAD to BIM and Scan to BIM?",
        a: "CAD to BIM converts existing 2D drawings into 3D models. Scan to BIM builds models from laser scan or point cloud data, so it captures the real as-built condition of a building.",
      },
      {
        q: "Can you work on our software and in our CDE?",
        a: "Yes. We work in your preferred platform and follow your naming conventions, templates and BIM Execution Plan.",
      },
      {
        q: "What level of detail can you deliver?",
        a: "We model to the level of detail or Level of Information Need defined in your EIR and BEP, from early design stages through to construction information.",
      },
      {
        q: "How much do BIM services cost?",
        a: "Cost depends on building size, disciplines, level of detail and turnaround. Send us your drawings or scope and we will reply with a clear, project-specific quote.",
      },
      {
        q: "Do you offer BIM outsourcing for consultancies and contractors?",
        a: "Yes. Many teams use us to add capacity during busy periods or to deliver specific packages such as modelling, coordination or drawing production.",
      },
      {
        q: "How do I get started?",
        a: "Send us a short brief or your files through our [[contact page|/contact]], or book a call. We will reply with scope questions and a quote.",
      },
    ],
    ctaTitle: "Ready to Speed Up Your Next Project?",
    ctaText: "Send us your drawings or brief and get a clear BIM quote.",
    ctaButtons: [
      { label: "Request a Quote", href: "/contact", variant: "primary" },
      { label: "Book a Call", href: "/contact", variant: "outline" },
      { label: "WhatsApp Us", href: WHATSAPP, variant: "whatsapp" },
    ],
    serviceName: "BIM Services UK",
    serviceType: ["BIM Modelling", "Scan to BIM", "BIM Coordination", "Information Management"],
    areaServed: { type: "Country", name: "United Kingdom" },
  },

  // ------------------------------------------------------------------ Page 2
  {
    slug: "scan-to-bim-uk",
    title: "Scan to BIM UK | Point Cloud to Revit Models | Lotus Roots",
    description:
      "Scan to BIM services for UK refurbishment, retrofit and heritage projects. Accurate Revit models from point cloud data. Get a quote.",
    badge: "Scan to BIM UK",
    h1: "Scan to BIM Services in the UK",
    h1Highlight: "Scan to BIM",
    lead: "Turn point cloud data into accurate, as-built Revit models your design team can trust.",
    heroCtas: [{ label: "Get a Scan to BIM Quote", href: "/contact", variant: "primary" }],
    sections: [
      {
        title: "What Is Scan to BIM?",
        blocks: [
          {
            t: "p",
            text: "Scan to BIM is the process of converting laser scan or photogrammetry point cloud data into a 3D BIM model. Instead of relying on old drawings that may be out of date, your team designs from the building as it really stands today.",
          },
          {
            t: "p",
            text: "It is especially valuable on refurbishment, retrofit, change-of-use and heritage projects, where undocumented alterations and uneven structures are common.",
          },
        ],
      },
      {
        title: "How Our Scan to BIM Service Works",
        blocks: [
          {
            t: "steps",
            items: [
              { title: "Receive your data", text: "You send point cloud files from your survey provider, along with any existing drawings." },
              { title: "Agree the specification", text: "We confirm which elements to model, the level of detail and the tolerance, based on your EIR or brief." },
              { title: "Model in Revit", text: "We build architectural, structural and MEP elements from the point cloud, using existing drawings only as a guide." },
              { title: "Check against the scan", text: "Models are compared with the point cloud to confirm they match the surveyed building." },
              { title: "Deliver", text: "You receive the Revit model and any agreed drawings, ready to upload to your CDE." },
            ],
          },
        ],
      },
      {
        title: "What We Can Model",
        blocks: [
          {
            t: "list",
            items: [
              "Walls, floors, roofs, stairs, doors and windows",
              "Structural frames, columns and slabs",
              "Ceilings, services and MEP routes visible in the scan",
              "Existing site and external envelope",
              "Rooms and spaces for area schedules",
            ],
          },
        ],
      },
      {
        title: "Where Scan to BIM Helps Most",
        blocks: [
          {
            t: "list",
            items: [
              "Refurbishment and fit-out of existing buildings",
              "Retrofit and energy-efficiency upgrades",
              "Heritage and listed buildings",
              "Extensions that must connect precisely to existing structures",
              "Facilities management and asset records",
            ],
          },
        ],
      },
      {
        title: "Why It Matters for Your Project",
        blocks: [
          {
            t: "list",
            items: [
              "Fewer surprises on site because design starts from measured conditions",
              "Better coordination between new and existing elements",
              "A reliable base model for clash detection. See [[BIM Coordination and Clash Detection|/bim-coordination-clash-detection]].",
              "A useful starting point for facilities and asset data",
            ],
          },
        ],
      },
      {
        title: "Related Services",
        blocks: [
          {
            t: "list",
            items: [
              "[[BIM Services UK|/bim-services-uk]]: our full range of modelling, coordination and information management",
              "[[BIM Coordination and Clash Detection|/bim-coordination-clash-detection]]",
              "[[BIM Services London|/bim-services-london]]",
              `[[How to Choose a BIM Outsourcing Partner|${BLOG_CHOOSE}]]`,
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What file formats can you work from?",
        a: "We commonly work from standard point cloud formats such as E57, RCP and LAS. If your surveyor uses something else, send it over and we will confirm.",
      },
      {
        q: "What level of detail do you model to?",
        a: "We follow the level of detail or Level of Information Need in your brief or EIR. Higher detail takes longer, so it is worth agreeing this at the start.",
      },
      {
        q: "Can you model from scans and old drawings together?",
        a: "Yes. Drawings help us understand design intent, while the point cloud decides what is modelled.",
      },
      {
        q: "Do you work in London and across the UK?",
        a: "Yes. We are based in London and support projects across the UK.",
      },
    ],
    ctaTitle: "Send Us Your Point Cloud",
    ctaText: "Share your files and brief and we will reply with a clear scope and quote. [[Contact us|/contact]].",
    ctaButtons: [{ label: "Get a Scan to BIM Quote", href: "/contact", variant: "primary" }],
    serviceName: "Scan to BIM UK",
    serviceType: ["Scan to BIM", "Point Cloud to Revit Modelling"],
    areaServed: { type: "Country", name: "United Kingdom" },
  },

  // ------------------------------------------------------------------ Page 3
  {
    slug: "bim-coordination-clash-detection",
    title: "BIM Coordination & Clash Detection UK | Lotus Roots",
    description:
      "BIM coordination and clash detection for UK projects. Navisworks model reviews, clear issue tracking and fewer site clashes. Request a quote.",
    badge: "BIM Coordination UK",
    h1: "BIM Coordination and Clash Detection Services",
    h1Highlight: "Clash Detection Services",
    lead: "Find and fix design conflicts in the model, not on site.",
    heroCtas: [{ label: "Request a Coordination Quote", href: "/contact", variant: "primary" }],
    sections: [
      {
        title: "Why BIM Coordination Matters",
        blocks: [
          {
            t: "p",
            text: "When architecture, structure and MEP are designed separately, services often collide with beams, ducts clash with pipes and clearances get missed. Fixing these problems on site is slow and expensive. Fixing them in the model costs a fraction of that.",
          },
          {
            t: "p",
            text: "Our BIM coordination service brings every discipline model together, checks them against each other and gives your team a clear list of issues to resolve.",
          },
        ],
      },
      {
        title: "What Our Service Includes",
        blocks: [
          {
            t: "list",
            items: [
              { label: "Federated model set-up", text: "We combine architectural, structural and MEP models into one coordinated model." },
              { label: "Clash detection", text: "We run automated checks in Navisworks to find hard clashes (objects occupying the same space) and soft clashes (clearance and access problems)." },
              { label: "Issue reporting", text: "Each issue is logged with a location, a screenshot, the disciplines involved and a recommended owner." },
              { label: "Coordination meetings", text: "We prepare model views and clash reports for your regular review sessions." },
              { label: "Tracking to closure", text: "We re-run checks as models update, so you can see which issues are resolved and which remain." },
            ],
          },
        ],
      },
      {
        title: "Our Coordination Process",
        blocks: [
          {
            t: "steps",
            items: [
              { title: "Agree the coordination rules", text: "Responsibilities, tolerances, clash tests and meeting rhythm are set out in the BIM Execution Plan." },
              { title: "Collect models", text: "Each discipline uploads its model to the CDE." },
              { title: "Run clash tests", text: "We test disciplines against each other and filter out noise, so you see real issues." },
              { title: "Report and review", text: "You receive a clear issue log and annotated views." },
              { title: "Re-check", text: "We repeat the cycle until the model is coordinated for issue." },
            ],
          },
        ],
      },
      {
        title: "Who Benefits",
        blocks: [
          {
            t: "facts",
            items: [
              { label: "Contractors", text: "fewer site changes and cleaner installation sequences" },
              { label: "MEP engineers", text: "better routes and clearances before fabrication" },
              { label: "Architects", text: "confidence that the design works in three dimensions" },
              { label: "Project managers", text: "clearer risk tracking and fewer late surprises" },
            ],
          },
        ],
      },
      {
        title: "Works Best With Accurate Base Models",
        blocks: [
          {
            t: "p",
            text: "Coordination is only as good as the models behind it. For existing buildings, we can start with a [[Scan to BIM|/scan-to-bim-uk]] model so new work is checked against the real building. For new builds, our [[3D BIM modelling|/bim-services-uk]] keeps every discipline to a common standard.",
          },
        ],
      },
      {
        title: "Related Pages",
        blocks: [
          {
            t: "list",
            items: [
              "[[BIM Services UK|/bim-services-uk]]",
              "[[Scan to BIM UK|/scan-to-bim-uk]]",
              "[[BIM Services London|/bim-services-london]]",
              `[[How to Choose a BIM Outsourcing Partner|${BLOG_CHOOSE}]]`,
              `[[ISO 19650 Explained for Small Design Teams|${BLOG_ISO}]]`,
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is a clash in BIM?",
        a: "A clash is a conflict between two model elements. A hard clash means two elements physically overlap, such as a duct passing through a beam. A soft clash means an element violates required clearance or access space.",
      },
      {
        q: "Which software do you use?",
        a: "We use Autodesk Navisworks for federated model checking, alongside Revit and your CDE.",
      },
      {
        q: "Can you coordinate models that other teams created?",
        a: "Yes. We can review models from other consultants, provided they are shared in agreed formats and follow the project’s naming and coordinate standards.",
      },
      {
        q: "How often should coordination take place?",
        a: "Most teams review at regular intervals set out in the BIM Execution Plan, with more frequent checks at busy design stages.",
      },
    ],
    ctaTitle: "Get Your Models Coordinated",
    ctaText: "Send us your models or project brief and we will reply with a scope and quote. [[Contact us|/contact]].",
    ctaButtons: [{ label: "Request a Coordination Quote", href: "/contact", variant: "primary" }],
    serviceName: "BIM Coordination and Clash Detection",
    serviceType: ["BIM Coordination", "Clash Detection", "Federated Model Review"],
    areaServed: { type: "Country", name: "United Kingdom" },
  },

  // ------------------------------------------------------------------ Page 4
  {
    slug: "bim-services-london",
    title: "BIM Services London | Revit Modelling & Coordination | Lotus Roots",
    description:
      "London-based BIM services: Revit modelling, Scan to BIM and clash detection for architects, engineers and contractors across London.",
    badge: "BIM Services London",
    h1: "BIM Services in London",
    h1Highlight: "London",
    lead: "Local BIM support for London architects, engineers and contractors, working to UK standards.",
    heroCtas: [
      { label: "Get a London BIM Quote", href: "/contact", variant: "primary" },
      { label: "Book a Call", href: "/contact", variant: "outline" },
    ],
    sections: [
      {
        title: "A London BIM Team You Can Reach Easily",
        blocks: [
          {
            t: "p",
            text: "Lotus Roots Technologies is based in London and supports design and construction teams across the capital. We offer the full range of BIM services under one roof, from modelling and coordination to information management, with clear communication in UK working hours.",
          },
          {
            t: "p",
            text: "London projects bring their own pressures: tight sites, existing buildings, strict planning and tight programmes. Our team helps you stay coordinated and compliant, so decisions are made on reliable information.",
          },
        ],
      },
      {
        title: "BIM Services for London Projects",
        blocks: [
          {
            t: "list",
            items: [
              "CAD to BIM conversion: 2D drawings turned into intelligent Revit models",
              "[[Scan to BIM|/scan-to-bim-uk]]: accurate as-built models for refurbishment, retrofit and heritage buildings",
              "3D BIM modelling: architecture, structure and MEP",
              "[[BIM coordination and clash detection|/bim-coordination-clash-detection]]: federated model reviews in Navisworks",
              "Revit family creation: content for your standard library",
              "4D and 5D BIM: programme and cost linked to the model",
              "BIM Execution Plans and CDE support: aligned to ISO 19650",
            ],
          },
          { t: "p", text: "See the full list on our [[BIM Services UK|/bim-services-uk]] page." },
        ],
      },
      {
        title: "Why London Teams Choose a Local Partner",
        blocks: [
          {
            t: "list",
            items: [
              "Easy communication in the same working hours",
              "Familiarity with UK drawing conventions and BIM standards",
              "Flexible support, from one-off packages to ongoing capacity",
              "AI-assisted checking that helps keep models consistent",
              "A clear route to discuss your brief and scope",
            ],
          },
        ],
      },
      {
        title: "Building Types We Support in London",
        blocks: [
          {
            t: "chips",
            items: [
              "Offices and commercial refurbishment",
              "Residential and mixed-use schemes",
              "Healthcare and education buildings",
              "Retail and hospitality fit-out",
              "Heritage and listed buildings",
              "Data centres",
            ],
          },
        ],
      },
      {
        title: "Areas We Cover",
        blocks: [
          {
            t: "p",
            text: "We support projects across Greater London, including Central London, the City, Westminster, Canary Wharf, the West End, and the surrounding boroughs, as well as the wider South East. For projects elsewhere, see our [[UK-wide BIM services|/bim-services-uk]].",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer BIM services for refurbishment projects in London?",
        a: "Yes. Refurbishment is a common use for our [[Scan to BIM service|/scan-to-bim-uk]], which creates an accurate model of the existing building.",
      },
      {
        q: "Can you work to our standards and CDE?",
        a: "Yes. We follow your BIM Execution Plan, naming conventions and platform.",
      },
      {
        q: "Do you support contractors as well as architects?",
        a: "Yes. We work with architects, engineers, contractors, quantity surveyors and developers.",
      },
      {
        q: "How do I choose a BIM provider?",
        a: `Our short guide explains what to check: [[How to Choose a BIM Outsourcing Partner|${BLOG_CHOOSE}]].`,
      },
    ],
    ctaTitle: "Talk to a London BIM Team",
    ctaText: "Tell us about your project and we will reply with a clear scope and quote. [[Contact us|/contact]].",
    ctaButtons: [{ label: "Get a London BIM Quote", href: "/contact", variant: "primary" }],
    serviceName: "BIM Services London",
    serviceType: ["BIM Modelling", "Revit Modelling", "Scan to BIM", "BIM Coordination"],
    areaServed: { type: "City", name: "London" },
  },
];

export const BIM_SLUGS = BIM_PAGES.map((p) => p.slug);
export const getBimPage = (slug: string) => BIM_PAGES.find((p) => p.slug === slug)!;

// "[[text|/path]]" -> plain "text" (for schema.org text fields)
export const stripLinks = (s: string) => s.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1");
