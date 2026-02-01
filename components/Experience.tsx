'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    year: '2024',
    title: 'NTI - Data Analytics Training',
    type: 'TRAINING',
    description: 'Completed intensive 120-hour summer training program in Data Analytics',
    skills: ['Data Analysis', 'Statistics', 'Python', 'Visualization'],
    color: 'neon-cyan',
  },
  {
    year: '2024',
    title: 'Deep Minds Competition Winner',
    type: 'ACHIEVEMENT',
    description: '2nd Place - OS Visualizer project at Faculty of Computer Science, MSA University',
    skills: ['Algorithm Visualization', 'UI/UX', 'Cross-platform'],
    color: 'neon-magenta',
  },
  {
    year: '2023-2024',
    title: 'AWS Cloud Computing',
    type: 'CERTIFICATION',
    description: 'Completed multiple AWS courses covering cloud fundamentals, networking, storage, and compute',
    skills: ['Cloud Computing', 'AWS', 'Networking', 'Infrastructure'],
    color: 'neon-yellow',
  },
  {
    year: '2023',
    title: 'Mahara Tech - MongoDB',
    type: 'COURSE',
    description: 'Advanced database management and NoSQL technologies',
    skills: ['MongoDB', 'NoSQL', 'Database Design'],
    color: 'neon-cyan',
  },
];

const education = {
  institution: 'October University for Modern Sciences and Arts',
  degree: 'Bachelor of Computer Science',
  location: 'Giza, Egypt',
  period: '2023 - 2027',
  gpa: 'Expected Graduation: June 2027',
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-deep-charcoal/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mono-label text-neon-magenta mb-4">[JOURNEY]</div>
          <h2 className="font-serif text-6xl md:text-8xl font-bold">
            Timeline<span className="text-neon-cyan">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Education Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mono-label text-neon-cyan mb-8">[EDUCATION]</h3>
            
            <div className="border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 p-8 mb-6 hover-reveal">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold mb-2">{education.degree}</h4>
                  <p className="text-lg text-gray-400">{education.institution}</p>
                </div>
                <span className="mono-label text-neon-cyan">{education.period}</span>
              </div>
              <div className="space-y-2 text-gray-400">
                <p>📍 {education.location}</p>
                <p>🎓 {education.gpa}</p>
              </div>
            </div>

            {/* Key Courses Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Data Structures',
                'Algorithms',
                'Operating Systems',
                'Web Development',
                'Databases',
                'Statistics',
              ].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bento-item"
                >
                  <span className="text-sm">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mono-label text-neon-magenta mb-8">[MILESTONES]</h3>
            
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`mono-label text-${exp.color}`}>[{exp.type}]</span>
                      <span className="mono-label text-gray-500">{exp.year}</span>
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-bold mb-2 hover:text-neon-cyan transition-colors">
                      {exp.title}
                    </h4>
                    
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Skills - Expand on click */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`mono-label text-xs px-3 py-1 border border-${exp.color} text-${exp.color}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
