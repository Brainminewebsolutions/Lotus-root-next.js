'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface UseScrollToSectionOptions {
  headerOffset?: number;
  behavior?: ScrollBehavior;
}

export function useScrollToSection(options: UseScrollToSectionOptions = {}) {
  const { headerOffset = 80, behavior = 'smooth' } = options;
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Scroll to a section by its ID
   * If on a different page, navigate to home page with hash
   */
  const scrollToSection = useCallback(
    (sectionId: string, targetPath: string = '/') => {
      const elementId = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;

      // If we're on the target page, scroll directly
      if (pathname === targetPath) {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + globalThis.scrollY - headerOffset;

          globalThis.scrollTo({
            top: offsetPosition,
            behavior,
          });

          // Update URL hash without page reload
          globalThis.history.pushState(null, '', `${targetPath}#${elementId}`);
        }
      } else {
        // Navigate to the target page with hash
        router.push(`${targetPath}#${elementId}`);
      }
    },
    [pathname, router, headerOffset, behavior]
  );

  /**
   * Scroll to top of page
   */
  const scrollToTop = useCallback(() => {
    globalThis.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);

  return {
    scrollToSection,
    scrollToTop,
  };
}
