'use client';

import { motion } from 'framer-motion';
import { AIRCRAFT_TYPES } from '@/lib/content';

export default function AircraftTypes() {
  return (
    <section id="aircraft-types" className="section-padding bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03),transparent_70%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glass-panel text-accent-sky text-sm font-semibold tracking-wide mb-6"
          >
            AIRCRAFT TYPES
          </motion.div>
          <h2 className="heading-lg mb-6">{AIRCRAFT_TYPES.title}</h2>
          <p className="text-xl text-gray-muted max-w-3xl mx-auto">
            {AIRCRAFT_TYPES.subtitle}
          </p>
        </motion.div>

        {/* Aircraft Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {AIRCRAFT_TYPES.categories.map((category, index) => (
            <AircraftCategory key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-panel-light p-6 border-l-4 border-accent-sky">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-sky/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-sky"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Compliance Requirements</h4>
                <p className="text-gray-light text-sm leading-relaxed">
                  {AIRCRAFT_TYPES.note}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-muted mb-6">
            Don't see your aircraft type? We handle a wide range of civilian aircraft.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
              }
            }}
            className="btn-secondary"
          >
            Ask About Your Aircraft
          </button>
        </motion.div>
      </div>
    </section>
  );
}

interface AircraftCategoryProps {
  category: typeof AIRCRAFT_TYPES.categories[0];
  index: number;
}

function AircraftCategory({ category, index }: AircraftCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="glass-panel-light p-6 h-full hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent-blue/30">
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-sky/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <CategoryIcon category={category.category} />
          </div>
          <h3 className="text-xl font-bold group-hover:text-accent-sky transition-colors">
            {category.category}
          </h3>
        </div>

        {/* Examples List */}
        <div className="space-y-2">
          {category.examples.map((example, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
              className="flex items-center gap-2 text-sm text-gray-light"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-sky/50" />
              <span>{example}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CategoryIcon({ category }: { category: string }) {
  // Agricultural
  if (category.includes('Agricultural')) {
    return (
      <svg className="w-6 h-6 text-accent-sky" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    );
  }
  // Single-Engine
  if (category.includes('Single')) {
    return (
      <svg className="w-6 h-6 text-accent-sky" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    );
  }
  // Twin-Engine
  if (category.includes('Twin')) {
    return (
      <svg className="w-6 h-6 text-accent-sky" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M7 16h.01" />
      </svg>
    );
  }
  // Helicopters
  return (
    <svg className="w-6 h-6 text-accent-sky" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}

