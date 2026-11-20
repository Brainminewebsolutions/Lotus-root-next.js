# Lotus Roots Technologies - Website

A modern, SEO-optimized website for Lotus Roots Technologies, built with Next.js 16 and React 19.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4 
- **Icons**: Lucide React
- **CMS**: Sanity (for blog and content management)
- **Backend**: Supabase (optional)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure 

```
v5lrt/
├── app/                    # Next.js App Router pages
│   ├── (main)/            # Pages with header/footer
│   │   ├── page.tsx       # Home page
│   │   ├── blog/          # Sanity-powered blog
│   │   ├── contact/       # Contact form
│   │   ├── projects/      # Projects portfolio
│   │   └── [services]/    # Service pages
│   ├── (standalone)/      # Pages without header/footer
│   │   └── door-configurator/
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # React components
│   ├── pages/            # Page-specific content
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── data/                  # Static data
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities
├── sanity/                # Sanity CMS configuration and schemas
└── public/               # Static assets
```

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/blog` | Sanity-powered blog |
| `/contact` | Contact page |
| `/digital-security` | Digital Security services |
| `/web-development` | Web Development services |
| `/digital-engineering` | Digital Engineering services |
| `/digital-engineering/cad-services` | CAD Services |
| `/digital-engineering/cad-automation` | CAD Automation |
| `/digital-engineering/pdm-plm` | PDM/PLM solutions |
| `/digital-engineering/custom-training-support` | Training |
| `/building-information-modeling-services` | BIM Services |
| `/digital-business` | Digital Business services |
| `/technology-development` | Technology Development |
| `/talent-capability-building` | Talent & Capability |
| `/seo-services-glasgow` | SEO Services Glasgow |
| `/seo-services-liverpool` | SEO Services Liverpool |
| `/seo-services-manchester` | SEO Services Manchester |
| `/projects` | Projects portfolio |
| `/door-configurator` | 3D Door Configurator |

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start 
```

## 🔐 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://thelotusroots.co.uk
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
```

## 📊 SEO Features

- ✅ Server-side rendered meta tags
- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (Organization, LocalBusiness, BreadcrumbList)
- ✅ PWA manifest

## 📚 Documentation

- [Testing Checklist](./TESTING_CHECKLIST.md)
- [Deployment Guide](./DEPLOYMENT.md)

## 📄 License

© 2026 Lotus Roots Technologies. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
