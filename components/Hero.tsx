'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HERO } from '@/lib/content';
import DeliveryEligibilityMap from '@/components/DeliveryEligibilityMap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
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
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-navy"
      id="hero"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-sky/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 px-6 py-16 md:py-20"
      >
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 glass-panel text-accent-sky text-sm font-semibold tracking-wide"
              >
                PROFESSIONAL AIRCRAFT ACQUISITION & EXPORT
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {HERO.headline}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-light leading-relaxed max-w-2xl">
                {HERO.subheadline}
              </p>
            </div>

            <div className="space-y-3">
              {HERO.trustBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-light"
                >
                  <svg
                    className="w-5 h-5 text-accent-sky flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{bullet}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="btn-secondary"
              >
                How It Works
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[450px] md:h-[550px]"
          >
            <DeliveryEligibilityMap />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
