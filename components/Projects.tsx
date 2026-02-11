'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'OS Visualizer',
    subtitle: '2nd Place Winner',
    description: 'Cross-platform tool for visualizing Operating System algorithms including CPU scheduling, memory management, and synchronization problems.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    color: 'neon-cyan',
    year: '2024',
    category: 'AWARD-WINNING',
    gridClass: 'lg:col-span-8 lg:row-span-2',
    link: 'https://osvisualizer.vercel.app/',
    //test
  },
  {
    id: 2,
    title: 'Dr. Fatma Pharmacy',
    subtitle: 'E-Commerce Platform',
    description: 'Full-stack pharmacy management system with multi-user authentication, product catalog, shopping cart, and admin dashboard.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    color: 'neon-magenta',
    year: '2024',
    category: 'FULL-STACK',
    gridClass: 'lg:col-span-4 lg:row-span-1',
    link: 'https://db-project-alpha.vercel.app/',
  },
  {
    id: 3,
    title: 'Data Visualization Suite',
    subtitle: 'Statistics & Analytics',
    description: 'Python-based data analysis tool with statistical visualizations including correlation heatmaps, distribution plots, and descriptive statistics.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    color: 'neon-yellow',
    year: '2024',
    category: 'DATA SCIENCE',
    gridClass: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: 4,
    title: 'ML Travel Agency',
    subtitle: 'Booking Platform',
    description: 'Web-based travel agency system featuring user authentication, booking management, payment processing, and admin dashboard.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    color: 'neon-cyan',
    year: '2023',
    category: 'WEB DEVELOPMENT',
    gridClass: 'lg:col-span-6 lg:row-span-1',
  },
  {
    id: 5,
    title: 'Togaaa Library',
    subtitle: 'Mobile Reading Platform',
    description: 'Full-stack mobile library app with complex metadata handling, responsive UI, and robust state management. Seamlessly integrates NoSQL schema design with Flutter\'s reactive architecture for smooth cross-platform performance.',
    tech: ['Flutter', 'MongoDB', 'Dart', 'State Management'],
    color: 'neon-cyan',
    year: '2024',
    category: 'MOBILE DEV',
    gridClass: 'lg:col-span-6 lg:row-span-1',
  },
  {
    id: 6,
    title: 'Sudo-Cool',
    subtitle: 'Sudoku Solver Visualizer',
    description: 'Interactive Sudoku solver with recursive backtracking algorithm visualization. Features adjustable solving speed to demonstrate pathfinding logic in real-time, combining algorithmic complexity with intuitive UX design.',
    tech: ['Python', 'Flask', 'Algorithms', 'CSS/HTML'],
    color: 'neon-magenta',
    year: '2024',
    category: 'ALGORITHMS',
    gridClass: 'lg:col-span-6 lg:row-span-1',
  },
  {
    id: 7,
    title: 'Supermarket Manager',
    subtitle: 'C++ System',
    description: 'Console-based management system implementing inventory tracking, sales management, and customer data using advanced data structures.',
    tech: ['C++', 'Data Structures', 'OOP'],
    color: 'neon-yellow',
    year: '2023',
    category: 'SYSTEMS',
    gridClass: 'lg:col-span-12 lg:row-span-1',
  },
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
          <div className="mono-label text-neon-cyan mb-4">[SELECTED WORK]</div>
          <h2 className="font-serif text-6xl md:text-8xl font-bold">
            Projects<span className="text-neon-magenta">.</span>
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`project-card ${project.gridClass} group relative overflow-hidden ${project.link ? 'cursor-pointer' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-10 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-20' : ''
                  } ${project.color === 'neon-cyan'
                    ? 'from-cyan-500 to-blue-500'
                    : project.color === 'neon-magenta'
                      ? 'from-magenta-500 to-purple-500'
                      : 'from-yellow-500 to-orange-500'
                  }`}
              />

              {/* Border */}
              <div
                className={`absolute inset-0 border-2 transition-all duration-300 ${hoveredProject === project.id
                  ? project.color === 'neon-cyan'
                    ? 'border-neon-cyan'
                    : project.color === 'neon-magenta'
                      ? 'border-neon-magenta'
                      : 'border-neon-yellow'
                  : 'border-white/10'
                  }`}
              />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`mono-label text-${project.color}`}>
                      [{project.category}]
                    </span>
                    <span className="mono-label text-gray-500">{project.year}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-4">{project.subtitle}</p>

                  {/* Description - visible on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      height: hoveredProject === project.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 leading-relaxed overflow-hidden mb-4"
                  >
                    {project.description}
                  </motion.p>

                  {/* Live Demo Button - always visible if link exists */}
                  {project.link && (
                    <div className="mb-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`inline-block px-4 py-2 border-2 mono-label text-xs transition-all duration-300 hover:scale-105 ${project.color === 'neon-cyan'
                          ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-charcoal'
                          : project.color === 'neon-magenta'
                            ? 'border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-darker-charcoal'
                            : 'border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-darker-charcoal'
                          }`}
                      >
                        [VIEW LIVE DEMO →]
                      </a>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`mono-label text-xs px-3 py-1 border transition-colors duration-300 ${hoveredProject === project.id
                        ? project.color === 'neon-cyan'
                          ? 'border-neon-cyan text-neon-cyan'
                          : project.color === 'neon-magenta'
                            ? 'border-neon-magenta text-neon-magenta'
                            : 'border-neon-yellow text-neon-yellow'
                        : 'border-white/20 text-gray-400'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{
                  x: hoveredProject === project.id ? '100%' : '-100%',
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`absolute inset-0 pointer-events-none ${project.color === 'neon-cyan'
                  ? 'bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent'
                  : project.color === 'neon-magenta'
                    ? 'bg-gradient-to-r from-transparent via-neon-magenta/10 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-neon-yellow/10 to-transparent'
                  }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 mb-6">
            Interested in collaborating or learning more?
          </p>
          <a
            href="#contact"
            className="magnetic-btn inline-block px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-charcoal transition-all duration-300 mono-label"
          >
            [LET'S TALK]
          </a>
        </motion.div>
      </div>
    </section>
  );
}
