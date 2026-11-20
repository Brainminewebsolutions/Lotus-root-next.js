import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Manchester | Trusted SEO Experts",
  description:
    "Looking for SEO services in Manchester? The Lotus Roots helps businesses rank higher on Google, drive organic traffic, and grow with proven SEO strategies.",
  keywords: [
    "SEO Services Manchester",
    "SEO Manchester",
    "Local SEO Manchester",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/seo-services-manchester/",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyChooseUs = [
  {
    icon: "🗺️",
    title: "Clear Strategy",
    body: "We work with a clear, practical strategy. No fluff. No false commitments. Our experts comprehensively research your SEO situation, current rankings, keywords, etc., against that of the industry and competitors to create a strategic SEO roadmap.",
  },
  {
    icon: "🎯",
    title: "Personalised SEO",
    body: "Generic strategies don't work anymore. Every business is unique, and so should its SEO strategies. Accordingly, we provide highly personalised SEO services, specifically tailored to meet your objectives and expectations about the outcomes.",
  },
  {
    icon: "⚙️",
    title: "Technical and Content Expertise",
    body: "We nurture a team of handpicked SEO experts with extensive knowledge about the technicalities of SEO and content expertise that help you excel in each area of SEO. Together, our expertise and experience culminate in positive results in the form of increased rankings and high-conversion traffic.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    body: "As a genuine SEO company in Manchester, we ensure regular, transparent reporting that gives a clear picture of your SEO campaigns. But our experts don't just provide reports. They make strategic, technical alignments, based on the report insight, to ensure continuous improvement and optimisation.",
  },
  {
    icon: "🌱",
    title: "Sustainable SEO Growth",
    body: "SEO isn't magic. It is a combination of strategy, market intelligence, consistency and targeted efforts. The aim isn't to generate a sudden surge but achieve sustainable results. That's exactly what we do at Lotus Roots Technologies!",
  },
];

const whoWeHelp = [
  { icon: "🏪", label: "Local businesses aiming to increase enquiries" },
  { icon: "🏢", label: "Established companies improving online visibility" },
  { icon: "🚀", label: "Start-ups launching new websites" },
  { icon: "🛒", label: "E-commerce stores seeking more organic sales" },
  { icon: "📡", label: "Service providers expanding into new markets" },
];

