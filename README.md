# Muhammad Kandil - Creative Developer Portfolio

A premium, hand-crafted portfolio website showcasing projects and experience with bold design and interactive animations.

## ✨ Features

- **Bold Dark Theme** - Deep charcoal background with neon cyan, magenta, and yellow accents
- **Framer Motion Animations** - Smooth scroll animations, hover states, and micro-interactions
- **Asymmetric Grid Layouts** - Artistic, non-standard layouts for projects
- **Custom Cursor** - Interactive magnetic cursor effect (desktop)
- **Creative Typography** - Unique font pairing: Playfair Display (serif) + Space Mono + Inter
- **Fully Responsive** - Optimized for all devices
- **Interactive Timeline** - Non-linear CV presentation with expandable bento boxes
- **Hover Reveals** - Project cards reveal technical details on hover
- **High Contrast Borders** - Swiss design influence with neon borders

## 🚀 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Playfair Display, Space Mono, Inter)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎨 Design Philosophy

This portfolio deliberately avoids generic AI-generated templates by:

1. **Asymmetry** - No perfect symmetry in layouts
2. **Bold Colors** - Deep saturation with neon accents instead of soft pastels
3. **Unique Typography** - Sophisticated serif + tight mono combination
4. **Dark by Default** - High-contrast dark theme with neon highlights
5. **Artistic Grids** - Bento box layouts and non-standard grid patterns
6. **Micro-interactions** - Every element responds to user interaction

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── CustomCursor.tsx    # Magnetic cursor effect
│   ├── Hero.tsx            # Hero section with massive typography
│   ├── Projects.tsx        # Asymmetric project grid
│   ├── Experience.tsx      # Interactive timeline
│   ├── Skills.tsx          # Skills with progress bars
│   └── Contact.tsx         # Contact bento grid
├── public/
│   └── images/             # Project images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎯 Sections

1. **Hero** - Massive typography introduction with award highlights
2. **Projects** - 5 projects in asymmetric grid with hover reveals
3. **Timeline** - Education and milestones with interactive expansion
4. **Skills** - Technical skills with animated progress bars + soft skills bento grid
5. **Contact** - Multiple contact methods in creative bento layout

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Palette

- **Background:** `#0f0f0f` (darker-charcoal), `#1a1a1a` (deep-charcoal)
- **Neon Cyan:** `#00ffff`
- **Neon Magenta:** `#ff00ff`
- **Neon Yellow:** `#ffff00`
- **Text:** `#ffffff`, `#e0e0e0`, `#666666`

## 📝 Customization

To customize with your own information:

1. Update project data in `components/Projects.tsx`
2. Modify experience in `components/Experience.tsx`
3. Adjust skills in `components/Skills.tsx`
4. Change contact info in `components/Contact.tsx`
5. Update metadata in `app/layout.tsx`

## 🌐 Deployment

Deploy easily on Vercel:

```bash
# Deploy to Vercel
vercel

# Or push to GitHub and connect to Vercel
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

**Built by Muhammad Kandil** | Computer Science Student @ MSA University
