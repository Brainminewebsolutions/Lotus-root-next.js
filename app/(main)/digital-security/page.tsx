import type { Metadata } from "next";
import DigitalSecurityContent from "@/components/pages/DigitalSecurityContent";

export const metadata: Metadata = {
  title: "Cybersecurity & Digital Protection Solutions",
  description:
    "Protect your business with Lotus Roots advanced digital security services. Secure networks, data safety & proactive cyber protection solutions.",
  keywords: [
    "cybersecurity services",
    "digital protection",
    "network security",
    "data safety",
    "cyber protection",
    "UK security solutions",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/digital-security",
  },
  openGraph: {
    title: "Cybersecurity Services & Digital Protection & Solutions UK",
    description:
      "Protect your business with advanced digital security services from Lotus Roots Tech. Secure networks, data safety, and proactive cyber protection solutions.",
    url: "/digital-security",
  },
};

export default function DigitalSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Security",
            "description": "Security infrastructure management, risk assessment, compliance, and monitoring for digital transformation across all platforms.",
            "url": "https://www.thelotusroots.co.uk/digital-security",
            "provider": { "@id": "https://www.thelotusroots.co.uk/#organization" },
            "serviceType": "Cybersecurity",
            "areaServed": "GB"
          })
        }}
      />
      <DigitalSecurityContent />
    </>
  );
}
