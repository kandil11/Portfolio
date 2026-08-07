'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

import { Mail, Phone, Briefcase, MapPin } from 'lucide-react';

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'muhammad.kandil@icloud.com',
      href: 'mailto:muhammad.kandil@icloud.com',
      icon: <Mail className="w-10 h-10" />,
      color: 'primary-container',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+20 1500023034',
      href: 'tel:+201500023034',
      icon: <Phone className="w-10 h-10" />,
      color: 'secondary-container',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'muhammad-kandil-',
      href: 'https://linkedin.com/in/muhammad-kandil-',
      icon: <Briefcase className="w-10 h-10" />,
      color: 'tertiary-container',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Giza, Egypt',
      href: null,
      icon: <MapPin className="w-10 h-10" />,
      color: 'primary-container',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="font-mono text-sm tracking-widest text-primary-container mb-4 font-bold uppercase">Get In Touch</div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-on-background">
            Let's Connect<span className="text-secondary-container">.</span>
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant font-sans max-w-3xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations.
            <br />
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: method.href ? -1 : 0 }}
              className={`${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.id === 'linkedin' ? '_blank' : undefined}
                  rel={method.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="block h-full group"
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <GlassCard 
                    className={`h-full p-8 transition-colors duration-500 ${
                      hoveredContact === method.id ? 'bg-primary/10' : ''
                    }`}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-4xl mb-6">{method.icon}</div>
                        <div className={`font-mono text-xs tracking-widest uppercase font-bold mb-3 transition-colors ${
                          hoveredContact === method.id ? `text-${method.color}` : 'text-on-surface-variant'
                        }`}>
                          {method.label}
                        </div>
                      </div>
                      <p className="text-xl font-sans break-all text-on-surface">
                        {method.value}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              ) : (
                <div className="block h-full">
                  <GlassCard className="h-full p-8">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-4xl mb-6">{method.icon}</div>
                        <div className="font-mono text-xs tracking-widest uppercase font-bold text-on-surface-variant mb-3">
                          {method.label}
                        </div>
                      </div>
                      <p className="text-xl font-sans text-on-surface">{method.value}</p>
                    </div>
                  </GlassCard>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-12 text-center relative overflow-hidden group">
            {/* Ambient hover glow (Violet) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-on-background">
              Currently Available for{' '}
              <span className="text-secondary-container">Opportunities</span>
            </h3>
            <p className="text-on-surface-variant font-sans text-lg mb-10 max-w-2xl mx-auto">
              I'm actively seeking internships, full-time positions, and freelance projects
              in full-stack development, algorithms, and data science. Expected graduation: June 2027.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href="mailto:muhammad.kandil@icloud.com">
                <Button variant="primary">SEND EMAIL</Button>
              </a>
              <a href="https://linkedin.com/in/muhammad-kandil-" target="_blank" rel="noopener noreferrer">
                <Button variant="glass">CONNECT ON LINKEDIN</Button>
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Quote/Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-on-surface-variant italic">
            "Transforming ideas into elegant solutions, one line of code at a time."
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-primary-container" />
            <span className="font-mono text-sm tracking-widest text-primary-container font-bold uppercase">Muhammad Kandil</span>
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-primary-container" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

