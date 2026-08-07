import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal Teal Glassmorphism Palette
        'background': '#0a0a0a',
        'surface': '#121212',
        
        // High contrast text
        'on-background': '#ffffff', // White for headings
        'on-surface': '#f4f4f5', // Off-white for body text
        'on-surface-variant': '#a1a1aa', // Gray for muted text
        
        // Glass settings (White borders/fills)
        'glass-fill': 'rgba(255, 255, 255, 0.03)',
        'glass-stroke': 'rgba(255, 255, 255, 0.08)',
        'glass-hover': 'rgba(255, 255, 255, 0.08)',
        'glass-highlight': 'rgba(255, 255, 255, 0.15)',
        
        // Vibrant Accents (Teal as main, with complementary colors)
        'primary': '#14b8a6', // Teal
        'primary-container': '#14b8a6',
        'on-primary-container': '#ffffff',
        
        'secondary': '#8b5cf6', // Violet
        'secondary-container': '#8b5cf6',
        
        'tertiary': '#f59e0b', // Amber
        'tertiary-container': '#f59e0b',
      },
      fontFamily: {
        // Map serif to our new Outfit heading font so we don't have to refactor every component
        'serif': ['var(--font-outfit)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-space-mono)', 'monospace'],
        'heading': ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
