import Image from 'next/image';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import TextReveal from '@/components/ui/TextReveal';
import ParallaxImage from '@/components/ui/ParallaxImage';

export const metadata: Metadata = {
  title: 'About Dr. Zarabi | Zarabi Dental Center',
  description: 'Meet Dr. Zarabi — a board-certified cosmetic dentist with 18+ years of transforming smiles in Beverly Hills.',
};

const CREDENTIALS = [
  { label: 'Education', value: 'M.D.S – Oral & Maxillofacial Surgery, UCLA School of Dentistry' },
  { label: 'Fellowship', value: 'American Academy of Cosmetic Dentistry (AACD)' },
  { label: 'Specialisation', value: 'Porcelain Veneers & Full-Arch Implant Reconstruction' },
  { label: 'Training', value: 'Invisalign Diamond Provider · Botox & Dermal Fillers Certified' },
];

const VALUES = [
  { title: 'Artistry First', desc: 'Every treatment is approached as a work of art. We obsess over symmetry, shade, and form to deliver results that look naturally beautiful.' },
  { title: 'No Pain Promise', desc: 'We believe exceptional dental care should be painless. Our clinic uses the latest comfort technology and a gentle, patient-centred technique.' },
  { title: 'Your Vision', desc: 'Using Digital Smile Design, you preview your result before any treatment begins. Your approval is our first step.' },
  { title: 'Lasting Results', desc: 'We use only the highest-grade materials from trusted labs. Our work is designed to look beautiful and last for decades.' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-12 pb-24 px-6 relative overflow-hidden">
        <span aria-hidden className="absolute right-0 top-0 font-display text-[clamp(200px,30vw,400px)] font-bold text-black/[0.03] select-none leading-none pointer-events-none">DR</span>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-charcoal-muted)]">About Us</span>
            </div>
          </FadeIn>
          <TextReveal
            text="Behind Every Perfect Smile"
            tag="h1"
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light leading-[1.0] text-[var(--color-charcoal)] max-w-3xl mb-8"
          />
        </div>
      </section>

      {/* ─── DOCTOR SECTION ─── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
            <FadeIn direction="right">
              <div className="relative sticky top-32">
                <ParallaxImage speed={0.06} className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src="/images/doctor-art.png"
                    alt="Dr. A. Zarabi – Cosmetic Dentist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center scale-110 hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </ParallaxImage>
                <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-6 shadow-xl">
                  <p className="font-display text-2xl font-semibold text-[var(--color-charcoal)]">Dr. A. Zarabi</p>
                  <p className="text-xs text-[var(--color-gold)] font-semibold uppercase tracking-widest mt-1">M.D.S · Lead Cosmetic Dentist</p>
                  <p className="text-xs text-[var(--color-charcoal-muted)] mt-2">18+ Years · Beverly Hills</p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-12">
              <div className="space-y-6">
                <TextReveal
                  text="A Surgeon's Precision. An Artist's Eye."
                  tag="h2"
                  className="font-display text-4xl md:text-5xl font-light leading-tight text-[var(--color-charcoal)]"
                />
                <FadeIn delay={0.3}>
                  <p className="text-[var(--color-charcoal-muted)] leading-relaxed">
                    Dr. Zarabi's journey into dentistry was driven by a singular belief: that a beautiful smile has the power to change not just how you look, but how you feel about yourself. After completing his Master of Dental Surgery at UCLA and a fellowship with the American Academy of Cosmetic Dentistry, he established the Zarabi Dental Center with a clear mission — to bring world-class cosmetic dentistry to patients who deserve the very best.
                  </p>
                </FadeIn>
                <FadeIn delay={0.35}>
                  <p className="text-[var(--color-charcoal-muted)] leading-relaxed">
                    Over 18 years, he has completed more than 500 full smile transformations, authored articles in leading dental journals, and trained under some of Europe's foremost prosthodontists. His attention to detail — from the precise shade of a veneer to the exact curve of a crown — is what makes every result feel not just beautiful, but uniquely personal.
                  </p>
                </FadeIn>
              </div>

              {/* Credentials */}
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm uppercase tracking-widest text-[var(--color-charcoal)] mb-6">Qualifications & Training</h3>
                  {CREDENTIALS.map((c) => (
                    <div key={c.label} className="grid grid-cols-[120px_1fr] gap-4 py-4 border-t border-black/5">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">{c.label}</span>
                      <span className="text-sm text-[var(--color-charcoal-muted)]">{c.value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.5}>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: '18+', l: 'Years' },
                    { n: '500+', l: 'Smiles' },
                    { n: '12', l: 'Awards' },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-5 rounded-2xl bg-[var(--color-stone-warm)]">
                      <p className="font-display text-3xl font-light text-[var(--color-charcoal)]">{s.n}</p>
                      <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal-muted)] font-semibold mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-32 px-6 bg-[var(--color-stone-warm)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[var(--color-gold)]" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-charcoal-muted)]">Our Philosophy</span>
              </div>
            </FadeIn>
            <TextReveal text="The Zarabi Standard" tag="h2" className="font-display text-4xl md:text-5xl font-light leading-tight text-[var(--color-charcoal)]" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-black/5 hover:border-[var(--color-gold)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                  <div className="w-8 h-px bg-[var(--color-gold)] mb-6 group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-2xl font-light text-[var(--color-charcoal)] mb-3">{v.title}</h3>
                  <p className="text-sm text-[var(--color-charcoal-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <TextReveal text="Ready to Experience the Zarabi Difference?" tag="h2" className="font-display text-4xl md:text-5xl font-light text-[var(--color-charcoal)] mb-6" />
            <p className="text-[var(--color-charcoal-muted)] mb-10 leading-relaxed">Book your complimentary consultation and take the first step toward your most confident smile.</p>
            <Link href="/contact#booking" className="px-10 py-5 bg-[var(--color-charcoal)] text-[var(--button-text-primary)] font-semibold rounded-full hover:bg-[var(--color-gold)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(202,138,4,0.3)] hover:-translate-y-1 text-sm">
              Book a Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
