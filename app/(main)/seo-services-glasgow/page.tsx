import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Glasgow | Local SEO Agency",
  description:
    "Drive more business with professional SEO services in Glasgow. Lotus Roots helps improve your local Google rankings, organic traffic, and leads.",
  keywords: ["SEO Services Glasgow", "SEO Glasgow", "Local SEO Glasgow"],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/seo-services-glasgow",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const whyChooseUs = [
  {
    title: "Results-Driven SEO Approach",
    body: "We don't merely make efforts in the dark but build targeted strategies that drive focused efforts and thus, tangible results. Our clients benefit in terms of increased website traffic, number of leads, conversions and thus, opportunities.",
  },
  {
    title: "Transparent Strategy and Pricing",
    body: "We never give unpleasant surprises to our clients by introducing sudden or hidden costs. Instead, we maintain a transparent strategy and ensure just as transparent pricing to help our clients plan their SEO budget and stay aligned with their financial realities.",
  },
  {
    title: "Experience Across UK Industries",
    body: "Our team comprises native, UK-based SEO experts who understand the UK market and its dynamics. Therefore, we understand each UK target segment and what it wants to ensure our SEO strategies and solutions stay aligned with their needs.",
  },
];

const services = [
  {
    icon: "📍",
    title: "Local SEO Services Glasgow",
    body: "We optimise your website and online presence so that search engines clearly understand your location and services. Accordingly, our local SEO services in Glasgow include Google Business Profile optimisation, citation building, local keyword targeting, local directories, location-specific landing pages and review management.",
  },
  {
    icon: "🔧",
    title: "Technical SEO Audits",
    body: "Technical issues are a significant roadblock to your website's search engine presence and rankings. How would the search engines rank your website when they cannot crawl or comprehend your website? At Lotus Roots, we fix technical issues of your website by improving its speed, performance, repairing crawl errors and broken links, optimising mobile usability, implementing structured data and improving XML and indexing.",
  },
  {
    icon: "📄",
    title: "On-Page SEO Optimisation",
    body: "Ranking individual pages is integral to the overall search engine position of the website. Doing that requires optimising your pages for on-page SEO. Therefore, we optimise significant elements of your website, including page titles, meta descriptions, heading structures, internal linking, keyword placement and image optimisation. While making your website more comprehensible to search engines, the strategy also ensures your pages are more useful to the website's visitors.",
  },
  {
    icon: "✍️",
    title: "Content Strategy and SEO Copywriting",
    body: "High-quality, authoritative, relevant, informative and readable content is an integral part of every SEO strategy. Therefore, we also help create SEO-friendly content, aligned with user intent and which has extensively researched keywords (relevantly included) for better visibility. However, the content we produce focuses not just on keywords or visibility but on building authority, developing trust and driving premium prospects.",
  },
  {
    icon: "🔗",
    title: "Link Building and Digital PR",
    body: "Backlinks indicate trust and authority. Therefore, our SEO strategy and support also cover link-building strategies that focus on earning relevant, high-quality links from various trusted websites. Our experts also create digital PR and outreach that helps improve your website's authority and strengthen its rankings.",
  },
];

const localSeoItems = [
  {
    title: "Google Business Profile Optimisation",
    body: "Our specialists optimise your profile with accurate information, categories, images and descriptions to improve its performance across local searches. The result is better visibility and appearance in Google Maps and local search results.",
  },
  {
    title: "Local Citations and Directory Management",
    body: "We also ensure your business information is consistent across various trusted directories, making it easier for search engines to verify your location and legitimacy.",
  },
  {
    title: "Location-Based Keyword Targeting",
    body: "Our experts research keywords that customers in Glasgow use while searching for services like yours. Next, they integrate those keywords into your website to improve your local relevance.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Website Audit",
    body: "Our experts conduct a comprehensive audit of your website to identify issues, broken links, slow webpages, gaps, etc. Once audited, they provide a detailed, transparent report to identify the website's SEO needs.",
  },
  {
    step: "02",
    title: "Competitor and Keyword Research",
    body: "Once the SEO scope is defined, we take up competitor and keyword research to identify the keywords relevant to your website and those required to boost your rankings organically.",
  },
  {
    step: "03",
    title: "Strategy Development",
    body: "Then comes the SEO strategy part. Our strategy is a culmination of all the efforts we made in the earlier stages. Therefore, it comprehensively covers every essential aspect, including technical issues, content, keywords, etc., to meet your objectives and expectations.",
  },
  {
    step: "04",
    title: "Monthly Optimisation and Reporting",
    body: "SEO is an ongoing activity that requires consistent, yet optimised efforts. Our experts provide monthly reports that clearly highlight the website's SEO performance. They then provide recommendations to make informed improvements to the existing SEO strategy.",
  },
];

