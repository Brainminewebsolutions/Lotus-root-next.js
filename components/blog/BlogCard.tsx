import Link from "next/link";
import Image from "next/image";
import type { PostCard } from "@/lib/posts";

// Card for the /blog listing. Data comes from the admin dashboard (lib/posts.ts).
export default function BlogCard({ post }: { post: PostCard }) {
  const formattedDate = new Date(post.published_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-gray-700/50 bg-[#111827] hover:border-pink-500/40 transition-all overflow-hidden flex flex-col h-full"
    >
      {/* Cover Image */}
      <div className="relative h-48 w-full overflow-hidden">
        {post.featured_image_url ? (
          <Image
            src={post.featured_image_url}
            alt={post.featured_image_alt || post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-pink-500/20 to-orange-400/10 flex items-center justify-center">
            <span className="text-pink-500/40 font-semibold tracking-wider">Lotus Roots Tech</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>

        <div className="mt-auto">
          <div className="text-xs text-gray-500 mb-3">{formattedDate}</div>

          <div className="text-pink-400 text-sm font-semibold flex items-center">
            Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
