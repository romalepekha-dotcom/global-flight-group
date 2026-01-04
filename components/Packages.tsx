'use client';

import { motion } from 'framer-motion';
import { PACKAGES } from '@/lib/content';

export default function Packages() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.05),transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl" />

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
            SERVICE PACKAGES
          </motion.div>
          <h2 className="heading-lg mb-6">Choose Your Service Level</h2>
          <p className="text-xl text-gray-muted max-w-3xl mx-auto">
            From verification-only to full concierge service. Every package includes escrow protection and complete documentation.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={pkg.id} package={pkg} index={index} onCTA={scrollToContact} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-muted text-sm"
        >
          All packages are customized based on aircraft type, location, and specific requirements.
          <br />
          Contact us for a detailed quote.
        </motion.div>
      </div>
    </section>
  );
}

interface PackageCardProps {
  package: typeof PACKAGES[0];
  index: number;
  onCTA: () => void;
}

function PackageCard({ package: pkg, index, onCTA }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative group ${pkg.recommended ? 'lg:-mt-4' : ''}`}
    >
      {/* Recommended Badge */}
      {pkg.recommended && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="px-4 py-1 bg-gradient-to-r from-accent-sky to-accent-blue rounded-full text-xs font-bold tracking-wide shadow-lg">
            RECOMMENDED
          </div>
        </motion.div>
      )}

      {/* Card */}
      <div
        className={`relative h-full glass-panel-light p-8 transition-all duration-300 ${
          pkg.recommended
            ? 'border-2 border-accent-sky/50 shadow-xl shadow-accent-sky/10'
            : 'border border-white/10 hover:border-accent-blue/30'
        }`}
      >
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/0 to-accent-blue/0 group-hover:from-accent-sky/5 group-hover:to-accent-blue/5 rounded-2xl transition-all duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-6">
            <h3 className="heading-sm mb-2">{pkg.name}</h3>
            <p className="text-accent-sky text-sm font-medium mb-4">{pkg.tagline}</p>
            <div className="text-3xl font-bold text-gradient">{pkg.price}</div>
          </div>

          {/* Description */}
          <p className="text-gray-light leading-relaxed mb-6">
            {pkg.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8 flex-grow">
            <div className="text-sm font-semibold text-gray-muted uppercase tracking-wide mb-4">
              What You Get
            </div>
            {pkg.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 + i * 0.03 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-sky/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-accent-sky"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-light leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCTA}
            className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
              pkg.recommended
                ? 'bg-gradient-to-r from-accent-sky to-accent-blue hover:shadow-lg hover:shadow-accent-sky/50'
                : 'glass-panel hover:bg-white/10'
            }`}
          >
            {pkg.cta}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

