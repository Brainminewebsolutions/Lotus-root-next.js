import type { Metadata } from "next";
import TechnologyDevelopmentContent from "@/components/pages/TechnologyDevelopmentContent";

export const metadata: Metadata = {
  title: "Technology Development & Digital Innovation",
  description:
    "Unlock your business potential with custom technology development, digital tools & innovation. Boost efficiency and growth with Lotus Roots.",
  keywords: [
    "technology development",
    "digital innovation",
    "custom technology",
    "digital tools",
    "business efficiency",
    "UK tech solutions",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/technology-development",
  },
  openGraph: {
    title: "Technology Development & Digital Innovation UK",
    description:
      "Unlock your business potential with custom technology development, digital tools & innovation. Boost efficiency and growth with Lotus Roots.",
    url: "/technology-development",
  },
};

export default function TechnologyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technology Development",
            "description": "Custom digital tools, AI solutions, and platforms that solve real-world AEC challenges including workflow automation, dashboards, and cloud deployment.",
            "url": "https://www.thelotusroots.co.uk/technology-development",
            "provider": { "@id": "https://www.thelotusroots.co.uk/#organization" },
            "serviceType": "Technology Development",
            "areaServed": "GB"
          })
        }}
      />
      <TechnologyDevelopmentContent />
    </>
  );
}
