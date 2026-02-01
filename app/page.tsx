'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#0f0f0f', '#1a0f1a', '#0f1a1a', '#0f0f0f']
  );

  return (
    <>
      <CustomCursor />
      <div className="grain" />
      
      <motion.div 
        ref={containerRef}
        style={{ backgroundColor }}
        className="relative"
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mono-label text-neon-cyan"
            >
              MK_2026
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8 mono-label"
            >
              <a href="#projects" className="hover:text-neon-cyan transition-colors">
                [WORK]
              </a>
              <a href="#experience" className="hover:text-neon-cyan transition-colors">
                [TIMELINE]
              </a>
              <a href="#contact" className="hover:text-neon-cyan transition-colors">
                [CONNECT]
              </a>
            </motion.div>
          </div>
        </nav>

        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="border-t border-neon-cyan/20 py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="mono-label text-gray-500">
                © 2026 Muhammad Kandil. Crafted with precision.
              </p>
              <div className="flex gap-6 mono-label">
                <a 
                  href="https://linkedin.com/in/muhammad-kandil-" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-cyan transition-colors"
                >
                  [LINKEDIN]
                </a>
                <a 
                  href="mailto:muhammad.kandil@icloud.com"
                  className="hover:text-neon-cyan transition-colors"
                >
                  [EMAIL]
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
