# Phase 9: Testing & Verification Checklist

## Migration Summary
- **Source**: React + Vite + React Router DOM v7 + Tailwind CSS v3.4
- **Target**: Next.js 16.1.4 + React 19 + App Router + Tailwind CSS v3.4
- **Production URL**: https://thelotusroots.co.uk 
- **Build Status**: ✅ PASSED (all 17 routes generated successfully)

---

## 1. Route Verification ✅

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ | Home page with all sections |
| `/digital-security` | ✅ | Digital Security service page |
| `/web-development` | ✅ | Web Development service page |
| `/digital-engineering` | ✅ | Digital Engineering service page |
| `/digital-engineering/cad-services` | ✅ | CAD Services sub-page |
| `/digital-engineering/cad-automation` | ✅ | CAD Automation sub-page |
| `/digital-engineering/pdm-plm` | ✅ | PDM/PLM sub-page |
| `/digital-engineering/custom-training-support` | ✅ | Training sub-page |
| `/digital-business` | ✅ | Digital Business service page |
| `/technology-development` | ✅ | Technology Development page |
| `/talent-capability-building` | ✅ | Talent & Capability page |
| `/projects` | ✅ | Projects portfolio (54 projects) |
| `/door-configurator` | ✅ | Standalone iframe tool |
| `/sitemap.xml` | ✅ | Dynamic sitemap |
| `/robots.txt` | ✅ | Robots file |
| `/manifest.webmanifest` | ✅ | PWA manifest |

**Total Routes: 17** (including SEO routes)

---

## 2. SEO Verification

### Meta Tags to Verify (View Page Source)
- [ ] `<title>` tag present and correct
- [ ] `<meta name="description">` present
- [ ] `<meta name="keywords">` present
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags
- [ ] Canonical URL implied by metadataBase

### Structured Data (JSON-LD)
- [ ] Organization schema on home page
- [ ] LocalBusiness schema on home page
- [ ] BreadcrumbList schema on service pages
- [ ] WebPage schema on service pages
- [ ] CollectionPage schema on projects page

### How to Test
1. Open any page in browser
2. Right-click → "View Page Source" (not DevTools)
3. Search for `<title>`, `og:`, `application/ld+json`

---

## 3. Component Verification

### Header
- [ ] Logo displays correctly
- [ ] Navigation links work
- [ ] Mobile menu opens/closes
- [ ] Scroll behavior (background change on scroll)
- [ ] Active link highlighting

### Footer
- [ ] All links functional
- [ ] Social media links work
- [ ] Contact information correct
- [ ] Mobile footer visible on mobile

### Hero Section
- [ ] Video autoplay works
- [ ] Image carousel transitions
- [ ] CTA buttons functional
- [ ] Parallax effect on scroll

### Contact Form
- [ ] Form validation works
- [ ] Submission sends to formsubmit.co
- [ ] Success/error messages display
- [ ] Fallback to mailto link on error

---

## 4. Navigation Testing

### Hash Navigation
- [ ] `/#contact` scrolls to contact section
- [ ] `/#home` scrolls to top
- [ ] Hash links from other pages work
- [ ] Smooth scrolling enabled

### Link Navigation
- [ ] Internal links use Next.js Link component
- [ ] No full page reloads on navigation
- [ ] Back/forward browser buttons work

---

## 5. Image Loading

### Local Images
- [ ] `/LRT-logo.webp` loads
- [ ] `/hero_building.png` loads
- [ ] `/heroBannerVideo.mov` plays
- [ ] Client logos load (`/01_clinet.webp` - `/06_clinet.webp`)
- [ ] Project images load (`/projects/*.webp`)

### External Images
- [ ] Unsplash images load (check Network tab)
- [ ] Next.js Image optimization working

---

## 6. Special Features

### Door Configurator
- [ ] Iframe loads external content
- [ ] No header/footer on page
- [ ] Loading state displays
- [ ] Error boundary works

### Projects Page
- [ ] Initial 12 projects display
- [ ] Infinite scroll loads more
- [ ] Hover effects work
- [ ] Project details overlay appears

---

## 7. Performance Checks

### Lighthouse Audit (run in Chrome DevTools)
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

---

## 8. Responsive Design

### Breakpoints to Test
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

### Mobile-Specific
- [ ] Mobile menu works
- [ ] Touch interactions work
- [ ] No horizontal scroll
- [ ] Text readable without zoom

---

## 9. Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 10. Build Verification

```bash
# Production build successful
npm run build
# Output: ✓ Compiled successfully
# All 17 routes generated as static content
```

---

## Known Issues / Notes

1. **TLS Certificate Error (Dev Only)**: Network/proxy may block external image fetching during development. This is a local environment issue, not a production concern.

2. **Google Fonts**: Using CSS import instead of next/font due to build-time network restrictions. Font loading works correctly at runtime.

---

## Next Steps (Phase 10: Deployment)

1. Configure Vercel project
2. Set environment variables
3. Deploy to production
4. Verify production URLs
5. Submit sitemap to Google Search Console
