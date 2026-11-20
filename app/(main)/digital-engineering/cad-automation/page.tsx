import type { Metadata } from "next";
import CADAutomationContent from "@/components/pages/CADAutomationContent";

export const metadata: Metadata = {
  title: "CAD Automation & Custom API Development UK",
  description:
    "Accelerate your engineering workflows. Get custom CAD automation solutions, macros, and API scripts designed to cut design cycles and eliminate errors.",
  keywords: [
    "CAD automation",
    "design automation",
    "automated drafting",
    "CAD scripts",
    "workflow optimization",
    "design productivity",
  ],
  openGraph: {
    title: "CAD Automation",
    description:
      "Streamline design workflows with CAD automation solutions and intelligent design tools.",
    url: "/digital-engineering/cad-automation",
  },
};

export default function CADAutomationPage() {
  return <CADAutomationContent />;
}
