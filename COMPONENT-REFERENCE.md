# 🧩 Component Reference

Quick reference for all portfolio components and how to customize them.

---

## 🎯 CustomCursor

**File:** `components/CustomCursor.tsx`

**Purpose:** Creates a custom magnetic cursor effect on desktop.

**Props:** None

**Customization:**
```tsx
// Change cursor size
.custom-cursor { width: 20px; height: 20px; }  // Main cursor
.custom-cursor-follower { width: 40px; height: 40px; }  // Follower

// Change color
border: 2px solid #YOUR_COLOR;

// Adjust follow speed
x: prev.x + (position.x - prev.x) * 0.1,  // 0.1 = speed (lower = slower)
```

**Disable:** Remove `<CustomCursor />` from `app/page.tsx`

---

## 🦸 Hero

**File:** `components/Hero.tsx`

**Purpose:** Landing section with massive typography and info cards.

**Key Sections:**

### 1. Name Typography (lines 46-55)
```tsx
<h1 className="font-serif massive-text mb-8">
  Muhammad          {/* ← Change your first name */}
  <br />
  <span className="text-neon-cyan neon-glow">
    Kandil          {/* ← Change your last name */}
  </span>
</h1>
```

### 2. Description (lines 57-66)
```tsx
<p className="text-xl md:text-2xl ...">
  Full-stack developer crafting...  {/* ← Change description */}
</p>
```

### 3. Info Cards (lines 81-108)
```tsx
// Edit each card's content:
<div className="p-6 border-2 border-neon-cyan/30 ...">
  <div className="mono-label text-neon-cyan mb-2">[ACHIEVEMENT]</div>
  <h3 className="text-2xl font-bold mb-2">2nd Place Winner</h3>
  <p className="text-gray-400">Deep Minds Competition • MSA</p>
</div>
```

**Colors:** Change `border-neon-cyan` to `border-neon-magenta` or `border-neon-yellow`

---

## 🎨 Projects

**File:** `components/Projects.tsx`

**Purpose:** Asymmetric grid showcasing projects.

**Add New Project:**
```tsx
const projects = [
  // ... existing projects
  {
    id: 6,                              // Unique ID
    title: 'Your Project',              // Project name
    subtitle: 'Short tagline',          // One-liner
    description: 'Full description...',  // Shows on hover
    tech: ['React', 'Node.js'],         // Tech stack
    color: 'neon-cyan',                 // cyan, magenta, or yellow
    year: '2024',                       // Year
    category: 'WEB DEVELOPMENT',        // Category tag
    gridClass: 'lg:col-span-6 lg:row-span-1',  // Grid size
  },
];
```

**Grid Sizes:**
- `lg:col-span-4` = 1/3 width
- `lg:col-span-6` = 1/2 width  
- `lg:col-span-8` = 2/3 width
- `lg:col-span-12` = Full width
- `lg:row-span-1` = Normal height
- `lg:row-span-2` = Double height

**Add Project Image:**
```tsx
// Inside project card, add:
<div className="absolute inset-0 opacity-20">
  <Image
    src="/images/projects/project-name.jpg"
    alt={project.title}
    fill
    className="object-cover"
  />
</div>
```

---

## 📅 Experience

**File:** `components/Experience.tsx`

**Purpose:** Timeline with education and milestones.

### 1. Update Education (lines 40-52)
```tsx
const education = {
  institution: 'Your University',
  degree: 'Bachelor of Computer Science',
  location: 'City, Country',
  period: '2023 - 2027',
  gpa: 'Expected Graduation: June 2027',
};
```

### 2. Add/Edit Milestones (lines 7-38)
```tsx
const experiences = [
  {
    year: '2024',
    title: 'Your Achievement',
    type: 'ACHIEVEMENT',  // ACHIEVEMENT, TRAINING, CERTIFICATION, COURSE
    description: 'Description of what you did...',
    skills: ['Skill 1', 'Skill 2'],
    color: 'neon-cyan',   // cyan, magenta, or yellow
  },
];
```

### 3. Edit Courses (lines 93-104)
```tsx
{['Data Structures', 'Algorithms', ...].map((course, index) => (
  // Add your courses here
))}
```

---

## 💪 Skills

**File:** `components/Skills.tsx`

**Purpose:** Animated skill bars and soft skills grid.

### 1. Update Technical Skills (lines 6-39)
```tsx
const skillCategories = [
  {
    category: 'Languages',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 90, color: 'neon-cyan' },
      // Add your skills with percentage
    ],
  },
  // Add more categories
];
```

**Levels:** 0-100 (percentage for bar fill)

### 2. Update Soft Skills (lines 41-52)
```tsx
const softSkills = [
  'Problem-Solving',
  'Your Skill Here',
  // Add more soft skills
];
```

