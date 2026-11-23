import type { Metadata } from "next";
import BimLandingPage from "@/components/pages/BimLandingPage";
import { SITE, getBimPage } from "@/lib/bim-pages";

const page = getBimPage("bim-services-london");

export const metadata: Metadata = {
  // "absolute" so the site-wide title suffix is not added: the title tag is used exactly as written.
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: `${SITE}/${page.slug}` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `${SITE}/${page.slug}`,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: page.title, description: page.description },
};

export default function Page() {
  return <BimLandingPage page={page} />;
}
