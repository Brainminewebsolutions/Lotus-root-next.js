import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";

export const metadata: Metadata = {
  // Inherit from root layout
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Suspense fallback={null}><Footer /></Suspense>
      <MobileFooter />
    </>
  );
}
