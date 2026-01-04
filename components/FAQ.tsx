'use client';

/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/content';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(96,165,250,0.05),transparent_50%)]" />

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
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <h2 className="heading-lg mb-6">Got Questions? We've Got Answers</h2>
          <p className="text-xl text-gray-muted max-w-3xl mx-auto">
            Everything you need to know about our aircraft acquisition and export process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggleFAQ(item.id)}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-panel-light p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-light mb-6">
              We're here to help. Schedule a call and we'll walk you through the entire process.
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

interface FAQItemProps {
  item: typeof FAQ_ITEMS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div
        className={`glass-panel transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 border-accent-sky/30'
            : 'hover:bg-white/5 border-white/10'
        }`}
      >
        {/* Question Button */}
        <button
          onClick={onToggle}
          className="w-full text-left p-6 flex items-start justify-between gap-4"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold pr-4 group-hover:text-accent-sky transition-colors">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-6 h-6 text-accent-sky"
          >
            <svg
              className="w-full h-full"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}


