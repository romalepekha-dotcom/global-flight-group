'use client';

import { motion } from 'framer-motion';
import { FOOTER, COMPANY_NAME } from '@/lib/content';

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4 group cursor-pointer" onClick={scrollToTop}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-sky/20 blur-xl rounded-full group-hover:bg-accent-sky/30 transition-all" />
                    <svg
                      className="w-10 h-10 relative z-10"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 5L35 15L20 25L5 15L20 5Z"
                        stroke="#38BDF8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M20 25V35"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 20L20 25L28 20"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-heading text-xl font-bold tracking-tight">
                    {COMPANY_NAME}
                  </span>
                </div>
                <p className="text-sm text-gray-muted leading-relaxed">
                  {FOOTER.tagline}
                </p>
              </motion.div>
            </div>

            {/* Link Columns */}
            {FOOTER.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-gray-muted hover:text-accent-sky transition-colors inline-block"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <div className="glass-panel p-4 mb-8">
              <p className="text-xs text-gray-muted leading-relaxed">
                <strong className="text-gray-light">Legal Notice:</strong> {FOOTER.legal}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 px-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-muted"
            >
              {FOOTER.copyright}
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-accent-sky hover:text-accent-blue transition-colors group"
            >
              <span>Back to Top</span>
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

