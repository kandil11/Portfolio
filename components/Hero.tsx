'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Background Element - Photo placeholder */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 blur-3xl animate-float" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-start lg:items-center">
          {/* Left side - Text */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mono-label text-neon-cyan mb-6"
            >
              [COMPUTER SCIENCE STUDENT • MSA UNIVERSITY]
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif massive-text mb-8 max-w-full overflow-hidden"
            >
              Muhammad
              <br />
              <span className="text-neon-cyan neon-glow">Kandil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 max-w-xl lg:max-w-lg xl:max-w-2xl leading-relaxed mb-12"
            >
              Full-stack developer crafting{' '}
              <span className="text-neon-magenta font-bold">award-winning</span>{' '}
              digital experiences. Specializing in algorithmic visualization,
              web platforms, and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#projects"
                className="magnetic-btn px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-charcoal transition-all duration-300 mono-label"
              >
                [VIEW PROJECTS]
              </a>
              <a
                href="#contact"
                className="magnetic-btn px-8 py-4 border-2 border-white/20 hover:border-neon-magenta hover:text-neon-magenta transition-all duration-300 mono-label"
              >
                [GET IN TOUCH]
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
              <div className="p-6 border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 hover-reveal">
                <div className="mono-label text-neon-cyan mb-2">[ACHIEVEMENT]</div>
                <h3 className="text-2xl font-bold mb-2">2nd Place Winner</h3>
                <p className="text-gray-400">Deep Minds Competition • MSA University</p>
              </div>

              {/* Location Card */}
              <div className="p-6 border-2 border-neon-magenta/30 hover:border-neon-magenta transition-all duration-300 hover-reveal">
                <div className="mono-label text-neon-magenta mb-2">[LOCATION]</div>
                <h3 className="text-2xl font-bold mb-2">Giza, Egypt</h3>
                <p className="text-gray-400">Available for remote opportunities</p>
              </div>

              {/* Graduation Card */}
              <div className="p-6 border-2 border-white/20 hover:border-white transition-all duration-300 hover-reveal">
                <div className="mono-label text-white/60 mb-2">[GRADUATION]</div>
                <h3 className="text-2xl font-bold mb-2">June 2027</h3>
                <p className="text-gray-400">Bachelor of Computer Science</p>
              </div>
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
        <div className="flex flex-col items-center gap-2">
          <span className="mono-label text-xs text-gray-500">[SCROLL]</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-16 bg-gradient-to-b from-neon-cyan to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
