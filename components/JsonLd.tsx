// Organization structured data for SEO
export interface OrganizationJsonLdProps {
  readonly name?: string;
  readonly url?: string;
  readonly logo?: string;
  readonly description?: string;
  readonly sameAs?: string[];
  readonly contactPoint?: {
    readonly telephone?: string;
    readonly contactType?: string;
    readonly email?: string;
  };
  readonly address?: {
    readonly streetAddress?: string;
    readonly addressLocality?: string;
    readonly addressRegion?: string;
    readonly postalCode?: string;
    readonly addressCountry?: string;
  };
}

export function OrganizationJsonLd({
  name = "Lotus Roots Technologies",
  url = "https://thelotusroots.co.uk",
  logo = "https://thelotusroots.co.uk/LRT-logo.webp",
  description = "Empowering the AEC industry with innovative technology solutions. Digital transformation services including CAD, BIM, PLM, cybersecurity, and web development across the UK.",
  sameAs = [],
  contactPoint,
  address,
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    ...(sameAs.length > 0 && { sameAs }),
    ...(contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        ...contactPoint,
      },
    }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Service structured data
export interface ServiceJsonLdProps {
  readonly name: string;
  readonly description: string;
  readonly provider?: string;
  readonly serviceType?: string;
  readonly areaServed?: string | string[];
  readonly url?: string;
}

export function ServiceJsonLd({
  name,
  description,
  provider = "Lotus Roots Technologies",
  serviceType,
  areaServed,
  url,
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    ...(serviceType && { serviceType }),
    ...(areaServed && { areaServed }),
    ...(url && { url }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// WebPage structured data
export interface WebPageJsonLdProps {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly datePublished?: string;
  readonly dateModified?: string;
}

export function WebPageJsonLd({
  name,
  description,
  url,
  datePublished,
  dateModified,
}: WebPageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    isPartOf: {
      "@type": "WebSite",
      name: "Lotus Roots Technologies",
      url: "https://thelotusroots.co.uk",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// BreadcrumbList structured data
export interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

export interface BreadcrumbJsonLdProps {
  readonly items: readonly BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// LocalBusiness structured data (if applicable)
export interface LocalBusinessJsonLdProps {
  readonly name?: string;
  readonly description?: string;
  readonly url?: string;
  readonly telephone?: string;
  readonly email?: string;
  readonly address?: {
    readonly streetAddress?: string;
    readonly addressLocality?: string;
    readonly addressRegion?: string;
    readonly postalCode?: string;
    readonly addressCountry?: string;
  };
  readonly geo?: {
    readonly latitude: number;
    readonly longitude: number;
  };
  readonly openingHours?: readonly string[];
  readonly priceRange?: string;
}

export function LocalBusinessJsonLd({
  name = "Lotus Roots Technologies",
  description = "Empowering the AEC industry with innovative technology solutions across the UK.",
  url = "https://thelotusroots.co.uk",
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
}: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    }),
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours && { openingHoursSpecification: openingHours }),
    ...(priceRange && { priceRange }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
