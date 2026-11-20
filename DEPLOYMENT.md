0# Deployment Guide - Lotus Roots Technologies   

## Overview
This guide covers deploying the Next.js application to Vercel (recommended) or other platforms. 

---

## Option 1: Vercel Deployment (Recommended) 

### Step 1: Push to GitHub
```bash
# Initialize git if not already done 
git init

# Add all files
git add .

# Commit
git commit -m "Next.js migration complete - ready for deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/lrt-website.git

# Push
git push -u origin main 
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub 
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js

### Step 3: Configure Environment Variables
In Vercel Dashboard → Settings → Environment Variables: 

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://thelotusroots.co.uk` | Production |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL | Production |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Key | Production |

### Step 4: Configure Custom Domain
1. Go to Settings → Domains
2. Add `thelotusroots.co.uk`
3. Add `www.thelotusroots.co.uk`
4. Update DNS records as instructed

### Step 5: Deploy
Click "Deploy" - Vercel will build and deploy automatically.

---

## Option 2: Self-Hosted Deployment

### Build for Production 
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### With PM2 (Process Manager)
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "lrt-website" -- start

# Save process list
pm2 save

# Setup startup script
pm2 startup
```

---

## Post-Deployment Checklist 

### 1. Verify All Routes
- [ ] https://thelotusroots.co.uk/
- [ ] https://thelotusroots.co.uk/digital-security
- [ ] https://thelotusroots.co.uk/web-development
- [ ] https://thelotusroots.co.uk/digital-engineering
- [ ] https://thelotusroots.co.uk/projects
- [ ] https://thelotusroots.co.uk/door-configurator

### 2. Verify SEO Files
- [ ] https://thelotusroots.co.uk/sitemap.xml
- [ ] https://thelotusroots.co.uk/robots.txt
- [ ] https://thelotusroots.co.uk/manifest.webmanifest

### 3. Submit to Search Engines
1. **Google Search Console**
   - Add property: `https://thelotusroots.co.uk`
   - Verify ownership (DNS or file)
   - Submit sitemap: `https://thelotusroots.co.uk/sitemap.xml`

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

### 4. Test Contact Form
- Submit a test inquiry
- Verify email received at sales@thelotusroots.co.uk

### 5. Run Lighthouse Audit
- Open Chrome DevTools
- Go to Lighthouse tab
- Run audit for Performance, Accessibility, Best Practices, SEO

---

## DNS Configuration

### For Vercel
Add these records to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### SSL Certificate
Vercel provides automatic SSL. If self-hosting, use Let's Encrypt:
```bash
# Install certbot
sudo apt install certbot

# Get certificate
sudo certbot certonly --webroot -w /var/www/html -d thelotusroots.co.uk -d www.thelotusroots.co.uk
```

---

## Monitoring & Analytics

### Recommended Tools
1. **Vercel Analytics** - Built-in performance monitoring
2. **Google Analytics 4** - Traffic analysis
3. **Sentry** - Error tracking

### Adding Google Analytics
```bash
npm install @next/third-parties
```

Update `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// In the component, add before closing </html>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## Rollback Procedure

### On Vercel
1. Go to Deployments
2. Find previous deployment
3. Click "..." → "Promote to Production"

### Self-Hosted
```bash
# If using Git
git log --oneline  # Find previous commit
git checkout <commit-hash>
npm run build
pm2 restart lrt-website
```

---

## Support

For issues with the deployment:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Contact**: sales@thelotusroots.co.uk
