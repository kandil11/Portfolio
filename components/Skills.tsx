'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from './ui/GlassCard';

import { Zap, Globe, Database, Brain } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: <Zap className="w-8 h-8" />,
    skills: [
      { name: 'Python', level: 90, color: 'primary-container' },
      { name: 'JavaScript', level: 85, color: 'secondary-container' },
      { name: 'C++', level: 80, color: 'tertiary-container' },
      { name: 'Java', level: 75, color: 'primary-container' },
      { name: 'SQL', level: 85, color: 'secondary-container' },
    ],
  },
  {
    category: 'Web Development',
    icon: <Globe className="w-8 h-8" />,
    skills: [
      { name: 'React.js', level: 85, color: 'primary-container' },
      { name: 'Node.js', level: 80, color: 'secondary-container' },
      { name: 'HTML/CSS', level: 90, color: 'tertiary-container' },
      { name: 'Tailwind CSS', level: 85, color: 'primary-container' },
    ],
  },
  {
    category: 'Databases',
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: 'MongoDB', level: 80, color: 'primary-container' },
      { name: 'MySQL', level: 85, color: 'secondary-container' },
    ],
  },
  {
    category: 'Core Concepts',
    icon: <Brain className="w-8 h-8" />,
    skills: [
      { name: 'Data Structures', level: 90, color: 'tertiary-container' },
      { name: 'Algorithms', level: 85, color: 'primary-container' },
      { name: 'Cloud Computing', level: 75, color: 'secondary-container' },
    ],
  },
];

const softSkills = [
  'Problem-Solving',
  'Critical Thinking',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
  'Attention to Detail',
  'Creativity',
  'Self-Motivation',
  'Fast Learner',
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="font-mono text-sm tracking-widest text-tertiary-container mb-4 font-bold uppercase">Capabilities</div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold">
            Skills<span className="text-primary-container">.</span>
          </h2>
        </motion.div>

        {/* Technical Skills - Asymmetric Layout */}
        <div className="mb-24">
          <h3 className="font-mono text-sm tracking-widest text-primary-container mb-8 font-bold uppercase">Technical</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-8 border-b border-glass-stroke pb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h4 className="text-2xl font-serif font-bold">{category.category}</h4>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-sans font-medium text-on-surface">{skill.name}</span>
                          <span className="font-mono text-xs tracking-widest text-on-surface-variant font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill bar */}
                        <div className="h-2 rounded-full bg-glass-stroke overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className={`h-full relative rounded-full ${
                              skill.color === 'primary-container'
                                ? 'bg-primary-container'
                                : skill.color === 'secondary-container'
                                ? 'bg-secondary-container'
                                : 'bg-tertiary-container'
                            }`}
                          >
                            {hoveredSkill === skill.name && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 bg-white/30"
                              />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-mono text-sm tracking-widest text-secondary-container mb-8 font-bold uppercase">Soft Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <GlassCard className="text-center py-6 px-4 h-full flex items-center justify-center cursor-default hover:bg-white/5 transition-colors">
                  <span className="font-mono text-sm">{skill}</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-10 border-tertiary-container/30 hover:border-tertiary-container transition-all duration-500">
            <h3 className="font-mono text-sm tracking-widest text-tertiary-container mb-8 font-bold uppercase">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">Amazon Web Services</h4>
                <ul className="text-on-surface-variant space-y-3 font-sans">
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> Introduction to Cloud 101
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> Getting Started with Networking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> Getting Started with Storage
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> Getting Started with Compute
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">Additional Training</h4>
                <ul className="text-on-surface-variant space-y-3 font-sans">
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> Mahara Tech - MongoDB
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-tertiary-container text-xs">◆</span> NTI - Data Analytics (120 hours)
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

