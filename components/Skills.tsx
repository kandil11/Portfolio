'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    category: 'Languages',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 90, color: 'neon-cyan' },
      { name: 'JavaScript', level: 85, color: 'neon-yellow' },
      { name: 'C++', level: 80, color: 'neon-magenta' },
      { name: 'Java', level: 75, color: 'neon-cyan' },
      { name: 'SQL', level: 85, color: 'neon-yellow' },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'React.js', level: 85, color: 'neon-cyan' },
      { name: 'Node.js', level: 80, color: 'neon-yellow' },
      { name: 'HTML/CSS', level: 90, color: 'neon-magenta' },
      { name: 'Tailwind CSS', level: 85, color: 'neon-cyan' },
    ],
  },
  {
    category: 'Databases',
    icon: '💾',
    skills: [
      { name: 'MongoDB', level: 80, color: 'neon-cyan' },
      { name: 'MySQL', level: 85, color: 'neon-yellow' },
    ],
  },
  {
    category: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'Data Structures', level: 90, color: 'neon-magenta' },
      { name: 'Algorithms', level: 85, color: 'neon-cyan' },
      { name: 'Cloud Computing', level: 75, color: 'neon-yellow' },
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
          <div className="mono-label text-neon-yellow mb-4">[CAPABILITIES]</div>
          <h2 className="font-serif text-6xl md:text-8xl font-bold">
            Skills<span className="text-neon-magenta">.</span>
          </h2>
        </motion.div>

        {/* Technical Skills - Asymmetric Layout */}
        <div className="mb-20">
          <h3 className="mono-label text-neon-cyan mb-8">[TECHNICAL]</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h4 className="text-2xl font-bold">{category.category}</h4>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="mono-label text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill bar */}
                      <div className="h-2 bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className={`h-full relative ${
                            skill.color === 'neon-cyan'
                              ? 'bg-neon-cyan'
                              : skill.color === 'neon-magenta'
                              ? 'bg-neon-magenta'
                              : 'bg-neon-yellow'
                          }`}
                        >
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-white/20"
                            />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
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
        >
          <h3 className="mono-label text-neon-magenta mb-8">[SOFT SKILLS]</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bento-item text-center py-6"
              >
                <span className="text-sm">{skill}</span>
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
          className="mt-20 border-2 border-neon-yellow/30 hover:border-neon-yellow transition-all duration-300 p-8"
        >
          <h3 className="mono-label text-neon-yellow mb-6">[CERTIFICATIONS]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Amazon Web Services</h4>
              <ul className="text-gray-400 space-y-1 ml-4">
                <li>• Introduction to Cloud 101</li>
                <li>• Getting Started with Networking</li>
                <li>• Getting Started with Storage</li>
                <li>• Getting Started with Compute</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Additional Training</h4>
              <ul className="text-gray-400 space-y-1 ml-4">
                <li>• Mahara Tech - MongoDB</li>
                <li>• NTI - Data Analytics (120 hours)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
