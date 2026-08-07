'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { Download } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-start lg:items-center">
          {/* Left side - Text */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm tracking-widest text-primary-container mb-6 font-bold uppercase"
            >
              Computer Science Student • MSA University
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 max-w-full overflow-hidden leading-tight font-bold"
            >
              Muhammad
              <br />
              <span className="text-primary-container">Kandil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-xl lg:max-w-lg xl:max-w-2xl leading-relaxed mb-12 font-sans"
            >
              Full-stack developer crafting{' '}
              <span className="text-secondary-container font-bold">award-winning</span>{' '}
              digital experiences. Specializing in algorithmic visualization,
              web platforms, and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <Button variant="primary">VIEW PROJECTS</Button>
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> DOWNLOAD CV
                </Button>
              </a>
              <a href="#contact">
                <Button variant="glass">GET IN TOUCH</Button>
              </a>
            </motion.div>
          </div>

          {/* Right side - Stats/Info Cards */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Award Card */}
              <GlassCard className="p-8 transition-transform hover:-translate-y-2">
                <div className="font-mono text-xs tracking-widest text-primary-container mb-3 uppercase">Achievement</div>
                <h3 className="text-2xl font-serif font-bold mb-2">2nd Place Winner</h3>
                <p className="text-on-surface-variant font-sans text-sm">Deep Minds Competition • MSA University</p>
              </GlassCard>

              {/* Location Card */}
              <GlassCard className="p-8 transition-transform hover:-translate-y-2">
                <div className="font-mono text-xs tracking-widest text-secondary-container mb-3 uppercase">Location</div>
                <h3 className="text-2xl font-serif font-bold mb-2">Giza, Egypt</h3>
                <p className="text-on-surface-variant font-sans text-sm">Available for remote opportunities</p>
              </GlassCard>

              {/* Graduation Card */}
              <GlassCard className="p-8 transition-transform hover:-translate-y-2">
                <div className="font-mono text-xs tracking-widest text-on-surface-variant mb-3 uppercase">Graduation</div>
                <h3 className="text-2xl font-serif font-bold mb-2">June 2027</h3>
                <p className="text-on-surface-variant font-sans text-sm">Bachelor of Computer Science</p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="font-mono text-xs text-on-surface-variant tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-primary-container to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

