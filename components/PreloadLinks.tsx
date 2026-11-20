/**
 * Preload critical assets for better LCP
 * Add these to the head of pages that need fast loading
 */

interface PreloadLinkProps {
  href: string;
  as: 'image' | 'font' | 'script' | 'style' | 'video';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export function PreloadLinks({ links }: Readonly<{ links: PreloadLinkProps[] }>) {
  return (
    <>
      {links.map((link) => (
        <link
          key={`${link.as}-${link.href}`}
          rel="preload"
          href={link.href}
          as={link.as}
          type={link.type}
          crossOrigin={link.crossOrigin}
        />
      ))}
    </>
  );
}

// Critical images to preload on home page
export const homePagePreloads: PreloadLinkProps[] = [
  {
    href: '/LRT-logo.webp',
    as: 'image',
    type: 'image/webp',
  },
  {
    href: '/hero_building.png',
    as: 'image',
    type: 'image/png',
  },
];

// Preconnect to external domains
export function PreconnectLinks() {
  return (
    <>
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
    </>
  );
}
