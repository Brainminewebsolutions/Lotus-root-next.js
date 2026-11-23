import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle } from "lucide-react";
import { SITE, stripLinks, type BimPage, type Block, type Cta, type Item } from "@/lib/bim-pages";

// Renders "[[anchor|/path]]" markup as site links.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^|\]]+\|[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(part);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        return (
          <Link
            key={i}
            href={href}
            className="text-pink-400 underline decoration-pink-400/40 underline-offset-4 hover:text-orange-400 hover:decoration-orange-400 transition-colors"
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}

function Button({ cta }: { cta: Cta }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold transition-all duration-300";
  if (cta.variant === "outline") {
    return (
      <Link href={cta.href} className={`${base} border border-gray-600 text-gray-200 hover:border-pink-500 hover:text-white`}>
        {cta.label}
      </Link>
    );
  }
  if (cta.variant === "whatsapp") {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] text-white hover:brightness-110 hover:shadow-lg hover:shadow-green-500/20`}
      >
        <MessageCircle size={18} />
        {cta.label}
      </a>
    );
  }
  return (
    <Link
      href={cta.href}
      className={`${base} group bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-0.5`}
    >
      {cta.label}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

function ListItem({ item }: { item: Item }) {
  return (
    <li className="flex gap-3 rounded-xl border border-gray-700/50 bg-[#0d1117]/60 p-4 hover:border-pink-500/30 transition-colors">
      <CheckCircle2 className="mt-0.5 shrink-0 text-pink-400" size={20} />
      <span className="text-gray-300 leading-relaxed">
        {typeof item === "string" ? (
          <Rich text={item} />
        ) : (
          <>
            <strong className="text-white font-semibold">{item.label}:</strong> <Rich text={item.text} />
          </>
        )}
      </span>
    </li>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <p className="text-gray-300 text-lg leading-relaxed mb-5 last:mb-0">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="grid md:grid-cols-2 gap-4 my-6 first:mt-0 last:mb-0">
          {block.items.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </ul>
      );
    case "chips":
      return (
        <ul className="flex flex-wrap gap-3 my-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm md:text-base font-medium text-pink-300"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-4 my-6 first:mt-0">
          {block.items.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl border border-gray-700/50 bg-[#0d1117]/60 p-5 md:p-6 hover:border-pink-500/30 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-lg font-bold text-white shadow-lg shadow-pink-500/20">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  <Rich text={step.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "cards":
      return (
        <div className="grid md:grid-cols-2 gap-6 my-2">
          {block.items.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-700/50 bg-[#0d1117]/60 p-6 hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.href ? (
                  <Link href={card.href} className="hover:text-pink-400 transition-colors">
                    {card.title}
                    <ArrowRight size={16} className="inline ml-2 -mt-0.5 text-pink-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  card.title
                )}
              </h3>
              <p className="text-gray-300 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      );
    case "facts":
      return (
        <dl className="grid md:grid-cols-2 gap-4 my-2">
          {block.items.map((f) => (
            <div key={f.label} className="rounded-2xl border border-gray-700/50 bg-[#0d1117]/60 p-6">
              <dt className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-1">
                {f.label}
              </dt>
              <dd className="text-gray-300 text-lg leading-relaxed">{f.text}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

function schemaFor(page: BimPage) {
  const url = `${SITE}/${page.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceName,
      description: page.description,
      serviceType: page.serviceType,
      url,
      provider: {
        "@type": "Organization",
        name: "Lotus Roots Technologies",
        url: SITE,
        logo: `${SITE}/LRT-logo.webp`,
        email: "sales@thelotusroots.co.uk",
        telephone: "+442038703808",
      },
      areaServed:
        page.areaServed.type === "City"
          ? { "@type": "City", name: page.areaServed.name, containedInPlace: { "@type": "Country", name: "United Kingdom" } }
          : { "@type": "Country", name: page.areaServed.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: page.badge, item: url },
      ],
    },
  ];
}

export default function BimLandingPage({ page }: { page: BimPage }) {
  const [before, after] = page.h1.split(page.h1Highlight);
  const schemas = schemaFor(page);

  return (
    <main className="bg-[#0d1117] text-white overflow-hidden">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }} />
      ))}

      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-full bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full" />

        <div className="relative mx-auto max-w-5xl pt-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{page.badge}</span>
          </nav>

          <span className="inline-block mb-6 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-400 font-medium">
            {page.badge}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {before}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">{page.h1Highlight}</span>
            {after}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">{page.lead}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {page.heroCtas.map((cta) => (
              <Button key={cta.label} cta={cta} />
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      {page.sections.map((section, i) => (
        <section key={section.title} className={`py-16 md:py-20 px-4 ${i % 2 === 0 ? "bg-[#111827]" : "bg-[#0d1117]"}`}>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{section.title}</h2>
            <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
            {section.blocks.map((block, j) => (
              <BlockView key={j} block={block} />
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className={`py-16 md:py-20 px-4 ${page.sections.length % 2 === 0 ? "bg-[#111827]" : "bg-[#0d1117]"}`}>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Frequently Asked Questions</h2>
          <div className="mb-10 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-700/50 bg-[#111827] open:border-pink-500/40 transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="shrink-0 text-pink-400 transition-transform duration-300 group-open:rotate-180" size={22} />
                </summary>
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-300 leading-relaxed">
                  <Rich text={faq.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 text-center border-t border-pink-500/20 bg-gradient-to-r from-pink-500/10 via-[#111827] to-orange-400/10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{page.ctaTitle}</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            <Rich text={page.ctaText} />
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            {page.ctaButtons.map((cta) => (
              <Button key={cta.label} cta={cta} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
