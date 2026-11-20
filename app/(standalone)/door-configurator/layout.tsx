import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Door Configurator Tool",
  description:
    "Interactive door configuration tool. Design and customize doors with our 3D configurator for your construction and architecture projects.",
  keywords: [
    "door configurator",
    "3D configurator",
    "door design",
    "custom doors",
    "door customization",
  ],
  openGraph: {
    title: "Door Configurator Tool",
    description:
      "Interactive door configuration tool for construction and architecture projects.",
    url: "/door-configurator",
  },
};

export default function DoorConfiguratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No Header/Footer for Door Configurator - it's a standalone tool
  return <>{children}</>;
}
