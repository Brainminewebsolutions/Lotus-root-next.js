'use client';

import { useEffect, useCallback, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Inner component that uses useSearchParams
 */
function HashNavigationInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToHash = useCallback((hash: string) => {
    if (!hash) return;
    
    const elementId = hash.startsWith('#') ? hash.substring(1) : hash;
    const element = document.getElementById(elementId);
    
    if (element) {
      // Calculate offset for fixed header (adjust as needed)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + globalThis.scrollY - headerOffset;

      globalThis.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    // Handle initial hash on page load
    const hash = globalThis.location?.hash;
    if (hash) {
      // Small delay to ensure DOM is fully ready
      const timeoutId = setTimeout(() => {
        scrollToHash(hash);
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, searchParams, scrollToHash]);

  useEffect(() => {
    // Listen for hash changes (e.g., clicking anchor links)
    const handleHashChange = () => {
      const hash = globalThis.location?.hash;
      if (hash) {
        scrollToHash(hash);
      }
    };

    globalThis.addEventListener('hashchange', handleHashChange);
    return () => globalThis.removeEventListener('hashchange', handleHashChange);
  }, [scrollToHash]);

  return null;
}

/**
 * HashNavigation component handles scroll-to-section functionality
 * when navigating to pages with hash fragments (e.g., /#contact)
 * 
 * Features:
 * - Smooth scrolling to sections
 * - Handles fixed header offset
 * - Listens for hash changes during navigation
 */
export default function HashNavigation() {
  return (
    <Suspense fallback={null}>
      <HashNavigationInner />
    </Suspense>
  );
}
