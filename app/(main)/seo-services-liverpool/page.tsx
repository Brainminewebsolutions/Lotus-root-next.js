import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Liverpool | Expert SEO Agency",
  description:
    "Grow your Liverpool business online with expert SEO services. Lotus Roots helps improve your Google rankings, attract customers, and increase leads.",
  keywords: ["SEO Services Liverpool", "SEO Liverpool", "Local SEO Liverpool"],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/seo-services-liverpool",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services Liverpool",
  description:
    "Expert SEO services in Liverpool helping businesses improve Google rankings, attract customers, and increase leads through comprehensive SEO strategies.",
  provider: {
    "@type": "Organization",
    name: "Lotus Roots Technologies",
    url: "https://www.thelotusroots.co.uk",
  },
  areaServed: {
    "@type": "City",
    name: "Liverpool",
    containedInPlace: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
  serviceType: "Search Engine Optimisation",
  url: "https://www.thelotusroots.co.uk/seo-services-liverpool",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyChooseUs = [
  {
    icon: "🇬🇧",
    title: "Experienced UK-Based SEO Specialists",
    body: "We nurture a team of experienced UK-based SEO specialists who understand the UK market, customer segments, behaviour, keywords and competition. They are outcome-driven professionals who strategise SEO and don't just enhance your rankings but drive opportunities.",
  },
  {
    icon: "📊",
    title: "Transparent, Ethical and Data-Driven SEO",
    body: "We understand SEO isn't a sprint but a marathon. Therefore, achieving results takes time. To deliver them, we adhere to only the best, data-driven SEO practices to ensure sustainable rankings and long-term results.",
  },
  {
    icon: "🎯",
    title: "Tailored Strategies for Local and National Businesses",
    body: "SEO isn't a one-size-fits-all approach. Each business, whether local or national, competes at varying levels. Therefore, the SEO needs of every business vary. Our SEO specialists acknowledge it and customise strategies that specifically align with the SEO requirements of businesses.",
  },
];

const services = [
  {
    icon: "🔧",
    title: "Technical SEO Audits & Fixes",
    body: "A solid technical foundation is integral to every SEO strategy. Therefore, we strengthen the technical base of your website through SEO audits to identify and fix issues such as slow page speed, broken links, duplicate content, poor mobile usability and indexing errors.",
  },
  {
    icon: "📄",
    title: "On-Page SEO Optimisation",
    body: "On-page SEO ensures that the website is structured correctly for users and search engines. Accordingly, our SEO expertise optimises page titles, meta descriptions, headings, content structure, internal linking, image alt text, and URL structure. By doing so, we make your pages clear, relevant, and aligned with target keywords, while maintaining the organic appeal and readability of your content.",
  },
  {
    icon: "🔍",
    title: "Keyword Research and Competitor Analysis",
    body: "At the core of every effective SEO strategy is research. Our experts identify search terms your customers are using. It covers high-intent and location-based keywords. Furthermore, we analyse your competitors to determine the keywords they rank for, the origin of their traffic, and gaps and opportunities across the market. It helps us position your business strategically and use target terms that contribute real value to your market.",
  },
  {
    icon: "✍️",
    title: "Content Strategy and Creation",
    body: "SEO is incomplete without content. Therefore, we build content strategies that align with your business goals and customer journey. This often covers service pages, location pages, blog articles and landing pages. We boast a team of content writers who write easily readable, authentic and informative content in simple UK English to resonate with the target segments.",
  },
  {
    icon: "🔗",
    title: "Link Building and Digital PR",
    body: "Premium backlinks are a crucial ranking factor. Thus, we focus on earning links from reputable websites and those relevant to your business. We adopt a strategic approach that includes outreach to industry websites, digital PR campaigns, guest postings, and local directory placements. Essentially, we prioritise quality over quantity. The result is an improved and sustainable website authority for better rankings and opportunities.",
  },
  {
    icon: "📈",
    title: "Monthly Reporting and Performance Tracking",
    body: "SEO is a continuous journey. Besides, search engines evolve rapidly. Therefore, we track rankings, traffic, conversions and user behaviour every month. Our SEO specialists provide comprehensive reports that indicate keyword performance, organic traffic growth, leads and enquiries generated and expected results vs achieved results. So, while working with us, you can expect regularity, transparency, and accountability.",
  },
];

const localSEO = [
  {
    title: "Google Business Profile Optimisation",
    body: "We optimise your listing to enhance visibility in local map results through accurate business information, keyword-rich descriptions, category optimisation, image updates and continuous management.",
  },
  {
    title: "Local Citations and NAP Consistency",
    body: "Local SEO thrives on various factors, including consistency. Thus, our experts ensure your business name, address and phone number are accurate across Liverpool online directories.",
  },
  {
    title: "Location-Based Keyword Optimisation",
    body: "We target local search terms and other service-based local phrases. Further, our experts create dedicated location pages and locally-focused content that helps you rank across various areas in and around Liverpool.",
  },
  {
    title: "Reputation and Review Management",
    body: "Each online review counts while building rankings and trust. We design review generation strategies to manage your online reputation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation and Strategy Planning",
    body: "Our experts enter a detailed discussion with your internal team to understand your pain points, challenges, competitors, etc., and design a strategic roadmap that leads to sustainable SEO success.",
  },
  {
    step: "02",
    title: "Website and Market Analysis",
    body: "Next, we conduct a comprehensive analysis of your website, competitors and industry landscape.",
  },
  {
    step: "03",
    title: "Implementation and Optimisation",
    body: "Once finalised, we implement your strategy, fix technical issues, manage content, build internal links and optimise your on-page content.",
  },
  {
    step: "04",
    title: "Tracking Results and Ongoing Improvements",
    body: "SEO requires continuous optimisation. So, we monitor your SEO results closely and make strategic adjustments wherever necessary.",
  },
];

const industries = [
  { icon: "🏪", label: "Local Businesses & Start-Ups" },
  { icon: "🛒", label: "E-Commerce Stores" },
  { icon: "💼", label: "Professional Services" },
  { icon: "💊", label: "Health, Wellness & Lifestyle Brands" },
  { icon: "💻", label: "SaaS & Technology Companies" },
];

const benefits = [
  {
    title: "Higher Google Rankings",
    body: "Better rankings improve visibility and drive quality opportunities.",
  },
  {
    title: "Increased Organic Traffic",
    body: "SEO drives qualified traffic with a higher conversion potential.",
  },
  {
    title: "More Leads & Conversions",
    body: "Not just leads, but SEO services optimise for conversions.",
  },
  {
    title: "Long-Term Growth",
    body: "Consistent and targeted SEO steers sustainable growth.",
  },
];

const trustReasons = [
  {
    icon: "🏆",
    title: "Proven Results and Case Studies",
    body: "We've built a solid, versatile portfolio that demonstrates our extensive capabilities to deliver positive, tangible outcomes.",
  },
  {
    icon: "💷",
    title: "Affordable and Flexible SEO Packages",
    body: "We offer multiple SEO packages in Liverpool, UK, to help you choose the one best-suited to your requirements.",
  },
  {
    icon: "👤",
    title: "Dedicated Account Manager",
    body: "While working with us, you get a dedicated project manager who oversees every aspect of the project, including planning, execution and optimisation.",
  },
];

const faqs = [
  {
    q: "What do your Liverpool SEO services include?",
    a: "Our SEO services in Liverpool cover technical audits, on-page optimisation, keyword research, content creation, link building, local SEO and monthly reporting.",
  },
  {
    q: "How long does SEO take to show results in Liverpool?",
    a: "One cannot commit to a timeframe. SEO is a long-term strategy that needs consistent, targeted efforts. Hence, results depend on different factors and alignments needed. Yet, you will start seeing positive, measurable results in a few months from the day you execute your SEO strategy.",
  },
  {
    q: "Do you provide local SEO services in Liverpool for small businesses?",
    a: "Yes. We also specialise in SEO services in Liverpool to help small businesses rank and grow.",
  },
  {
    q: "How much do professional SEO services in Liverpool cost?",
    a: "The cost depends on the package you choose. We recommend connecting with us to get an estimate for the SEO support you specifically need.",
  },
  {
    q: "Can your SEO services help my business grow in the UK?",
    a: "Yes. We don't just focus on rankings but on driving high-quality traffic to help you thrive amid the competitive and dynamic market environment of the UK.",
  },
];

// ─── Structured Data ─────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SEOServicesLiverpool() {
  return (
    <main className="bg-[#0d1117] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-4 text-center">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-500/8 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block mb-4 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-400 font-medium">
            Liverpool · UK-Based SEO Experts
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            SEO Services{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              in Liverpool
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Struggling to be seen in search engine results? Well, if your
            prospects in Liverpool aren't seeing you, they may be seeing your
            competitors. Thus, you may be losing opportunities without even
            knowing or realising. Liverpool is a competitive business
            playground. Hence, merely launching a website doesn't suffice. You
            must invest in search engine optimisation (SEO) to ensure prospects,
            when they search for you, find you in the top results. So, how do
            you ensure that? The answer is the SEO services of Lotus Roots
            Technologies in Liverpool. We are seasoned SEO specialists with a
            proven track record of helping businesses from diverse domains
            enhance their search engine visibility and drive high-quality
            traffic for various searches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Request a Free Website Audit
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Professional{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                SEO Services in Liverpool?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Effective SEO is often the difference between thriving and
              struggling businesses. Therefore, search engine rankings aren't
              just about visibility. They are a business growth strategy. So,
              for something as crucial, you need the right SEO company in
              Liverpool by your side.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 hover:border-pink-500/40 transition"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-400/20 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Liverpool SEO Services Designed to{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-700/50 bg-[#111827] p-7 hover:border-pink-500/40 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local SEO ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Local SEO Services Liverpool —{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Get Found in Your Area
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {localSEO.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 hover:border-pink-500/40 transition"
              >
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
                <h3 className="text-base font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                SEO Process
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-gray-700/50 bg-[#111827] p-7 hover:border-pink-500/40 transition"
              >
                <span className="shrink-0 text-4xl font-bold bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent leading-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Support Across{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Liverpool & the UK
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex items-center gap-3 rounded-full border border-gray-700/50 bg-[#0d1117] px-6 py-3 hover:border-pink-500/40 transition"
              >
                <span className="text-xl">{ind.icon}</span>
                <span className="text-gray-200 font-medium text-sm">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Investing in SEO for Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Liverpool Business
              </span>
            </h2>
            <p className="text-gray-400">
              Here's why you must invest in SEO for your Liverpool-based
              business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-700/50 bg-[#111827] p-6 text-center hover:border-pink-500/40 transition"
              >
                <div className="mb-3 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Liverpool Businesses Trust LRT ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Liverpool Businesses Trust{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                The Lotus Roots
              </span>
            </h2>
            <p className="text-gray-400">
              Many of the industry's best work with us for the following
              reasons.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trustReasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 hover:border-pink-500/40 transition"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-400/20 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-orange-400/5 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started With SEO Services in{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Liverpool Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              So, why struggle to be seen? Connect with us and step closer
              toward business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
              >
                Request a Free Website Audit
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
              >
                Get Your Free SEO Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-700/50 bg-[#0d1117] px-6 py-5 hover:border-pink-500/40 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between text-white font-semibold list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-pink-400 transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