const services = [
  {
    icon: "📍",
    title: "Local SEO Services in Manchester",
    body: "Our local SEO services in Manchester focus on improving visibility in local search results and map listings. Key activities include Google Business Profile optimisation, local keyword targeting, citation building and local directories, location-specific landing pages and review management. Consistent, focused efforts across these areas help Manchester businesses like yours appear when potential customers are searching for your services nearby.",
  },
  {
    icon: "🔧",
    title: "Technical SEO Optimisation",
    body: "Your website's rankings will suffer if search engines cannot crawl or understand your website. Accordingly, our technical SEO works by improving website speed, enhancing website performance, fixing crawl errors, repairing broken links, optimising mobile usability, implementing structured data and improving XML and indexing.",
  },
  {
    icon: "📄",
    title: "On-Page SEO for Manchester Businesses",
    body: "Search intent is at the centre of every SEO strategy today. On-page SEO focuses on improving the content and structure of individual pages to match the search intent. Thus, our optimisation process includes keyword targeting for relevant searches, title tag and meta description improvements, internal linking strategies, content structuring, heading optimisation, image optimisation and alt text updates. Search engines thus understand and rank your pages better.",
  },
  {
    icon: "🔗",
    title: "Off-Page SEO for Authority Building",
    body: "Search engines evaluate your website on various fronts. Trust and authority are two of the most crucial ones. At Lotus Roots Technologies, we help you build credibility and authority through various off-page SEO strategies, including ethical link-building, digital PR outreach, high-quality backlink acquisition, and brand mention monitoring.",
  },
  {
    icon: "✍️",
    title: "Content Strategy and SEO Copywriting",
    body: "High-quality content is integral to every SEO strategy. Therefore, we create content strategies that match the questions and interests of your audiences. Our expertise covers creating diverse content such as SEO blogs, service page optimisation, informational content targeting search queries and content updates for existing pages. Thoughtfully designed, strategic content doesn't just improve rankings but strengthens user trust.",
  },
  {
    icon: "🔍",
    title: "SEO Audits and Competitor Analysis",
    body: "In SEO, your starting point matters. Therefore, we audit your website to know where it stands. Our auditing process covers analysing your technical performance, keyword opportunities, competitor strategies, content gaps and backlink profiles. Auditing these aspects provides us with a clear picture and enables us to chalk a roadmap for SEO growth.",
  },
  {
    icon: "🛒",
    title: "eCommerce SEO Services in Manchester",
    body: "Online stores consist of numerous product pages. Ranking each can be overwhelming and impossible without the right SEO strategy. Lotus Roots Technologies also supports eCommerce stores operating in and around Manchester through product page optimisations, category page SEO, structured product data, site architecture improvements and organic traffic growth for product search pages. Thus, our SEO services help you increase site visibility and drive organic sales opportunities.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "SEO Discovery and Strategy",
    body: "We understand your challenges and current situation, and begin designing a strategy to overcome them and improve your SEO performance.",
  },
  {
    step: "02",
    title: "Keyword Research and Competitor Insights",
    body: "Our experts research relevant keywords, including those of your competitors, to determine exactly what your website needs.",
  },
  {
    step: "03",
    title: "Website and Technical Audit",
    body: "We then conduct a comprehensive website and technical audit to examine its performance across various aspects.",
  },
  {
    step: "04",
    title: "On-Page Optimisation",
    body: "Our specialists improve individual pages by refining keywords, headings, content structure and internal links.",
  },
  {
    step: "05",
    title: "Off-Page SEO and Link Building",
    body: "We also build authority and credibility through ethical link-building and digital outreach strategies.",
  },
  {
    step: "06",
    title: "Reporting, Analytics and Continuous Improvement",
    body: "We consider SEO an ongoing process and therefore, ensure regular reporting, analysis and continuous optimisation.",
  },
];

const industries = [
  { icon: "💼", label: "Professional services firms" },
  { icon: "🏥", label: "Healthcare providers" },
  { icon: "🔨", label: "Home improvement companies" },
  { icon: "🛍️", label: "Retail and e-commerce brands" },
  { icon: "🏨", label: "Hospitality businesses" },
  { icon: "💻", label: "Technology companies" },
  { icon: "🔧", label: "Local service providers" },
];

const packageIncludes = [
  "Keyword research and strategy",
  "Technical SEO improvements",
  "On-page optimisation",
  "Content creation and optimisation",
  "Link building campaigns",
  "Local SEO management",
  "Monthly performance reporting",
];

