import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import HashNavigation from "@/components/HashNavigation";


// Dynamic imports for below-the-fold components (code splitting)
const OurExpertise = dynamic(() => import("@/components/OurExpertise"), {
  loading: () => <SectionLoader />,
});
const KeyResults = dynamic(() => import("@/components/KeyResults"), {
  loading: () => <SectionLoader />,
});
const ClientShowcase = dynamic(() => import("@/components/ClientShowcase"), {
  loading: () => <SectionLoader />,
});
const CTAContactStrip = dynamic(() => import("@/components/CTAContactStrip"));
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionLoader />,
});
const SolutionsJourney = dynamic(() => import("@/components/SolutionsJourney"), {
  loading: () => <SectionLoader />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionLoader />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionLoader />,
});

// Minimal loading placeholder
function SectionLoader() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-pulse bg-gray-800 rounded-lg w-full max-w-4xl h-32 mx-6" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "BIM & Digital Growth Solutions UK",
  description:
    "Lotus Roots Technologies provides BIM, digital engineering, and business growth solutions for construction and tech-driven companies across the UK.",
  keywords: [
    "BIM",
    "digital engineering",
    "business growth solutions",
    "construction technology",
    "UK BIM services",
    "digital transformation",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk",
  },
  openGraph: {
    title: "Lotus Roots Technologies | BIM & Digital Growth UK",
    description:
      "Lotus Roots Technologies provides BIM, digital engineering, and business growth solutions for construction and tech-driven companies across the UK.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hash Navigation for scroll-to-section */}
      <HashNavigation />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lotus Roots Technologies | BIM & Digital Growth UK",
            "url": "https://www.thelotusroots.co.uk",
            "description": "Lotus Roots Technologies provides BIM, digital engineering, and business growth solutions for construction and tech-driven companies across the UK.",
            "inLanguage": "en-GB",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.thelotusroots.co.uk"
            },
            "about": {
              "@id": "https://www.thelotusroots.co.uk/#organization"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Services by Lotus Roots Technologies",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "url": "https://www.thelotusroots.co.uk/technology-development", "name": "Technology Development" },
              { "@type": "ListItem", "position": 2, "url": "https://www.thelotusroots.co.uk/digital-engineering", "name": "Digital Engineering" },
              { "@type": "ListItem", "position": 3, "url": "https://www.thelotusroots.co.uk/digital-business", "name": "Digital Business" },
              { "@type": "ListItem", "position": 4, "url": "https://www.thelotusroots.co.uk/digital-security", "name": "Digital Security" },
              { "@type": "ListItem", "position": 5, "url": "https://www.thelotusroots.co.uk/talent-capability-building", "name": "Talent & Capability Building" }
            ]
          })
        }}
      />

      <Hero />
      <OurExpertise />
      <KeyResults />
      <ClientShowcase />
      <CTAContactStrip />
      <About />
      <SolutionsJourney />
      <Services />
      <Contact />
    </>
  );
}
