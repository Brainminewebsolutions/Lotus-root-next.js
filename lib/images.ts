/**
 * Image utilities for Next.js Image optimization
 */

// Default image sizes for responsive images
export const imageSizes = {
  thumbnail: { width: 150, height: 150 },
  card: { width: 400, height: 300 },
  hero: { width: 1920, height: 1080 },
  logo: { width: 200, height: 60 },
  client: { width: 150, height: 80 },
  project: { width: 600, height: 400 },
};

// Blur placeholder for loading
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1f2937" offset="20%" />
      <stop stop-color="#374151" offset="50%" />
      <stop stop-color="#1f2937" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1f2937" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  globalThis.window === undefined
    ? Buffer.from(str).toString('base64')
    : globalThis.btoa(str);

// Generate blur data URL
export const getBlurDataURL = (w: number = 700, h: number = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

// Get optimized Unsplash URL with proper sizing
export const getUnsplashUrl = (
  photoId: string,
  width: number = 800,
  height: number = 600,
  quality: number = 80
) => {
  return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&q=${quality}`;
};

// Local image paths
export const localImages = {
  logo: '/LRT-logo.webp',
  heroBuilding: '/hero_building.png',
  heroVideo: '/heroBannerVideo.mov',
  clients: [
    '/01_clinet.webp',
    '/02_clinet.webp',
    '/03_clinet.webp',
    '/04_clinet.webp',
    '/05_clinet.webp',
    '/06_clinet.webp',
  ],
} as const;

// Get project image path
export const getProjectImage = (id: string) => `/projects/${id}.webp`;