### 3. Update Certifications (lines 149-166)
```tsx
<div>
  <h4 className="text-xl font-bold mb-2">AWS</h4>
  <ul className="text-gray-400 space-y-1 ml-4">
    <li>• Your certification</li>
  </ul>
</div>
```

---

## 📞 Contact

**File:** `components/Contact.tsx`

**Purpose:** Contact methods in bento grid layout.

### Update Contact Methods (lines 11-44)
```tsx
const contactMethods = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'your.email@example.com',      // ← Change
    href: 'mailto:your.email@example.com', // ← Change
    icon: '📧',
    color: 'neon-cyan',
  },
  {
    id: 'phone',
    label: 'PHONE',
    value: '+1 234 567 8900',             // ← Change
    href: 'tel:+12345678900',             // ← Change
    icon: '📱',
    color: 'neon-magenta',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'your-linkedin-handle',        // ← Change
    href: 'https://linkedin.com/in/your-handle', // ← Change
    icon: '💼',
    color: 'neon-yellow',
  },
  // ... location
];
```

### Update CTA Section (lines 123-133)
```tsx
<h3 className="text-3xl md:text-4xl font-bold mb-6">
  Currently Available for{' '}
  <span className="text-neon-cyan">Opportunities</span>  {/* ← Change status */}
</h3>
<p className="text-gray-400 text-lg mb-8">
  I'm actively seeking...  {/* ← Change availability text */}
</p>
```

---

## 🎨 Global Styles

**File:** `app/globals.css`

### Custom Classes

**Massive Text:**
```css
.massive-text {
  font-size: clamp(3rem, 12vw, 10rem);
  /* Adjust min/max sizes */
}
```

**Mono Label:**
```css
.mono-label {
  font-family: var(--font-space-mono);
  font-size: 0.75rem;  /* Adjust size */
  letter-spacing: 0.1em;  /* Adjust spacing */
}
```

**Neon Glow:**
```css
.neon-glow {
  text-shadow: 
    0 0 10px rgba(0, 255, 255, 0.5),  /* Adjust blur & opacity */
    0 0 20px rgba(0, 255, 255, 0.3),
    0 0 30px rgba(0, 255, 255, 0.2);
}
```

**Magnetic Button:**
```css
.magnetic-btn:hover {
  transform: scale(1.05);  /* Adjust scale */
}
```

---

## 📐 Layout

**File:** `app/layout.tsx`

### Update Metadata (lines 23-28)
```tsx
export const metadata: Metadata = {
  title: "Your Name - Developer",      // ← Change
  description: "Your description...",   // ← Change
  keywords: ["Your", "Keywords"],       // ← Change
};
```

### Change Fonts
```tsx
// Import different fonts
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({ 
  subsets: ["latin"],
  variable: '--font-your-name',
});

// Add to body className
className={`... ${yourFont.variable} ...`}

// Update Tailwind config
fontFamily: {
  'your-name': ['var(--font-your-name)'],
}
```

---

## 🎨 Tailwind Config

**File:** `tailwind.config.ts`

### Add Custom Colors
```typescript
colors: {
  'your-color': '#hexcode',
}
```

### Add Custom Animations
```typescript
animation: {
  'your-animation': 'your-animation 2s ease-in-out infinite',
},
keyframes: {
  'your-animation': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  }
}
```

---

## 🎬 Animation Patterns

### Scroll-triggered Fade
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Scroll Progress
```tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

<motion.div style={{ y }}>
  Parallax content
</motion.div>
```

---

## 📱 Responsive Utilities

### Breakpoint Classes
```tsx
className="
  text-sm          // Mobile
  md:text-base     // Tablet (768px+)
  lg:text-lg       // Desktop (1024px+)
  xl:text-xl       // Large Desktop (1440px+)
"
```

### Hide/Show by Screen Size
```tsx
className="
  hidden           // Hidden on mobile
  md:block         // Show on tablet+
"

className="
  block            // Show on mobile
  md:hidden        // Hide on tablet+
"
```

---

## 🎯 Quick Customization Checklist

- [ ] Update name in Hero
- [ ] Change contact info in Contact
- [ ] Edit projects in Projects
- [ ] Update timeline in Experience
- [ ] Adjust skills in Skills
- [ ] Change colors in Tailwind config
- [ ] Update metadata in layout.tsx
- [ ] Add profile photo
- [ ] Add project screenshots
- [ ] Customize CTA text

---

**Need more help? Check the other documentation files!**

- `README.md` - Main overview
- `SETUP-GUIDE.md` - Detailed setup
- `QUICK-START.md` - 60-second start
- `PROJECT-OVERVIEW.md` - Design philosophy
- `DEPLOYMENT.md` - How to launch
