import type { Metadata } from "next";
import TalentCapabilityBuildingContent from "@/components/pages/TalentCapabilityBuildingContent";

export const metadata: Metadata = {
  title: "Talent Development & Capability Solutions UK",
  description:
    "Empower your workforce with talent development and capability building services. Enhance skills, performance & growth with Lotus Roots. Learn more today.",
  keywords: [
    "talent development",
    "capability building",
    "workforce training",
    "skill enhancement",
    "performance growth",
    "UK talent solutions",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/talent-capability-building",
  },
  openGraph: {
    title: "Talent Development & Capability Growth Solutions UK",
    description:
      "Empower your workforce with talent development and capability building services. Enhance skills, performance & growth with Lotus Roots. Learn more today.",
    url: "/talent-capability-building",
  },
};

export default function TalentCapabilityBuildingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Talent & Capability Building",
            "description": "Flexible staffing, BIM/VDC training, managed services, capability building workshops, and knowledge transfer programs for AEC teams.",
            "url": "https://www.thelotusroots.co.uk/talent-capability-building",
            "provider": { "@id": "https://www.thelotusroots.co.uk/#organization" },
            "serviceType": "Staffing & Training",
            "areaServed": "GB"
          })
        }}
      />
      <TalentCapabilityBuildingContent />
    </>
  );
}
