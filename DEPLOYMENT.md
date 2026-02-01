# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio with zero configuration.

### Method 1: GitHub Integration (Recommended)

1. **Push your code to GitHub**
   ```bash
   # Initialize git (if not already)
   cd /Users/7amada/Desktop/ALL/portfolio
   git init
   git add .
   git commit -m "Initial commit: Premium portfolio"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd /Users/7amada/Desktop/ALL/portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Build settings? (Keep defaults)

# Production deployment
vercel --prod
```

---

## 🌐 Custom Domain

### Add Custom Domain on Vercel

1. Go to your project on Vercel
2. Settings → Domains
3. Add your domain (e.g., `muhammadkandil.com`)
4. Follow DNS configuration instructions

### DNS Configuration

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 Other Deployment Options

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}

# Deploy
npm run deploy
```

Note: GitHub Pages requires static export, so remove any server-side features.

### Deploy to Your Own Server

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

---

## 🔐 Environment Variables (If Needed)

If you add services like analytics, add environment variables on Vercel:

1. Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_GA_ID` (Google Analytics)
   - `NEXT_PUBLIC_API_URL` (If you add a backend)

---

## 📊 Post-Deployment Setup

### 1. Google Analytics (Optional)

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. SEO Setup

Update `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Muhammad Kandil - Creative Developer",
  description: "Full-stack developer and CS student...",
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Muhammad Kandil - Creative Developer',
    description: 'Full-stack developer...',
    url: 'https://your-domain.com',
    siteName: 'Muhammad Kandil Portfolio',
    images: ['/og-image.jpg'],
  },
};
```

### 3. Add Favicon

Replace the default favicon:
- Create `app/favicon.ico` (16x16, 32x32, or 48x48)
- Or add multiple sizes in `app/icon.png`

### 4. Sitemap

Create `app/sitemap.ts`:
```tsx
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

### 5. Robots.txt

Create `app/robots.ts`:
```tsx
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
  };
}
```

---

## 🔍 Performance Optimization

### 1. Image Optimization

Convert images to WebP:
```bash
# Install imagemagick
brew install imagemagick

# Convert to WebP
magick convert input.jpg -quality 85 output.webp
```

### 2. Lighthouse Score

Run Lighthouse audit:
```bash
npm install -g lighthouse

lighthouse https://your-site.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 3. Bundle Analysis

```bash
npm install @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

---

## 📈 Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- View in your Vercel dashboard

### Custom Monitoring

Add performance monitoring:
```tsx
// app/layout.tsx
export function reportWebVitals(metric: any) {
  console.log(metric);
  // Send to analytics service
}
```

---

## 🔄 Continuous Deployment

With Vercel + GitHub:
- Every push to `main` automatically deploys
- Pull requests get preview deployments
- Instant rollbacks if needed

---

## ✅ Pre-Launch Checklist

- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check loading speed (<3s)
- [ ] Ensure images are optimized
- [ ] Add meta tags and OG images
- [ ] Set up custom domain
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Test contact form (if added)
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console

---

## 🆘 Troubleshooting

### Build Fails on Vercel

Check the build logs:
- Common issues: Type errors, missing env variables
- Fix locally: `npm run build`

### Images Not Loading

- Ensure images are in `public/` folder
- Check Next.js image domains in `next.config.ts`

### 404 Errors

- Verify file structure matches App Router convention
- Check `app/` directory structure

---

## 📞 Support

If you encounter issues:
1. Check Vercel docs: https://vercel.com/docs
2. Next.js docs: https://nextjs.org/docs
3. Community: https://github.com/vercel/next.js/discussions

---

**Your portfolio is production-ready! 🎉**
