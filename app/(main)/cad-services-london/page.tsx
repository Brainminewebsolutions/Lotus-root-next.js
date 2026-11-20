import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CAD Services London | 2D & 3D Design",
  description:
    "Looking for accurate CAD services in London? Lotus Roots provides professional 2D drafting and 3D modeling tailored to your needs. Get a quote!",
  keywords: [
    "CAD services London",
    "CAD drafting services London",
    "3D CAD design London",
    "CAD drawing services UK",
    "CAD design services London",
    "2D CAD drafting",
    "3D CAD modelling",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/cad-services-london",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CAD Services London",
  description:
    "Professional 2D drafting and 3D CAD modeling services in London. Lotus Roots provides accurate CAD design, drafting, and drawing services for architecture, engineering, and construction projects.",
  provider: {
    "@type": "Organization",
    name: "Lotus Roots Technologies",
    url: "https://www.thelotusroots.co.uk",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    containedInPlace: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
  serviceType: ["CAD Drafting", "3D CAD Modeling", "2D CAD Drafting"],
  url: "https://www.thelotusroots.co.uk/cad-services-london",
};

export default function CADServicesLondon() {
  return (
    <main className="bg-[#0d1117] text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full" />

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-block mb-4 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-400 font-medium">
            CAD Design & Drafting Services in London
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            CAD Services in London:{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              2D Drafting & 3D Modeling Experts
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Looking for professional CAD services in London? Lotus Roots
            Technologies has got you covered. Our comprehensive, expert support
            drives concepts to detailed, actionable plans. From CAD design
            services to 3D CAD drawing support, our expertise and CAD support
            cover it all. Explore more about our CAD design services in the UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@lotusrootstechnologies.com"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Get a Free Quote
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* What Are CAD Services */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What are CAD Services
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            CAD stands for Computer-Aided Design, which refers to advanced
            software-based, precise models, technical drawings and simulations.
            It helps improve design accuracy, reduce errors and streamline
            workflows.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Professional CAD services are crucial for modern industries as they
            enable them to visualise, design and refine concepts before they
            enter the production phase.
          </p>
        </div>
      </section>

      {/* Why Businesses Need CAD */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Businesses Need Professional CAD Services London
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            London is a fast-paced, innovative market where competence matters.
            It demands superior digital design solutions that match new-age
            consumer needs and expectations.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Professional CAD services help UK-based businesses maintain
            competence and relevance through:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Exceptional accuracy",
              "Design output consistency",
              "Quicker project turnaround",
              "Seamless scalability",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-700 bg-[#111827] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-gray-200 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 leading-relaxed">
            CAD design services help businesses deliver better results while
            ensuring efficiency and compliance.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Benefits of CAD Services for Businesses
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Here are some reasons that make CAD services a must for modern
            businesses.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "High Accuracy",
                desc: "CAD eliminates manual drafting errors and ensures the designs comply with the specifications and industry standards involved.",
              },
              {
                title: "Faster Project Turnaround",
                desc: "Automated tools and digital workflows expedite work. Technology helps reduce design time, helping businesses meet deadlines.",
              },
              {
                title: "Cost Efficiency and Resource Optimisation",
                desc: "CAD drafting services also help minimise rework and material waste, thus lowering project costs.",
              },
              {
                title: "Enhanced Visualisation with 3D CAD",
                desc: "3D CAD design services provide realistic models, providing a better understanding and enabling decision-making before the project enters the production phase.",
              },
              {
                title: "Improved Collaboration and Design Flexibility",
                desc: "Cloud-based tools and digital sharing enable better collaboration, simplifying editing and optimising designs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-pink-500/10 bg-[#0d1117] p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Our Comprehensive CAD Services
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
            Our CAD expertise covers a range of services, including the
            following.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "CAD Design Services",
                desc: "Our custom CAD design services meet the unique needs of industries that range from complex construction to product design.",
              },
              {
                title: "CAD Drafting Services",
                desc: "We also create technical drawings, schematics and documentation to ensure precision project execution.",
              },
              {
                title: "CAD Drawing Services",
                desc: "Our experts deliver precise and scalable 2D CAD drawing services for layouts, plans and technical illustrations.",
              },
              {
                title: "3D CAD Design Services",
                desc: "We provide 3D CAD design services that focus on advanced modelling, prototyping and simulation to drive ideas to reality.",
              },
              {
                title: "3D CAD Drawing Services",
                desc: "Our realistic renderings and visual penetrations improve communication and stakeholder engagement.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-700 bg-[#111827] p-8 hover:border-pink-500/40 transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CAD Services for Different Industries in London
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Our CAD services serve a diverse range of industries that includes:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Architecture and Construction",
                desc: "Building plans, structural designs to ensure accurate and compliant project development.",
              },
              {
                name: "Engineering and Manufacturing",
                desc: "Precision component design, assembly planning, and production processes.",
              },
              {
                name: "Interior and Product Design",
                desc: "Detailed modelling and visualisation to create functionally and aesthetically optimised solutions.",
              },
              {
                name: "Automotive and Industrial Design",
                desc: "Developing complex mechanical systems that ensure high efficiency and accuracy.",
              },
              {
                name: "Infrastructure and Urban Planning",
                desc: "Managing complex data and creating detailed layouts.",
              },
            ].map((industry) => (
              <div
                key={industry.name}
                className="rounded-xl border border-gray-700 bg-[#0d1117] p-6"
              >
                <p className="text-gray-200 font-semibold mb-2">
                  {industry.name}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How CAD Services Help UK Businesses Stay Competitive — NEW SECTION */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            How CAD Services Help UK Businesses Stay Competitive
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Meeting UK Industry Standards",
                desc: "Ensuring compliance with UK regulations.",
              },
              {
                title: "Supporting Digital Transformation",
                desc: "Adopting modern design practices.",
              },
              {
                title: "Improving Project Efficiency and Delivery",
                desc: "Streamlining workflows and automation.",
              },
              {
                title: "Enabling Scalable Design Solutions",
                desc: "Scaling to meet the needs of varying process sizes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-pink-500/10 bg-[#111827] p-8"
              >
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features — NEW SECTION */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features of Professional CAD Design and Drafting Services
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Our expert, professional CAD design and drafting services include:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "2D and 3D Modelling Capabilities",
                desc: "Comprehensive modelling solutions for different types of design requirements.",
              },
              {
                title: "Design Accuracy and Compliance",
                desc: "Precision levels that comply with regulatory and technical standards.",
              },
              {
                title: "Advanced CAD Software Integration",
                desc: "Industry-leading tools for better performance and compatibility.",
              },
              {
                title: "Customisation and Flexibility",
                desc: "Services and solutions tailored to specific project requirements and expectations.",
              },
              {
                title: "Cloud-Based Collaboration",
                desc: "Secure, quick and seamless collaboration between teams and stakeholders.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700 bg-[#0d1117] p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Our CAD Design & Drafting Process
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
            At Lotus Roots Technologies, we adopt a disciplined and organised
            process to achieve the desired outcomes.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Requirement Analysis",
                desc: "Our experts connect with your team to understand your project scope, objectives and technical requirements.",
              },
              {
                title: "Concept Development and Planning",
                desc: "We develop initial concepts and strategies that set the project trajectory.",
              },
              {
                title: "Design and Drafting Execution",
                desc: "We create comprehensive CAD models and drawings by leveraging advanced tools.",
              },
              {
                title: "Quality Check and Revisions",
                desc: "Each aspect of our design undergoes stringent quality checks while incorporating the required revisions.",
              },
              {
                title: "Final Delivery and Support",
                desc: "Once the design process is complete, we deliver final files and provide ongoing support to help you drive project success.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-2xl border border-gray-700 bg-[#111827] p-8"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#111827]">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-orange-400/5 p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Choose Lotus Roots Technologies for CAD Services in London
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
              Here are some reasons many of the industry's best trust us for our
              CAD design services.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experienced CAD Professionals",
                  desc: "We nurture a team of handpicked CAD professionals with years of experience handling diverse projects.",
                },
                {
                  title: "Industry-Specific Expertise",
                  desc: "Our experts understand the specific requirements of each project and develop designs to deliver them.",
                },
                {
                  title: "Cost-Effective Solutions",
                  desc: "Part of our customer-centric approach involves flexible pricing to help you choose what best aligns with your project needs.",
                },
                {
                  title: "Quick Turnaround Time",
                  desc: "We value timelines and adhere to efficient processes to fulfil all our commitments on schedule.",
                },
                {
                  title: "Dedicated Client Support",
                  desc: "Our continuous support and clear communication ensure the project stays on track and is completed within the stipulated time.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-700 bg-[#0d1117] p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-xs mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-gray-200 font-semibold mb-1">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              {
                q: "What are CAD services used for?",
                a: "CAD services help create accurate technical drawings, simulations and models for design, engineering and manufacturing projects.",
              },
              {
                q: "What industries benefit from CAD design services?",
                a: "Some industries that benefit from our CAD support include construction, engineering, architecture, automotive, manufacturing and product design.",
              },
              {
                q: "How much do CAD services cost in London?",
                a: "The cost varies based on factors such as project complexity, scope and the turnaround time. Specific needs require custom quotes.",
              },
              {
                q: "Do you offer 3D CAD design services?",
                a: "Yes. Our support also covers comprehensive 3D CAD design services, including modelling, rendering and prototyping.",
              },
              {
                q: "Can CAD services be customised for specific projects?",
                a: "Yes. We can customise our CAD services for every project to meet its unique needs.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-700 bg-[#111827] p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#111827] text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">
            Get Professional CAD Services in London
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Need a tailored quote for your CAD needs? Connect with Lotus Roots
            Technologies today for reliable, accurate, and scalable CAD design
            and drafting solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@lotusrootstechnologies.com"
              className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:opacity-90 transition"
            >
              Email Us Today
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-8 py-3.5 font-semibold text-gray-200 hover:border-pink-500 hover:text-white transition"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
