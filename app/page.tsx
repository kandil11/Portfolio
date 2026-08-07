'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import GlassCard from '@/components/ui/GlassCard';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <div className="grain" />
      
      {/* Luminous Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] bg-background">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary-container/15 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div ref={containerRef} className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
          <GlassCard className="px-6 py-4 rounded-full border-glass-stroke bg-glass-fill backdrop-blur-xl">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-mono text-sm tracking-widest text-on-background font-bold"
              >
                MK_2026
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-6 font-mono text-sm tracking-widest text-on-surface-variant"
              >
                <a href="#projects" className="hover:text-primary transition-colors">
                  WORK
                </a>
                <a href="#experience" className="hover:text-primary transition-colors hidden md:block">
                  TIMELINE
                </a>
                <a href="#contact" className="hover:text-primary transition-colors">
                  CONNECT
                </a>
              </motion.div>
            </div>
          </GlassCard>
        </nav>

        {/* Sections */}
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 border-t border-glass-stroke mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-mono text-sm text-on-surface-variant tracking-widest">
                © 2026 Muhammad Kandil. Crafted with precision.
              </p>
              <div className="flex gap-6 font-mono text-sm tracking-widest text-on-surface-variant">
                <a 
                  href="https://linkedin.com/in/muhammad-kandil-" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LINKEDIN
                </a>
                <a 
                  href="mailto:muhammad.kandil@icloud.com"
                  className="hover:text-primary transition-colors"
                >
                  EMAIL
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

