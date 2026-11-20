import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects for legacy URLs
  async redirects() {
    return [
      {
        source: "/components/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services/pdm.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
  // Image optimization configuration
  images: {
    // Allow external images from these domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // Supported image formats
    formats: ["image/avif", "image/webp"],
    // Quality levels used across the app
    qualities: [75, 80],
  },
  // Reduce unused JS by tree-shaking barrel exports
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Admin image uploads are server actions capped at 4 MB in code.
    serverActions: { bodySizeLimit: "5mb" },
  },
  cacheComponents: true, // required by lib/posts.ts ("use cache", cacheTag, cacheLife)
  serverExternalPackages: ["mysql2", "pg", "sanitize-html"],
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};

export default nextConfig;
