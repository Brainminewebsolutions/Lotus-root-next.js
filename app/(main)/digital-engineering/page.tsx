import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import DigitalEngineeringContent from "@/components/pages/DigitalEngineeringContent";

export const metadata: Metadata = {
  title: "Digital Engineering Solutions for Businesses",
  description:
    "Discover Lotus Roots digital engineering services driving innovation with cutting-edge tech, advanced modelling & tailored product solutions.",
  keywords: [
    "digital engineering",
    "advanced modelling",
    "product delivery",
    "CAD services",
    "BIM modeling",
    "engineering solutions",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/digital-engineering",
  },
  openGraph: {
    title: "Digital Engineering Solutions for Modern Businesses",
    description:
      "Discover Lotus Roots digital engineering services that drive innovation with cutting-edge tech, advanced modelling & tailored solutions for product delivery.",
    url: "/digital-engineering",
  },
};

export default function DigitalEngineeringPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://thelotusroots.co.uk" },
          { name: "Digital Engineering", url: "https://thelotusroots.co.uk/digital-engineering" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Engineering",
            "description": "Modular, scalable digital engineering solutions including BIM, GeoBIM, Digital Twin, and sustainability consulting across the full project lifecycle.",
            "url": "https://www.thelotusroots.co.uk/digital-engineering",
            "provider": { "@id": "https://www.thelotusroots.co.uk/#organization" },
            "serviceType": "BIM & Digital Engineering",
            "areaServed": "GB"
          })
        }}
      />
      
      <DigitalEngineeringContent />
    </>
  );
}
