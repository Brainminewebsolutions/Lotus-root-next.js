import type { Metadata } from "next";
import CADServicesContent from "@/components/pages/CADServicesContent";

export const metadata: Metadata = {
  title: "CAD Services UK: 3D Modeling & 2D Drafting",
  description:
    "Outsource expert CAD services in the UK. We deliver precise 3D CAD modeling, 2D drafting, and reverse engineering solutions for complex infrastructure.",
  keywords: [
    "CAD services",
    "CAD drafting",
    "3D modeling",
    "2D drafting",
    "BIM",
    "architectural CAD",
    "engineering CAD",
  ],
  openGraph: {
    title: "CAD Services",
    description:
      "Professional CAD drafting and modeling services for AEC projects.",
    url: "/digital-engineering/cad-services",
  },
};

export default function CADServicesPage() {
  return <CADServicesContent />;
}
