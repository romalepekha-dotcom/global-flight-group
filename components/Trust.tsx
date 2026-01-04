&apos;use client&apos;;

import { motion } from &apos;framer-motion&apos;;
import { TRUST_POINTS } from &apos;@/lib/content&apos;;

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

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
            TRUST & COMPLIANCE
          </motion.div>
          <h2 className="heading-lg mb-6">Built on Transparency & Security</h2>
          <p className="text-xl text-gray-muted max-w-3xl mx-auto">
            Every transaction is protected by third-party escrow, comprehensive verification, and complete regulatory compliance. Your investment is secure at every step.
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {TRUST_POINTS.map((point, index) => (
            <TrustCard key={point.id} point={point} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-panel-light p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Process?</h3>
            <p className="text-gray-light mb-6">
              We&apos;re happy to walk you through every detail of how we protect your transaction and ensure compliance.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById(&apos;contact&apos;);
                if (element) {
                  const offset = 80;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: &apos;smooth&apos; });
                }
              }}
              className="btn-primary"
            >
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TrustCardProps {
  point: typeof TRUST_POINTS[0];
  index: number;
}

function TrustCard({ point, index }: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: &apos;-50px&apos; }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative h-full glass-panel p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent-sky/30">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/0 to-accent-blue/0 group-hover:from-accent-sky/5 group-hover:to-accent-blue/5 rounded-xl transition-all duration-300" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-sky/20 to-accent-blue/20 flex items-center justify-center text-3xl mb-4 group-hover:shadow-lg group-hover:shadow-accent-sky/20 transition-all"
          >
            {point.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent-sky transition-colors">
            {point.title}
          </h3>

          {/* Description */}
          <p className="text-gray-light text-sm leading-relaxed">
            {point.description}
          </p>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-sky/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}


