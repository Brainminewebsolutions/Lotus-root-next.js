import type { Metadata } from "next";
import CustomTrainingSupportContent from "@/components/pages/CustomTrainingSupportContent";

export const metadata: Metadata = {
  title: "Custom Training & Support",
  description:
    "Tailored training programs and ongoing support for CAD, BIM, and engineering software. Empower your team with expert-led training sessions.",
  keywords: [
    "CAD training",
    "BIM training",
    "engineering software training",
    "custom training",
    "technical support",
    "software support",
  ],
  openGraph: {
    title: "Custom Training & Support",
    description:
      "Tailored training programs and ongoing support for CAD, BIM, and engineering software.",
    url: "/digital-engineering/custom-training-support",
  },
};

export default function CustomTrainingSupportPage() {
  return <CustomTrainingSupportContent />;
}
