'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import TextReveal from '@/components/ui/TextReveal';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';

const CATEGORIES = ['All', 'Veneers', 'Implants', 'Whitening', 'Invisalign'];

const GALLERY_ITEMS = [
  { id: 1, cat: 'Veneers', before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80', after: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=800&q=80', label: 'Full Smile Veneer Set' },
  { id: 2, cat: 'Whitening', before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', label: 'In-Chair Whitening' },
  { id: 3, cat: 'Implants', before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80', after: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=800&q=80', label: 'Single Tooth Implant' },
  { id: 4, cat: 'Invisalign', before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80', label: 'Invisalign Alignment' },
  { id: 5, cat: 'Veneers', before: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=800&q=80', after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', label: 'Composite Veneers' },
  { id: 6, cat: 'Whitening', before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', after: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=800&q=80', label: 'Take-Home Whitening' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === activeCategory);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-12 pb-24 px-6 relative overflow-hidden">
        <span aria-hidden className="absolute right-0 top-0 font-display text-[clamp(200px,25vw,350px)] font-bold text-black/[0.03] select-none leading-none pointer-events-none">GLR</span>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-charcoal-muted)]">Transformations</span>
            </div>
          </FadeIn>
          <TextReveal text="Real Smiles, Real Stories" tag="h1" className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.0] text-[var(--color-charcoal)] max-w-3xl mb-8" />
          <FadeIn delay={0.4}>
            <p className="text-[var(--color-charcoal-muted)] max-w-xl leading-relaxed text-lg">
              Every before-and-after tells a story of renewed confidence. Explore our most recent smile transformations below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="pb-8 px-6 sticky top-24 z-30 bg-[var(--color-stone-light)]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[var(--color-charcoal)] text-[var(--button-text-primary)]'
                  : 'bg-[var(--color-stone-warm)] text-[var(--color-charcoal-muted)] hover:text-[var(--color-charcoal)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="py-12 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="rounded-2xl overflow-hidden border border-black/5 bg-white">
                    <BeforeAfterSlider
                      beforeSrc={item.before}
                      afterSrc={item.after}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] mb-1">{item.cat}</p>
                      <p className="font-display text-lg font-light text-[var(--color-charcoal)]">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