const faqs = [
  {
    q: "What makes your SEO services in Manchester different from others?",
    a: "Some factors that make us a distinguished SEO service provider in Manchester include practical commitments, custom SEO, focused strategies, and a team of experienced SEO professionals.",
  },
  {
    q: "Do you offer local SEO services in Manchester for small businesses?",
    a: "Yes. Our local SEO services in Manchester also cover small to medium-sized businesses.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "The exact timeframe cannot be committed to. Yet, targeted, consistent efforts drive positive changes in a few months.",
  },
  {
    q: "Are your SEO services available across the UK, not just Manchester?",
    a: "Yes. Apart from Manchester, our SEO services cover various cities of the United Kingdom, such as London, Liverpool, and Birmingham.",
  },
  {
    q: "What is included in your SEO packages?",
    a: "Based on the package you choose, our SEO packages include keyword research, technical optimisation, on-page SEO, link building, content strategy and performance tracking.",
  },
  {
    q: "Do you provide monthly SEO reports?",
    a: "Yes. We provide SEO reports every month, highlighting challenges, gaps, positive growth, etc. Essentially, the report provides insights into every aspect of the SEO campaign to make informed alignments, decisions and improvements.",
  },
  {
    q: "Can you improve rankings for an existing Manchester-based website?",
    a: "Yes. We work with existing websites to help them improve their local, Manchester-based rankings.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SEOServicesManchester() {
  return (
    <main className="bg-[#0d1117] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-4 text-center">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-500/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block mb-4 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-400 font-medium">
            Manchester · Trusted SEO Experts UK
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            SEO Services in{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Manchester
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Are you a Manchester-based business with a search engine presence,
            buried in the third result page of Google? Then, you aren't just
            losing visitors to your website but opportunities. Your top-ranking
            competitors are steering opportunities their way, while you, despite
            every competency, are struggling to be seen!
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            This is where our SEO services are in Manchester. We are Lotus Roots
            Technologies, an SEO company in Manchester that helps you optimise
            your search engine presence to make it more meaningful, productive
            and strategic. Our native Manchester expertise, combined with an
            understanding of customer behaviour and a team that comprises more
            than just SEO experts, helps you rank higher and drive high-quality
            prospects to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@thelotusroots.co.uk"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Get a Personalised SEO Plan
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our SEO Services{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                in Manchester?
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.slice(0, 3).map((item) => (
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
          <div className="grid md:grid-cols-2 gap-6 mt-6 md:max-w-2xl md:mx-auto">
            {whyChooseUs.slice(3).map((item) => (
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

      {/* ── Results-Oriented / Who we help ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Results-Oriented, Trusted SEO Agency{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  in the UK
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We aren't an SEO company anchored to Manchester. Our clientele
                is spread across the UK. Companies choose us not just because we
                help them rank, but also because we focus on improving search
                engine performance. We understand the UK market, customers,
                competitors, and the overall business landscape well. This
                understanding is reflected in our thoughtful, mature SEO
                strategies.
              </p>
              <p className="text-gray-400 text-sm mb-2 font-medium uppercase tracking-widest">
                We work with a simple yet crucial goal —
              </p>
              <p className="text-white font-semibold text-lg">
                helping businesses rank higher and derive tangible value.
              </p>
            </div>
            <div className="space-y-3">
              {whoWeHelp.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-gray-700/50 bg-[#111827] px-5 py-4 hover:border-pink-500/40 transition"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <span className="text-gray-200 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Manchester{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are a full-stack SEO company in Manchester with end-to-end
              support to ensure comprehensive SEO growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 hover:border-pink-500/40 transition"
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

      {/* ── Process ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                SEO Process Works
              </span>
            </h2>
            <p className="text-gray-400">
              We adhere to a well-defined SEO process that helps us achieve the
              outcomes we commit to.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-gray-700/50 bg-[#111827] p-7 hover:border-pink-500/40 transition"
              >
                <span className="block text-4xl font-bold bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent mb-3 leading-none">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.body}
                </p>
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
              Who We Work With — Helping UK Businesses{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Grow Digitally
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

      {/* ── Local SEO importance ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-orange-400/5 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Local SEO Matters for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Manchester Businesses
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Amid Manchester's highly competitive environment, local visibility
              and trust matter more than anything else. Our local SEO services
              in Manchester don't just focus on rankings but on enhancing these
              aspects to ensure you receive more local website traffic, higher
              enquiry rates from nearby customers and a stronger local brand
              recognition.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO Packages ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO Packages in Manchester,{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Personalised to Your Business Needs
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer customised SEO packages in Manchester to suit your
              business needs. Our SEO packages may include the following, based
              on the pricing plan you select.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {packageIncludes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-700/50 bg-[#0d1117] px-5 py-4 hover:border-pink-500/40 transition"
              >
                <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Rank and Grow? Partner With Us for Professional{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              SEO Services, Manchester
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We are prepared to help! Email us at{" "}
            <a
              href="mailto:sales@thelotusroots.co.uk"
              className="text-pink-400 hover:underline"
            >
              sales@thelotusroots.co.uk
            </a>{" "}
            to connect with our experts and get a complete, personalised SEO
            plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@thelotusroots.co.uk"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Email Us Today
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Contact Us
            </Link>
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
