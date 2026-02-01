# Portfolio Setup Guide

## 🎉 Your portfolio is ready!

The development server is running at: **http://localhost:3000**

---

## 📸 Adding Your Photo

Your profile photo (`IMG_3512 2.heic`) needs to be converted to a web-friendly format. Here are your options:

### Option 1: Online Conversion (Fastest)
1. Go to [CloudConvert](https://cloudconvert.com/heic-to-jpg) or [FreeConvert](https://www.freeconvert.com/heic-to-jpg)
2. Upload `IMG_3512 2.heic`
3. Convert to JPG or PNG
4. Download and save as `profile.jpg` in the `public/images/` folder

### Option 2: Using Preview (macOS)
1. Open `IMG_3512 2.heic` in Preview
2. Go to File → Export
3. Choose format as JPEG or PNG
4. Save as `profile.jpg` in `portfolio/public/images/`

### Option 3: Command Line (if you have ImageMagick)
```bash
# Install ImageMagick (if not installed)
brew install imagemagick

# Convert the image
magick convert "IMG_3512 2.heic" portfolio/public/images/profile.jpg
```

---

## 🎨 Integrating the Photo

Once you have `profile.jpg`, you can integrate it in several creative ways:

### Option A: Grainy Background (Current Default)
The photo is currently replaced with a gradient placeholder. To use your photo:

1. Add this to `components/Hero.tsx` at line 23 (replace the gradient div):

```tsx
<motion.div
  style={{ y, opacity }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div 
    className="w-[600px] h-[600px] rounded-full blur-2xl opacity-20"
    style={{
      backgroundImage: 'url(/images/profile.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'grayscale(50%) contrast(120%)',
    }}
  />
</motion.div>
```

### Option B: Parallax Floating Element
Add to the hero section for a floating parallax effect:

```tsx
<motion.div
  style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
  className="absolute top-1/4 right-0 w-64 h-64 opacity-30"
>
  <Image
    src="/images/profile.jpg"
    alt="Muhammad Kandil"
    width={256}
    height={256}
    className="rounded-full blur-sm grayscale hover:grayscale-0 transition-all duration-500"
  />
</motion.div>
```

### Option C: Hover-Mask Reveal
Add to the contact section:

```tsx
<div className="relative w-48 h-48 overflow-hidden group">
  <Image
    src="/images/profile.jpg"
    alt="Muhammad Kandil"
    width={192}
    height={192}
    className="rounded-full filter grayscale"
  />
  <div className="absolute inset-0 bg-neon-cyan/80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
</div>
```

---

## 🚀 Next Steps

### 1. Customize Content
- Update project descriptions in `components/Projects.tsx`
- Add project images to `public/images/projects/`
- Modify experience timeline in `components/Experience.tsx`
- Adjust skills and percentages in `components/Skills.tsx`

### 2. Add Project Images

Create project images (screenshots) and add them:

```bash
# Create project images directory
mkdir -p public/images/projects

# Add screenshots for each project:
# - os-visualizer.jpg
# - dr-fatma-pharmacy.jpg
# - data-viz.jpg
# - travel-agency.jpg
# - supermarket.jpg
```

Then update the projects array in `components/Projects.tsx` to include image URLs.

### 3. SEO & Meta Tags

Update the metadata in `app/layout.tsx`:
- Change the title and description
- Add your domain URL
- Update social media preview images

### 4. Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In the body:
<Analytics />
```

### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
# Or connect your GitHub repo in the Vercel dashboard
```

---

## 🎨 Design Customizations

### Change Color Scheme

Edit `tailwind.config.ts` to change neon colors:

```typescript
colors: {
  'neon-cyan': '#00ffff',      // Change to your preferred accent
  'neon-magenta': '#ff00ff',   // Change secondary accent
  'neon-yellow': '#ffff00',    // Change tertiary accent
}
```

### Add More Animations

The portfolio uses Framer Motion. Add custom animations:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Modify Typography

Change fonts in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: '--font-your-font',
});
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Check for linter errors
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and Next.js Image component
2. **Lazy Load**: Use `loading="lazy"` for images below the fold
3. **Code Splitting**: Components automatically split by Next.js
4. **Reduce Animations**: Consider `prefers-reduced-motion` for accessibility

---

## ✅ Pre-Deployment Checklist

- [ ] Convert and add profile photo
- [ ] Add project screenshots
- [ ] Update all personal information
- [ ] Test on mobile devices
- [ ] Check accessibility (WCAG)
- [ ] Add favicon (replace in `public/`)
- [ ] Test all links work
- [ ] Add OG images for social sharing
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS

---

## 🔐 Environment Variables

If you add external services (analytics, CMS, etc.), create `.env.local`:

```bash
# Example
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 💡 Pro Tips

1. **Unique Touches**: Add small Easter eggs (konami code, hidden messages)
2. **Loading States**: Add skeleton loaders for better UX
3. **Micro-copy**: Use creative, personality-filled text
4. **Sound**: Consider subtle sound effects on interactions (optional)
5. **Dark/Light Toggle**: Add theme switcher for user preference

---

Need help? Check the `README.md` for additional information!

**Happy coding! 🚀**
