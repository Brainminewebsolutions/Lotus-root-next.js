import type { Metadata } from "next";
import PDMPLMContent from "@/components/pages/PDMPLMContent";

export const metadata: Metadata = {
  title: "PDM & PLM Solutions",
  description:
    "Product Data Management and Product Lifecycle Management solutions. Streamline product development, manage design data, and improve collaboration.",
  keywords: [
    "PDM",
    "PLM",
    "product data management",
    "product lifecycle management",
    "design data management",
    "engineering collaboration",
  ],
  openGraph: {
    title: "PDM & PLM Solutions",
    description:
      "Product Data Management and Product Lifecycle Management solutions for engineering teams.",
    url: "/digital-engineering/pdm-plm",
  },
};

export default function PDMPLMPage() {
  return <PDMPLMContent />;
}
