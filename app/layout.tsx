import type { Metadata } from "next";
import { GoogleTagManager, GoogleTagManagerNoScript, GoogleAnalytics } from "@/components/GoogleTagManager";
import { Suspense } from "react";
import SiteOnly from "@/components/SiteOnly";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lotus Roots | Digital Transformation for AEC Industry",
    template: "%s | Lotus Roots",
  },
  description:
    "Empowering the AEC industry with innovative technology solutions. Digital transformation services including CAD, BIM, PLM, cybersecurity, and web development across the UK.",
  keywords: [
    "digital transformation",
    "AEC industry",
    "CAD services",
    "BIM modeling",
    "PLM solutions",
    "cybersecurity",
    "web development",
    "technology consulting",
    "Lotus Roots Technologies",
    "UK technology company",
    "construction technology",
  ],
  authors: [{ name: "Lotus Roots Technologies" }],
  creator: "Lotus Roots Technologies",
  publisher: "Lotus Roots Technologies",
  metadataBase: new URL("https://www.thelotusroots.co.uk"),
  // Google Search Console Verification
  verification: {
    google: "nuELUJURMlc5xgHtcxU6LnLdNW8ONkiMXZf25_1psVc",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Lotus Roots Technologies",
    title: "Lotus Roots Technologies | Digital Transformation for AEC Industry",
    description:
      "Empowering the AEC industry with innovative technology solutions across the UK.",
    images: [
      {
        url: "/LRT-logo.webp",
        width: 1200,
        height: 630,
        alt: "Lotus Roots Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Roots Technologies | Digital Transformation for AEC Industry",
    description:
      "Empowering the AEC industry with innovative technology solutions across the UK.",
    images: ["/LRT-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo 01.jpg",
    shortcut: "/logo 01.jpg",
    apple: "/logo 01.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - as high as possible */}
        <Suspense fallback={null}><SiteOnly><GoogleTagManager /></SiteOnly></Suspense>

        {/* Google Analytics */}
        <Suspense fallback={null}><SiteOnly><GoogleAnalytics /></SiteOnly></Suspense>

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://www.thelotusroots.co.uk/#organization",
              "name": "Lotus Roots Technologies",
              "url": "https://www.thelotusroots.co.uk",
              "logo": "https://www.thelotusroots.co.uk/LRT-logo.webp",
              "image": "https://www.thelotusroots.co.uk/LRT-logo.webp",
              "description": "Lotus Roots Technologies provides BIM, digital engineering, and business growth solutions for construction and tech-driven companies across the UK.",
              "email": "sales@thelotusroots.co.uk",
              "telephone": "+442038703808",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5074,
                "longitude": -0.1278
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "££",
              "currenciesAccepted": "GBP",
              "paymentAccepted": "Bank Transfer, Credit Card",
              "areaServed": ["GB", "AE", "IN"],
              "sameAs": [
                "https://www.linkedin.com/company/lotus-roots-technologies",
                "https://www.instagram.com/thelotusroots_official"
              ],
              "foundingLocation": {
                "@type": "Place",
                "name": "United Kingdom"
              },
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10
              },
              "knowsAbout": [
                "BIM Services",
                "Digital Engineering",
                "AI Solutions",
                "Digital Marketing",
                "Cybersecurity",
                "Construction Technology"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+442038703808",
                  "contactType": "customer service",
                  "areaServed": "GB",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "sales@thelotusroots.co.uk",
                  "contactType": "sales",
                  "areaServed": ["GB", "AE", "IN"],
                  "availableLanguage": "English"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lotus Roots Technologies",
              "url": "https://www.thelotusroots.co.uk",
              "description": "BIM, digital engineering, and business growth solutions for construction and tech-driven companies across the UK.",
              "inLanguage": "en-GB",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.thelotusroots.co.uk/blog?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className="font-sans antialiased min-h-screen bg-gray-900"
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) - immediately after body */}
        <Suspense fallback={null}><SiteOnly><GoogleTagManagerNoScript /></SiteOnly></Suspense>

        {children}
      </body>
    </html>
  );
}
