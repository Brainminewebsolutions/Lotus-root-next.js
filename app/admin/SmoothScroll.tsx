"use client";

import { useEffect } from "react";

// Smooth in-page scrolling for the admin only. Set on <html> while the admin is
// mounted and restored on leave, so the public site is never affected. Skipped
// for visitors who ask for reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);
  return null;
}
