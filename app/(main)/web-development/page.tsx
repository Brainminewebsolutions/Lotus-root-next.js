import type { Metadata } from "next";
import WebDevelopmentContent from "@/components/pages/WebDevelopmentContent";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Custom web development solutions for businesses. Modern, responsive websites and web applications built with cutting-edge technologies.",
  keywords: [
    "web development",
    "custom websites",
    "web applications",
    "responsive design",
    "modern web solutions",
  ],
  openGraph: {
    title: "Web Development Services",
    description:
      "Custom web development solutions. Modern, responsive websites and web applications.",
    url: "/web-development",
  },
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />;
}
