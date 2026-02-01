'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'muhammad.kandil@icloud.com',
      href: 'mailto:muhammad.kandil@icloud.com',
      icon: '📧',
      color: 'neon-cyan',
    },
    {
      id: 'phone',
      label: 'PHONE',
      value: '+20 1500023034',
      href: 'tel:+201500023034',
      icon: '📱',
      color: 'neon-magenta',
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'muhammad-kandil-',
      href: 'https://linkedin.com/in/muhammad-kandil-',
      icon: '💼',
      color: 'neon-yellow',
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'Giza, Egypt',
      href: null,
      icon: '📍',
      color: 'neon-cyan',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-deep-charcoal/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mono-label text-neon-cyan mb-4">[GET IN TOUCH]</div>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
            Let's Connect<span className="text-neon-magenta">.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations.
            <br />
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: method.href ? -2 : 0 }}
              className={`${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.id === 'linkedin' ? '_blank' : undefined}
                  rel={method.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className={`block h-full border-2 p-8 transition-all duration-300 hover-reveal ${
                    hoveredContact === method.id
                      ? method.color === 'neon-cyan'
                        ? 'border-neon-cyan'
                        : method.color === 'neon-magenta'
                        ? 'border-neon-magenta'
                        : 'border-neon-yellow'
                      : 'border-white/20'
                  }`}
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <div className={`mono-label mb-2 ${
                        hoveredContact === method.id
                          ? `text-${method.color}`
                          : 'text-gray-500'
                      }`}>
                        [{method.label}]
                      </div>
                    </div>
                    <p className="text-xl font-mono break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  className="block h-full border-2 border-white/20 p-8 transition-all duration-300"
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <div className="mono-label text-gray-500 mb-2">
                        [{method.label}]
                      </div>
                    </div>
                    <p className="text-xl font-mono">{method.value}</p>
                  </div>
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
          className="text-center border-2 border-neon-magenta/30 hover:border-neon-magenta transition-all duration-300 p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Currently Available for{' '}
            <span className="text-neon-cyan">Opportunities</span>
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm actively seeking internships, full-time positions, and freelance projects
            in full-stack development, algorithms, and data science. Expected graduation: June 2027.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:muhammad.kandil@icloud.com"
              className="magnetic-btn px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-darker-charcoal transition-all duration-300 mono-label"
            >
              [SEND EMAIL]
            </a>
            <a
              href="https://linkedin.com/in/muhammad-kandil-"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-4 border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-darker-charcoal transition-all duration-300 mono-label"
            >
              [CONNECT ON LINKEDIN]
            </a>
          </div>
        </motion.div>

        {/* Quote/Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-gray-500 italic">
            "Transforming ideas into elegant solutions, one line of code at a time."
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-neon-cyan" />
            <span className="mono-label text-neon-cyan">MUHAMMAD KANDIL</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-neon-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