const tailoredServices = [
  {
    icon: "🛒",
    title: "SEO for eCommerce Stores",
    body: "Improving product visibility and category rankings, optimising product pages, improving site structure, and targeting keywords.",
  },
  {
    icon: "🏢",
    title: "SEO for Service-Based Businesses",
    body: "Enhancing visibility by optimising local landing pages, location keywords, and Google Business Profile.",
  },
  {
    icon: "🚀",
    title: "SEO for Startups and Local Brands",
    body: "Establishing a solid search presence while building authority in the long run.",
  },
];

const whySEO = [
  {
    title: "Increased Visibility and Local Leads",
    body: "Appearing in the top search results increases your likelihood of attracting new customers and opportunities.",
  },
  {
    title: "Higher Search Rankings",
    body: "Top- or high-ranking websites are often considered more trustworthy by users. They engage with such businesses more willingly.",
  },
  {
    title: "Long-Term Digital Growth",
    body: "An authoritative website with high rankings can drive users, website traffic and therefore business possibilities.",
  },
];

const faqs = [
  {
    q: "What is included in your SEO services Glasgow package?",
    a: "Inclusions vary with the package you choose. However, a comprehensive package involves a full website audit, keyword research, technical optimisation, on-page SEO improvements, content strategy, link building and regular reporting.",
  },
  {
    q: "How long does it take to see SEO results in Glasgow?",
    a: "Consistent, focused efforts can bring positive changes within a few months. However, the timeframe of results often varies based on various factors. Hence, we recommend connecting with us to discuss your specific requirements.",
  },
  {
    q: "Do you offer local SEO services in Glasgow for small businesses?",
    a: "Yes. Our local SEO services in Glasgow also cover small businesses from various domains.",
  },
  {
    q: "What makes The Lotus Roots different from other Glasgow SEO services?",
    a: "It is our commitment to excellence, custom, targeted SEO strategies, sustainable SEO outcomes, adherence to SEO best practices and our list of happy clients.",
  },
  {
    q: "How much do SEO services in Glasgow cost?",
    a: "The cost depends on the package you choose and any other additional efforts your SEO strategy demands. Hence, we suggest connecting with us to discuss the cost of your SEO campaign based on our assessment of your existing SEO performance and situation.",
  },
  {
    q: "Can you help my business appear on Google Maps in Glasgow?",
    a: "Yes. We optimise your Google Business Profile, while managing citations, and implementing local SEO strategies to enhance your chances of appearing on Google Maps in Glasgow.",
  },
];

// ─── Structured Data ─────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services Glasgow",
  description:
    "Professional SEO services in Glasgow helping businesses improve their Google rankings, organic traffic, and leads through local SEO, technical SEO, on-page optimisation, and link building.",
  provider: {
    "@type": "Organization",
    name: "Lotus Roots Technologies",
    url: "https://www.thelotusroots.co.uk",
  },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
    containedInPlace: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
  serviceType: "Search Engine Optimisation",
  url: "https://www.thelotusroots.co.uk/seo-services-glasgow",
};

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

