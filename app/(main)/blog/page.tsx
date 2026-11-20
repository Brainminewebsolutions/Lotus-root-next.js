import { Suspense } from "react";
import { connection } from "next/server";
import BlogCard from "@/components/blog/BlogCard";
import { getPublishedPostsPage } from "@/lib/posts";

export const metadata = {
    title: "Blog",
    description: "Insights, guides, and updates on BIM, CAD, digital engineering, and technology from the team at Lotus Roots Technologies.",
    alternates: {
        canonical: "https://www.thelotusroots.co.uk/blog/",
    },
};

// Posts are managed in the admin dashboard (/admin) and read from its database.
async function Posts() {
    await connection(); // read the database at request time, never at build time
    let data: Awaited<ReturnType<typeof getPublishedPostsPage>> | null = null;
    try {
        data = await getPublishedPostsPage(1, 100);
    } catch (err) {
        console.error("[blog] could not load posts", err);
    }

    if (!data) {
        return (
            <div className="text-center py-20" role="alert">
                <p className="text-gray-500 text-lg">We couldn&apos;t load the blog right now. Please try again shortly.</p>
            </div>
        );
    }

    if (data.posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg italic">No blog posts found. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function GridSkeleton() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true">
            {[0, 1, 2].map((i) => (
                <div key={i} className="h-96 rounded-2xl border border-gray-700/50 bg-[#111827] animate-pulse" aria-hidden="true" />
            ))}
        </div>
    );
}

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#0d1117]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Decorative Background Blobs */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl opacity-40" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-semibold mb-6">
                        Insights & Resources
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        AEC Industry Insights:{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                            BIM, CAD & Digital Engineering Blog
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Stay up to date with the latest insights on BIM, CAD, digital engineering,
                        and technology solutions for the AEC industry.
                    </p>
                </div>
            </section>

            {/* Posts Grid Section */}
            <section className="py-16 px-4 bg-[#111827]">
                <div className="max-w-6xl mx-auto">
                    <Suspense fallback={<GridSkeleton />}>
                        <Posts />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
