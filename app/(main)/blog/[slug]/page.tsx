import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getPublishedPost, getRedirectTarget, type Post } from "@/lib/posts";
import { buildPostMetadata } from "@/lib/post-metadata";
import { sanitizePostHtml } from "@/lib/sanitize";
import { buildAllSchemas, schemaTemplate, serializeJsonLd, type SchemaSource } from "@/lib/schema";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Posts are managed in the admin dashboard (/admin) and read from its database.
async function loadPost(slug: string): Promise<{ post: Post | null; failed: boolean }> {
    try {
        return { post: await getPublishedPost(slug), failed: false };
    } catch (err) {
        console.error("[blog/slug] could not load post", err);
        return { post: null, failed: true };
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { post } = await loadPost(slug);
    return post ? buildPostMetadata(post) : { title: "Blog" };
}

const plainText = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

async function PostContent({ params }: PageProps) {
    const { slug } = await params;
    const { post, failed } = await loadPost(slug);

    if (failed) {
        return (
            <div className="container mx-auto px-6 text-center py-24">
                <h1 className="text-3xl font-bold text-white mb-4">Temporarily unavailable</h1>
                <p className="text-gray-400">We couldn&apos;t load this post right now. Please try again shortly.</p>
            </div>
        );
    }
    if (!post) {
        // A renamed post: send the old URL to the new one.
        const target = await getRedirectTarget(slug).catch(() => null);
        if (target) permanentRedirect(target);
        notFound();
    }

    const date = post.published_at ? new Date(post.published_at) : new Date(post.created_at);
    const formattedDate = date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    const html = sanitizePostHtml(post.content_html);
    const readTime = Math.max(1, Math.round(plainText(html).split(" ").length / 200));

    const source: SchemaSource = {
        post_type: post.post_type,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        meta_description: post.meta_description,
        meta_keywords: post.meta_keywords,
        canonical_url: post.canonical_url,
        author_name: post.author_name,
        featured_image_url: post.featured_image_url,
        published_at: post.published_at,
        updated_at: post.updated_at,
        faqs: post.auto_faq_schema ? post.faqs : [],
    };
    const schemas = [
        ...buildAllSchemas(source, post.custom_schemas),
        ...(post.custom_schemas.some((c) => c.type === "BreadcrumbList") ? [] : [schemaTemplate("BreadcrumbList", source)]),
    ];

    return (
        <article className="min-h-screen bg-[#0d1117] pt-32 pb-20">
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(s) }} />
            ))}
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto mb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 overflow-hidden whitespace-nowrap">
                        <Link href="/" className="hover:text-pink-400 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-pink-400 transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-400 truncate">{post.title}</span>
                    </nav>

                    {post.focus_keyphrase && (
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold mb-6">
                            {post.focus_keyphrase}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-10">
                        <span>{formattedDate}</span>
                        <span>·</span>
                        <span>{readTime} min read</span>
                        {post.author_name && (
                            <>
                                <span>·</span>
                                <span>{post.author_name}</span>
                            </>
                        )}
                    </div>

                    {post.excerpt && (
                        <div className="border-l-4 border-pink-500/50 pl-5 text-gray-300 text-lg italic mb-12 py-1">{post.excerpt}</div>
                    )}
                </div>

                {/* Cover Image */}
                {post.featured_image_url && (
                    <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-2xl shadow-pink-500/5">
                        <Image
                            src={post.featured_image_url}
                            alt={post.featured_image_alt || post.title}
                            fill
                            priority
                            sizes="(min-width: 1024px) 1024px, 100vw"
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Content Body (HTML written in the admin editor, sanitized) */}
                <div className="max-w-3xl mx-auto blog-body" dangerouslySetInnerHTML={{ __html: html }} />

                {/* Footer Navigation */}
                <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Blog
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 font-semibold text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                    >
                        Talk to Our Experts
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function BlogPostPage({ params }: PageProps) {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-[#0d1117] pt-40 text-center text-gray-500" aria-busy="true">
                    Loading…
                </div>
            }
        >
            <PostContent params={params} />
        </Suspense>
    );
}