export default function SEOServicesGlasgow() {
  return (
    <main className="bg-[#0d1117] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-4 text-center">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block mb-4 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-400 font-medium">
            Glasgow · UK-Based SEO Experts
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            SEO Services in{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Glasgow
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            Search engines are no longer just platforms to find web-based
            information. They've become business gateways. Websites that rank
            high are more visible and therefore receive a major chunk of the
            search engine traffic. While every business knows this, very few go
            beyond just presence. They struggle to reach the first page, let
            alone the top. As a result, they stay deprived of traffic and lose
            opportunities to competitors.
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Now, if you are one among them, you aren't alone. Lotus Roots
            Technologies, with its SEO services in Glasgow, is here to help. Our
            professional, personalised, and results-oriented SEO services don't
            just help you rank but drive tangible opportunities your way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Get a Free SEO Audit
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expert SEO intro ── */}
      <section className="py-16 px-4 bg-[#111827]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expert SEO Services in Glasgow for{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              UK Businesses
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Glasgow is a competitive market. Therefore, every business, whether
            big or small, established or new, competes for online presence and
            attention. At Lotus Roots, our SEO services in Glasgow help improve
            your website's search engine performance and ranking for relevant
            searches. We design specific SEO strategies that involve technical
            optimisation, content improvements, and authority building to
            deliver outcomes in terms of consistent, measurable, and sustainable
            growth.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose The Lotus Roots for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Glasgow SEO Services?
              </span>
            </h2>
            <p className="text-gray-400">
              Here are some reasons that make us a trustworthy partner in
              Glasgow for SEO services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#111827] p-6 hover:border-pink-500/40 transition"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-orange-400/20">
                  <span className="text-pink-400 text-lg">✦</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
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

      {/* ── Our Service Offering ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Glasgow{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                SEO Service Offering
              </span>
            </h2>
            <p className="text-gray-400">
              As a comprehensive SEO agency in Glasgow, here's what we offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 hover:border-pink-500/40 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
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

      {/* ── SEO for Small Businesses ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-orange-400/5 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SEO for Small Businesses{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                in Glasgow
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Small businesses usually compete with the larger players with a
              bigger marketing budget. Yet, most of them fail to create the
              impact. Now, it isn't the lack of budget alone that leads to such
              failures. Of course, budget matters. But many falter due to the
              lack of an effective SEO strategy. At Lotus Roots Technologies, we
              fill that gap through targeted strategies that enhance local
              visibility and attract prospects prepared to buy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Local SEO ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Local SEO Services in Glasgow to Help You{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Rank Locally
              </span>
            </h2>
            <p className="text-gray-400">
              Here's how we help local businesses rank with our local SEO
              services in Glasgow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {localSeoItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-6 hover:border-pink-500/40 transition"
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
              Our SEO Process:{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                How We Drive Growth
              </span>
            </h2>
            <p className="text-gray-400">
              Our disciplined and organised process is one of the cornerstones
              of our success as an SEO company in Glasgow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-gray-700/50 bg-[#111827] p-6 hover:border-pink-500/40 transition"
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

      {/* ── Tailored Services ── */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Glasgow SEO Services Tailored for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Your Business Goals
              </span>
            </h2>
            <p className="text-gray-400">
              We don't restrict ourselves to a particular type of business but
              work with companies from different domains to help them be seen
              and connected.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tailoredServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-700/50 bg-[#0d1117] p-7 text-center hover:border-pink-500/40 transition"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-400/20 text-2xl">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SEO ── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why SEO Is Essential for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Glasgow Businesses
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SEO isn't just about visibility as it was earlier. It has become
              strategic to a business's growth as it helps drive serious
              opportunities. Here are some reasons that make SEO essential for
              Glasgow-based businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whySEO.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700/50 bg-[#111827] p-6 hover:border-pink-500/40 transition"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400">
                  <span className="text-white text-sm font-bold">↑</span>
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
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started With Professional{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              SEO Services in Glasgow
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            SEO is foundational to your digital presence and real estate. So,
            strengthen with trusted SEO services in Glasgow, such as ours.
            Please email us at{" "}
            <a
              href="mailto:sales@thelotusroots.co.uk"
              className="text-pink-400 hover:underline"
            >
              sales@thelotusroots.co.uk
            </a>{" "}
            to connect with our experts and discover more about our SEO support
            and track record.
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
      <section className="py-20 px-4">
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
                className="group rounded-2xl border border-gray-700/50 bg-[#111827] px-6 py-5 hover:border-pink-500/40 transition"
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
