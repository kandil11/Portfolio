# ⚡ Quick Start Guide

## 🏃 Get Running in 60 Seconds

```bash
# Navigate to portfolio
cd /Users/7amada/Desktop/ALL/portfolio

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser 🎉

---

## 📝 3 Quick Customizations

### 1. Add Your Photo (2 minutes)

```bash
# Convert HEIC to JPG (online or Preview app)
# Save as: public/images/profile.jpg

# Then update Hero.tsx line 23:
```

```tsx
<div 
  className="w-[600px] h-[600px] rounded-full blur-2xl opacity-20"
  style={{
    backgroundImage: 'url(/images/profile.jpg)',
    backgroundSize: 'cover',
  }}
/>
```

### 2. Update Contact Info (1 minute)

Edit `components/Contact.tsx` lines 9-35:

```tsx
const contactMethods = [
  {
    label: 'EMAIL',
    value: 'your.email@example.com',  // ← Change this
    href: 'mailto:your.email@example.com',
  },
  // ... update other methods
];
```

### 3. Modify Projects (5 minutes)

Edit `components/Projects.tsx` lines 6-60:

```tsx
const projects = [
  {
    title: 'Your Project',       // ← Change
    description: '...',           // ← Change
    tech: ['React', 'Node.js'],  // ← Change
    // ... rest
  },
];
```

---

## 🎨 Quick Color Change

Edit `tailwind.config.ts`:

```typescript
colors: {
  'neon-cyan': '#00ffff',      // ← Your primary color
  'neon-magenta': '#ff00ff',   // ← Your secondary color
  'neon-yellow': '#ffff00',    // ← Your accent color
}
```

Save and see changes instantly!

---

## 🚀 Deploy in 5 Minutes

### Option A: Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, done!
```

Your site will be live at `your-project.vercel.app`

### Option B: GitHub + Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Click Deploy
```

---

## 🐛 Common Issues

### Port 3000 in use?
```bash
npx kill-port 3000
npm run dev
```

### Dependencies error?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build error?
```bash
rm -rf .next
npm run dev
```

---

## 📁 Key Files to Edit

| File | What to Change |
|------|---------------|
| `components/Projects.tsx` | Your projects |
| `components/Experience.tsx` | Your timeline |
| `components/Skills.tsx` | Your skills |
| `components/Contact.tsx` | Contact info |
| `components/Hero.tsx` | Hero text |
| `app/layout.tsx` | Site title & meta |
| `tailwind.config.ts` | Colors |

---

## 🎯 Next Steps

1. **Add photo** → `SETUP-GUIDE.md`
2. **Customize content** → Edit components
3. **Deploy** → `DEPLOYMENT.md`
4. **Deep dive** → `PROJECT-OVERVIEW.md`

---

## 💡 Pro Tips

- Use `Cmd/Ctrl + S` for hot reload
- Test on mobile: Use browser DevTools
- Before deploy: Run `npm run build`
- Need help? Check `README.md`

---

**That's it! You're ready to go! 🚀**

Server running at: http://localhost:3000
