import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const isSanityConfigured = Boolean(projectId);

if (!isSanityConfigured && process.env.NODE_ENV !== "production") {
  console.warn(
    "NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Blog content will be empty. Add it to .env.local."
  );
}

export const client = createClient({
  // Placeholder keeps module evaluation from throwing; queries are skipped when unconfigured.
  projectId: projectId || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ─── GROQ Queries ─────────────────────────────────────────────────────────────

// All posts for listing page
export async function getAllPosts() {
  if (!isSanityConfigured) return [];
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      author,
      readTime,
      coverImage { asset, alt }
    }`
  );
}

// Single post by slug for detail page
export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured) return null;
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      author,
      readTime,
      coverImage { asset, alt },
      body,
      seoTitle,
      seoDescription
    }`,
    { slug }
  );
}

// All slugs for generateStaticParams
export async function getAllPostSlugs() {
  if (!isSanityConfigured) return [];
  return client.fetch(
    `*[_type == "blogPost"] { "slug": slug.current }`
  );
}
