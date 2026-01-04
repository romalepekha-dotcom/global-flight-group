'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { CONTACT_FORM, CONTACT_EMAIL } from '@/lib/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aircraft: '',
    budget: '',
    delivery: '',
    message: '',
    _honeypot: '', // Spam protection
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // Validate required fields
    if (!formData.name || !formData.email) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Submit to Next.js API route (uses Resend or dev mode)
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          aircraft: formData.aircraft,
          budget: formData.budget,
          delivery: formData.delivery,
          message: formData.message,
          _honeypot: formData._honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          aircraft: '',
          budget: '',
          delivery: '',
          message: '',
          _honeypot: '',
        });
        
        // Show dev mode message if applicable
        if (data.dev_mode) {
          console.log('✅ Form submitted in development mode - check server console');
        }
      } else {
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing us directly at ' + CONTACT_EMAIL);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 glass-panel text-accent-sky text-sm font-semibold tracking-wide mb-6"
            >
              GET IN TOUCH
            </motion.div>
            
            <h2 className="heading-lg mb-6">{CONTACT_FORM.title}</h2>
            <p className="text-xl text-gray-light mb-8">
              {CONTACT_FORM.subtitle}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-sky/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-sky"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-muted mb-1">{CONTACT_FORM.directEmailLabel}</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-lg font-semibold text-accent-sky hover:text-accent-blue transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6">
                <h3 className="font-bold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-sky flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-sky flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed consultation call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-sky flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom quote for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-sky flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear next steps outlined</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel-light p-8 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.name} <span className="text-accent-sky">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.email} <span className="text-accent-sky">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Aircraft Interest */}
              <div>
                <label htmlFor="aircraft" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.aircraft}
                </label>
                <select
                  id="aircraft"
                  name="aircraft"
                  value={formData.aircraft}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                >
                  <option value="">Select aircraft type</option>
                  {CONTACT_FORM.aircraftOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.budget}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                >
                  <option value="">Select budget range</option>
                  {CONTACT_FORM.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Location */}
              <div>
                <label htmlFor="delivery" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.delivery}
                </label>
                <select
                  id="delivery"
                  name="delivery"
                  value={formData.delivery}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all"
                >
                  <option value="">Select delivery location</option>
                  {CONTACT_FORM.deliveryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  {CONTACT_FORM.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-white/10 rounded-lg focus:border-accent-sky focus:outline-none focus:ring-2 focus:ring-accent-sky/20 transition-all resize-none"
                  placeholder="Tell us more about your aircraft needs..."
                />
              </div>

              {/* Honeypot field for spam protection - hidden from users */}
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent-sky/20 border border-accent-sky/30 rounded-lg text-accent-sky text-sm"
                >
                  {CONTACT_FORM.successMessage}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : CONTACT_FORM.submitButton}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

