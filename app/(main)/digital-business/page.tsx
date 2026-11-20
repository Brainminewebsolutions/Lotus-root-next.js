import type { Metadata } from "next";
import DigitalBusinessContent from "@/components/pages/DigitalBusinessContent";

export const metadata: Metadata = {
  title: "Digital Business Growth & Strategy Solutions",
  description:
    "Transform your online presence with expert digital business solutions. Boost traffic, leads & sales. Start growing with Lotus Roots today!",
  keywords: [
    "digital business",
    "strategic growth",
    "online presence",
    "business strategy",
    "lead generation",
    "UK digital services",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/digital-business",
  },
  openGraph: {
    title: "Digital Business Services UK | Strategic Growth Solutions",
    description:
      "Transform your online presence with expert digital business solutions — from strategy to execution. Grow traffic, leads & sales. Get started with Lotus Roots.",
    url: "/digital-business",
  },
};

export default function DigitalBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Business",
            "description": "Digital branding, web development, digital marketing, campaign strategy, and lead generation services for AEC and tech-driven companies.",
            "url": "https://www.thelotusroots.co.uk/digital-business",
            "provider": { "@id": "https://www.thelotusroots.co.uk/#organization" },
            "serviceType": "Digital Marketing & Web Development",
            "areaServed": "GB"
          })
        }}
      />
      <DigitalBusinessContent />
    </>
  );
}
