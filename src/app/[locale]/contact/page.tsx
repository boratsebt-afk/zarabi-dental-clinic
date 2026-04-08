'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import TextReveal from '@/components/ui/TextReveal';

const SERVICES_LIST = [
  'Porcelain Veneers',
  'Dental Implants',
  'Teeth Whitening',
  'Invisalign®',
  'Smile Makeover',
  'Preventive Care',
  'Other / General Enquiry',
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit delay (replace with real backend / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-display text-3xl font-light text-[var(--color-charcoal)] mb-3">Consultation Requested!</h3>
          <p className="text-[var(--color-charcoal-muted)]">We'll be in touch within 24 hours to confirm your appointment.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
              { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
            ].map((field) => (
              <div key={field.id} className={field.id === 'phone' ? 'md:col-span-2' : ''}>
                <label htmlFor={field.id} className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-charcoal)] mb-2">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[var(--color-stone-warm)] border border-transparent focus:border-[var(--color-gold)] focus:outline-none transition-colors text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-muted)]/50 text-sm"
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-charcoal)] mb-2">
              Interested In
            </label>
            <select
              id="service"
              required
              className="w-full px-5 py-4 rounded-xl bg-[var(--color-stone-warm)] border border-transparent focus:border-[var(--color-gold)] focus:outline-none transition-colors text-[var(--color-charcoal)] text-sm appearance-none cursor-pointer"
            >
              <option value="">Select a treatment…</option>
              {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-charcoal)] mb-2">
              Your Message (Optional)
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your smile goals…"
              className="w-full px-5 py-4 rounded-xl bg-[var(--color-stone-warm)] border border-transparent focus:border-[var(--color-gold)] focus:outline-none transition-colors text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-muted)]/50 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-[var(--color-charcoal)] text-[var(--button-text-primary)] font-semibold rounded-full hover:bg-[var(--color-gold)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(202,138,4,0.3)] disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
          >
            {loading ? 'Sending…' : 'Request Free Consultation →'}
          </button>
          <p className="text-xs text-center text-[var(--color-charcoal-muted)]">No commitment required. We respond within 24 hours.</p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-12 pb-16 px-6 relative overflow-hidden">
        <span aria-hidden className="absolute right-0 top-0 font-display text-[clamp(200px,25vw,350px)] font-bold text-black/[0.03] select-none leading-none pointer-events-none">CTT</span>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-charcoal-muted)]">Get In Touch</span>
            </div>
          </FadeIn>
          <TextReveal text="Let's Start Your Smile Journey" tag="h1" className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.0] text-[var(--color-charcoal)] max-w-3xl mb-8" />
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section id="booking" className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <FadeIn direction="right" className="space-y-6 sticky top-32">
            <div className="rounded-3xl bg-[var(--color-stone-warm)] p-8 md:p-10 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-4">Location</p>
                <p className="font-display text-xl font-light text-[var(--color-charcoal)]">123 Medical Boulevard</p>
                <p className="text-[var(--color-charcoal-muted)]">Beverly Hills, CA 90210</p>
              </div>
              <div className="h-px bg-black/5" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-2">Phone</p>
                  <a href="tel:+12345678900" className="font-medium text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors text-sm">+1 (234) 567-890</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-2">Email</p>
                  <a href="mailto:hello@zarabidental.com" className="font-medium text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors text-sm break-all">hello@zarabidental.com</a>
                </div>
              </div>
              <div className="h-px bg-black/5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-4">Opening Hours</p>
                <div className="space-y-2 text-sm">
                  {[
                    { d: 'Monday – Friday', h: '9:00 AM – 6:00 PM' },
                    { d: 'Saturday', h: '9:00 AM – 2:00 PM' },
                    { d: 'Sunday', h: 'Closed' },
                  ].map((row) => (
                    <div key={row.d} className="flex justify-between text-[var(--color-charcoal-muted)]">
                      <span>{row.d}</span>
                      <span className="font-medium text-[var(--color-charcoal)]">{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-3xl overflow-hidden aspect-video border border-black/5">
              <iframe
                title="Zarabi Dental Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5!2d-118.4003563!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzI1LjAiTiAxMTjCsDI0JzAxLjMiVw!5e0!3m2!1sen!2sus!4v1617000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
              <h2 className="font-display text-3xl font-light text-[var(--color-charcoal)] mb-2">Book a Free Consultation</h2>
              <p className="text-sm text-[var(--color-charcoal-muted)] mb-8">Fill in your details below and we'll confirm a time that works for you.</p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
