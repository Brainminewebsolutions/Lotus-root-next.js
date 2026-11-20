import type { Metadata } from "next";
import { projects } from "@/data/projectsData";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import ProjectsContent from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: "Our Projects | Lotus Roots",
  description: `Explore ${projects.length}+ completed projects data centers, hospitals, commercial buildings & infrastructure across India, UAE, Saudi Arabia and beyond.`,
  keywords: [
    "BIM projects",
    "CAD projects",
    "construction projects",
    "data centers",
    "hospital projects",
    "infrastructure projects",
    "AEC portfolio",
  ],
  alternates: {
    canonical: "https://www.thelotusroots.co.uk/projects",
  },
  openGraph: {
    title: "Our Projects",
    description: `Portfolio of ${projects.length}+ completed BIM and CAD projects across multiple countries.`,
    url: "/projects",
  },
};

// Generate structured data for projects collection
function ProjectsCollectionJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Lotus Roots Technologies Projects Portfolio",
    description: `Portfolio of ${projects.length}+ completed BIM and CAD projects`,
    url: "https://thelotusroots.co.uk/projects",
    numberOfItems: projects.length,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.slice(0, 10).map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          locationCreated: {
            "@type": "Place",
            name: project.city,
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://thelotusroots.co.uk" },
          { name: "Projects", url: "https://thelotusroots.co.uk/projects" },
        ]}
      />
      <WebPageJsonLd
        name="Our Projects"
        description={`Portfolio of ${projects.length}+ completed BIM and CAD projects across multiple countries.`}
        url="https://thelotusroots.co.uk/projects"
      />
      <ProjectsCollectionJsonLd />

      <ProjectsContent />
    </>
  );
}
