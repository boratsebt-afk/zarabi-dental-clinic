'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    treatment: 'Porcelain Veneers',
    text: "I never thought I would feel this confident about my smile. Dr. Zarabi's artistry is unmatched — every detail was perfected. My veneers look completely natural and I get compliments every single day.",
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'James T.',
    treatment: 'Dental Implants',
    text: "After losing a tooth in an accident, I was self-conscious for years. Dr. Zarabi gave me a permanent solution that looks and feels exactly like my natural teeth. The whole experience was painless and the outcome is incredible.",
    rating: 5,
    avatar: 'J',
  },
  {
    name: 'Layla K.',
    treatment: 'Smile Makeover',
    text: "The full smile makeover changed my life. Dr. Zarabi took the time to understand exactly what I wanted and delivered something even beyond my expectations. The clinic itself feels like a luxury spa.",
    rating: 5,
    avatar: 'L',
  },
  {
    name: 'Michael R.',
    treatment: 'Invisalign®',
    text: "Straight teeth at 38 seemed like a dream. With Zarabi's Invisalign program, it took less than a year. The team was supportive at every step and the results are simply stunning.",
    rating: 5,
    avatar: 'M',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
      {/* Navigation */}
      <div className="space-y-3">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setActive(i)}
            className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
              active === i
                ? 'bg-white border-[var(--color-gold)]/30 shadow-md'
                : 'bg-transparent border-transparent hover:bg-white/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${active === i ? 'bg-[var(--color-gold)] text-white' : 'bg-[var(--color-stone-warm)] text-[var(--color-charcoal-muted)]'}`}>
                {t.avatar}
              </div>
              <div>
                <p className={`font-semibold text-sm transition-colors ${active === i ? 'text-[var(--color-charcoal)]' : 'text-[var(--color-charcoal-muted)]'}`}>{t.name}</p>
                <p className="text-xs text-[var(--color-charcoal-muted)]">{t.treatment}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Active testimonial */}
      <FadeIn>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-black/5"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Large open-quote */}
            <p className="font-display text-[5rem] leading-none text-[var(--color-gold)]/20 -mt-4 mb-2 select-none">&ldquo;</p>

            <p className="font-display text-2xl md:text-3xl font-light leading-snug text-[var(--color-charcoal)] mb-10">
              {TESTIMONIALS[active].text}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-black/5">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-bold text-lg">
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <p className="font-semibold text-[var(--color-charcoal)]">{TESTIMONIALS[active].name}</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-gold)]">{TESTIMONIALS[active].treatment}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </FadeIn>
    </div>
  );
}
