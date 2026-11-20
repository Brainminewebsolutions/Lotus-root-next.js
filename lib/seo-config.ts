// SEO Configuration - Production values from React project

export const siteConfig = {
  name: "Lotus Roots Technologies",
  shortName: "LRT",
  description:
    "Empowering the AEC industry with innovative technology solutions. Digital transformation services including CAD, BIM, PLM, cybersecurity, and web development.",
  url: "https://thelotusroots.co.uk",
  ogImage: "/LRT-logo.webp",
  links: {
    linkedin: "https://www.linkedin.com/company/lotus-roots-technologies",
    instagram: "https://www.instagram.com/thelotusroots_official",
    twitter: "",
    facebook: "",
  },
  contact: {
    email: "sales@thelotusroots.co.uk",
    phone: "+44 2038703808",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "United Kingdom",
    },
  },
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
    "construction technology",
    "engineering solutions",
    "UK technology company",
  ],
} as const;

// Helper to generate full URLs
export function getFullUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : "/" + path;
  return siteConfig.url + normalizedPath;
}

// Common metadata generators
export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    title,
    description,
    keywords: [...siteConfig.keywords.slice(0, 5), ...keywords],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
