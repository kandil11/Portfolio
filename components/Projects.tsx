'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'MASARI',
    subtitle: 'CS Course Recommender & Interview Analyzer',
    description: 'An intelligent, full-stack educational and career companion that merges LLMs, dynamic data visualization, and interactive mock interview simulations. Features Generative LLM grading, WebRTC & Whisper API voice transcription, Semantic search, and an Asynchronous headless scraping engine.',
    tech: ['Python', 'FastAPI', 'Vanilla JS', 'Groq', 'MongoDB', 'Selenium'],
    color: 'primary-container',
    year: 'May 2026',
    category: 'NOMINATED - DEEPMINDS 7TH ED',
    gridClass: 'lg:col-span-8 lg:row-span-2',
    link: 'https://masari-cs.vercel.app/',
  },
  {
    id: 2,
    title: 'FUNDR',
    subtitle: 'Credit Risk Prediction & Interactive Simulator',
    description: 'AI-assisted financial technology platform that modernizes credit risk evaluation. Features an XGBoost machine-learning pipeline trained on 1.3M records, SHAP tree explainers, and OpenRouter AI integration for automated investment thesis generation.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'OpenRouter API', 'Machine Learning'],
    color: 'secondary-container',
    year: '2026',
    category: 'DEPI R4 GRADUATION PROJECT',
    gridClass: 'lg:col-span-4 lg:row-span-2',
    link: 'https://github.com/marc-zaki/FUNDR',
  },
  {
    id: 3,
    title: 'Forecastify',
    subtitle: 'Hierarchical Sales Forecasting',
    description: 'Machine Learning project focused on hierarchical sales forecasting using the M5 Forecasting Accuracy dataset. Evaluates models including Random Forest, XGBoost, LightGBM, Prophet, and Temporal Fusion Transformer on RMSE and WAPE metrics.',
    tech: ['Python', 'XGBoost', 'LightGBM', 'Prophet', 'PyTorch'],
    color: 'tertiary-container',
    year: '2026',
    category: 'MACHINE LEARNING',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 4,
    title: 'DorMsa',
    subtitle: 'Comprehensive Housing Management',
    description: 'University housing management system facilitating secure connections between students, parents, and brokers. Features roles-based access control and OTP verification for secure communication.',
    tech: ['System Design', 'User Management', 'Security', 'OTP Verification'],
    color: 'primary-container',
    year: '2026',
    category: 'SYSTEM DESIGN',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 5,
    title: 'OS Visualizer',
    subtitle: '2nd Place Winner',
    description: 'Cross-platform tool for visualizing Operating System algorithms including CPU scheduling, memory management, and synchronization problems.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    color: 'secondary-container',
    year: '2024',
    category: 'AWARD-WINNING',
    gridClass: 'lg:col-span-4 lg:row-span-1',
    link: 'https://osvisualizer.vercel.app/',
  },
  {
    id: 6,
    title: 'Dr. Fatma Pharmacy',
    subtitle: 'E-Commerce Platform',
    description: 'Full-stack pharmacy management system with multi-user authentication, product catalog, shopping cart, and admin dashboard.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    color: 'tertiary-container',
    year: '2024',
    category: 'FULL-STACK',
    gridClass: 'lg:col-span-6 lg:row-span-1',
    link: 'https://db-project-alpha.vercel.app/',
  },
  {
    id: 7,
    title: 'Data Visualization Suite',
    subtitle: 'Statistics & Analytics',
    description: 'Python-based data analysis tool with statistical visualizations including correlation heatmaps, distribution plots, and descriptive statistics.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    color: 'primary-container',
    year: '2024',
    category: 'DATA SCIENCE',
    gridClass: 'lg:col-span-6 lg:row-span-1',
  },
  {
    id: 8,
    title: 'Togaaa Library',
    subtitle: 'Mobile Reading Platform',
    description: 'Full-stack mobile library app with complex metadata handling, responsive UI, and robust state management. Seamlessly integrates NoSQL schema design with Flutter\'s reactive architecture for smooth cross-platform performance.',
    tech: ['Flutter', 'MongoDB', 'Dart', 'State Management'],
    color: 'secondary-container',
    year: '2024',
    category: 'MOBILE DEV',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 9,
    title: 'Sudo-Cool',
    subtitle: 'Sudoku Solver Visualizer',
    description: 'Interactive Sudoku solver with recursive backtracking algorithm visualization. Features adjustable solving speed to demonstrate pathfinding logic in real-time, combining algorithmic complexity with intuitive UX design.',
    tech: ['Python', 'Flask', 'Algorithms', 'CSS/HTML'],
    color: 'tertiary-container',
    year: '2024',
    category: 'ALGORITHMS',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 10,
    title: 'Supermarket Manager',
    subtitle: 'C++ System',
    description: 'Console-based management system implementing inventory tracking, sales management, and customer data using advanced data structures.',
    tech: ['C++', 'Data Structures', 'OOP'],
    color: 'primary-container',
    year: '2023',
    category: 'SYSTEMS',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="font-mono text-sm tracking-widest text-primary-container mb-4 font-bold uppercase">Selected Work</div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold">
            Projects<span className="text-secondary-container">.</span>
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[350px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.gridClass} group h-full`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <GlassCard className={`h-full w-full ${project.link ? 'cursor-pointer' : ''} transition-all duration-500 hover:bg-primary/10`}>
                {/* Background ambient glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                    ${project.color === 'primary-container'
                      ? 'bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_70%)]' // Teal
                      : project.color === 'secondary-container'
                        ? 'bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]' // Violet
                        : 'bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)]' // Amber
                    }`}
                />

                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className={`font-mono text-xs tracking-widest uppercase font-bold text-${project.color}`}>
                        {project.category}
                      </span>
                      <span className="font-mono text-xs tracking-widest text-on-surface-variant">{project.year}</span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-on-background">
                      {project.title}
                    </h3>
                    <p className="text-lg text-on-surface-variant mb-4 font-sans">{project.subtitle}</p>

                    {/* Description - visible on hover */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        height: hoveredProject === project.id ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-on-surface leading-relaxed overflow-hidden mb-6 font-sans text-sm"
                    >
                      {project.description}
                    </motion.p>

                    {/* Live Demo Button - always visible if link exists */}
                    {project.link && (
                      <div className="mb-4">
                        <span className={`flex items-center font-mono text-xs tracking-widest uppercase font-bold text-${project.color} group-hover:underline underline-offset-4 transition-all`}>
                          VIEW LIVE DEMO <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-300 ${
                          hoveredProject === project.id
                            ? `border-${project.color} text-${project.color} bg-${project.color}/10`
                            : 'border-glass-stroke text-on-surface-variant'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center justify-center text-center"
        >
          <p className="text-xl text-on-surface-variant mb-8 font-sans">
            Interested in collaborating or learning more?
          </p>
          <a href="#contact">
            <Button variant="primary">LET'S TALK</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

