'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from './ui/GlassCard';

const experiences = [
  {
    year: '2024',
    title: 'NTI - Data Analytics Training',
    type: 'TRAINING',
    description: 'Completed intensive 120-hour summer training program in Data Analytics',
    skills: ['Data Analysis', 'Statistics', 'Python', 'Visualization'],
    color: 'primary-container',
  },
  {
    year: '2024',
    title: 'Deep Minds Competition Winner',
    type: 'ACHIEVEMENT',
    description: '2nd Place - OS Visualizer project at Faculty of Computer Science, MSA University',
    skills: ['Algorithm Visualization', 'UI/UX', 'Cross-platform'],
    color: 'secondary-container',
  },
  {
    year: '2023-2024',
    title: 'AWS Cloud Computing',
    type: 'CERTIFICATION',
    description: 'Completed multiple AWS courses covering cloud fundamentals, networking, storage, and compute',
    skills: ['Cloud Computing', 'AWS', 'Networking', 'Infrastructure'],
    color: 'tertiary-container',
  },
  {
    year: '2023',
    title: 'Mahara Tech - MongoDB',
    type: 'COURSE',
    description: 'Advanced database management and NoSQL technologies',
    skills: ['MongoDB', 'NoSQL', 'Database Design'],
    color: 'primary-container',
  },
];

const education = {
  institution: 'October University for Modern Sciences and Arts',
  degree: 'Bachelor of Computer Science',
  location: 'Giza, Egypt',
  period: '2023 - 2027',
  gpa: 'Expected Graduation: June 2027',
};

import { MapPin, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="font-mono text-sm tracking-widest text-secondary-container mb-4 font-bold uppercase">Journey</div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold">
            Timeline<span className="text-primary-container">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Education Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm tracking-widest text-primary-container mb-8 font-bold uppercase">Education</h3>
            
            <GlassCard className="p-8 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-3xl font-serif font-bold mb-2">{education.degree}</h4>
                  <p className="text-lg text-on-surface-variant font-sans">{education.institution}</p>
                </div>
                <span className="font-mono text-sm tracking-widest text-primary-container font-bold">{education.period}</span>
              </div>
              <div className="space-y-4 text-on-surface-variant font-sans text-sm mt-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-container" />
                  <p>{education.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-secondary-container" />
                  <p>{education.gpa}</p>
                </div>
              </div>
            </GlassCard>

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
                >
                  <GlassCard className="p-6 text-center hover:bg-white/5 transition-colors cursor-default">
                    <span className="font-mono text-sm">{course}</span>
                  </GlassCard>
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
            <h3 className="font-mono text-sm tracking-widest text-secondary-container mb-8 font-bold uppercase">Milestones</h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <GlassCard className="p-8 cursor-pointer hover:bg-white/5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`font-mono text-xs tracking-widest uppercase font-bold text-${exp.color}`}>{exp.type}</span>
                      <span className="font-mono text-xs tracking-widest text-on-surface-variant">{exp.year}</span>
                    </div>
                    
                    <h4 className="text-2xl font-serif font-bold mb-3 hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    
                    <p className="text-on-surface-variant font-sans text-sm mb-4">{exp.description}</p>

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
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-glass-stroke mt-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`font-mono text-xs px-3 py-1 rounded-full border border-${exp.color} text-${exp.color} bg-${exp.color}/10`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

