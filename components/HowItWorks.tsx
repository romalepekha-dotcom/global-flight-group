'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { PROCESS_STEPS } from '@/lib/content';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="section-padding bg-navy-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.05),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glass-panel text-accent-sky text-sm font-semibold tracking-wide mb-6"
          >
            THE PROCESS
          </motion.div>
          <h2 className="heading-lg mb-6">How It Works</h2>
          <p className="text-xl text-gray-muted max-w-3xl mx-auto">
            A transparent, step-by-step process from search to delivery. Every phase is documented, verified, and designed to protect your investment.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-sky to-accent-blue origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isExpanded={expandedStep === step.id}
                onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: typeof PROCESS_STEPS[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProcessStep({ step, index, isExpanded, onToggle }: ProcessStepProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-start ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-20 md:pl-0`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-panel-light p-6 md:p-8 cursor-pointer group"
          onClick={onToggle}
        >
          {/* Step Number & Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-sky to-accent-blue flex items-center justify-center font-heading font-bold text-lg ${
              isEven ? 'md:order-last' : ''
            }`}>
              {step.id}
            </div>
            <h3 className="heading-sm text-left flex-1">{step.title}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-accent-sky"
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
          </div>

          {/* Description */}
          <p className={`text-gray-light leading-relaxed mb-4 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
            {step.description}
          </p>

          {/* Expandable Details */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`pt-4 border-t border-white/10 mt-4 space-y-2 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
              {step.details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <svg
                    className="w-5 h-5 text-accent-sky flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-muted">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expand Hint */}
          {!isExpanded && (
            <div className={`text-xs text-accent-sky/70 mt-2 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
              Click to see details
            </div>
          )}
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 top-0 transform md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-accent-sky/30 rounded-full blur-xl animate-glow" />
          
          {/* Node Circle */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent-sky to-accent-blue border-4 border-navy-dark flex items-center justify-center shadow-lg">
            <StepIcon stepId={step.id} />
          </div>
        </motion.div>
      </div>

      {/* Spacer for mobile */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

function StepIcon({ stepId }: { stepId: number }) {
  const icons = [
    // Search
    <svg key={1} className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>,
    // Verification
    <svg key={2} className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Escrow
    <svg key={3} className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    // Export Docs
    <svg key={4} className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    // Delivery
    <svg key={5} className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M5 13l4 4L19 7" />
    </svg>,
  ];

  return icons[stepId - 1] || icons[0];
}

