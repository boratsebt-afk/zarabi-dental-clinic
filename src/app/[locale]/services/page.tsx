import { Link } from '@/i18n/routing';
import Image from 'next/image';
import type { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import TextReveal from '@/components/ui/TextReveal';

export const metadata: Metadata = {
  title: 'Our Services | Zarabi Dental Center',
  description: 'Explore our full range of premium dental services including veneers, implants, Invisalign, whitening, and complete smile makeovers.',
};

const SERVICES = [
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    subtitle: 'The Gold Standard in Cosmetic Dentistry',
    description: 'Ultra-thin, custom-crafted porcelain shells are bonded to the front surface of your teeth, instantly correcting chips, cracks, gaps, discolouration, and misalignment. The result is a flawlessly natural smile that radiates health and elegance.',
    features: ['Custom shade matching', 'Minimal tooth preparation', 'Stain-resistant porcelain', 'Results in 2 appointments', '15–20 year longevity'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85',
    icon: '✦',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    subtitle: 'Permanent Teeth That Last a Lifetime',
    description: 'Dental implants are the closest thing to natural teeth. A titanium post is placed in the jawbone, acting as a root, and topped with a lifelike crown. They preserve bone structure, restore full bite function, and look completely authentic.',
    features: ['3D-guided implant placement', 'Full bone integration', 'Single or full-arch restoration', 'No slipping or adhesives', 'Lifetime solution'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=85',
    icon: '◈',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    subtitle: 'A Brighter Smile in One Session',
    description: 'Our professional-grade whitening treatments use hospital-strength bleaching agents and advanced light-activation technology to deliver dramatic results — up to 12 shades whiter — in as little as 60 minutes.',
    features: ['In-chair or take-home options', 'Safe for sensitive teeth', 'Lasting 1–2 years', 'No sensitivity protocol', 'Shade guaranteed'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85',
    icon: '◇',
  },
  {
    id: 'invisalign',
    title: 'Invisalign®',
    subtitle: 'Straighter Teeth Without the Wires',
    description: 'Invisalign uses a series of custom, virtually invisible aligners to gently shift your teeth into their ideal position. Removable and comfortable, they fit seamlessly into your lifestyle with no dietary restrictions and minimal appointments.',
    features: ['Monthly digital check-ins', 'Fully removable for eating', 'Clinically proven results', 'No metal brackets or wires', 'Average 12–18 month treatment'],
    image: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=800&q=85',
    icon: '⬡',
  },
  {
    id: 'makeover',
    title: 'Smile Makeover',
    subtitle: 'A Completely Bespoke Experience',
    description: 'A Smile Makeover is a curated combination of treatments — designed entirely around your unique facial features, skin tone, and aesthetic goals. Dr. Zarabi personally crafts every plan to deliver a smile that feels authentically and beautifully yours.',
    features: ['Digital Smile Design preview', 'Custom treatment roadmap', 'Combination of treatments', 'Ongoing aftercare plan', 'Life-changing results'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85',
    icon: '✧',
  },
  {
    id: 'general',
    title: 'Preventive & General Care',
    subtitle: 'The Foundation of a Healthy Smile',
    description: 'A beautiful smile starts with a healthy one. Our preventive care services — including digital X-rays, professional cleanings, gum health assessments, and personalised oral hygiene plans — keep your smile in peak condition between cosmetic treatments.',
    features: ['Digital panoramic X-rays', 'Deep cleaning & polishing', 'Gum disease treatment', 'Tooth-coloured composite fillings', 'Night guard fabrication'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=85',
    icon: '◉',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-12 pb-24 px-6 relative overflow-hidden">
        <span aria-hidden className="absolute right-0 top-0 font-display text-[clamp(200px,30vw,400px)] font-bold text-black/[0.03] select-none leading-none pointer-events-none">SVC</span>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-charcoal-muted)]">What We Offer</span>
            </div>
          </FadeIn>
          <TextReveal
            text="Premium Dental Services"
            tag="h1"
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light leading-[1.0] text-[var(--color-charcoal)] max-w-2xl mb-8"
          />
          <FadeIn delay={0.4}>
            <p className="text-[var(--color-charcoal-muted)] max-w-xl leading-relaxed text-lg">
              Each treatment at Zarabi Dental Center is performed with a level of care and precision that's simply unmatched. Here's how we can help transform your smile.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <div id={service.id} className="grid lg:grid-cols-[1fr_1.8fr] gap-0 rounded-3xl overflow-hidden border border-black/5 bg-white/50 hover:border-[var(--color-gold)]/20 transition-all duration-500 group">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  <span className="absolute top-6 left-6 text-2xl text-white drop-shadow-lg">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-[var(--color-gold)]" />
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)]">{service.subtitle}</p>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--color-charcoal)] mb-4">{service.title}</h2>
                  <p className="text-[var(--color-charcoal-muted)] leading-relaxed mb-8">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-charcoal-muted)]">
                        <span className="w-4 h-4 rounded-full bg-[var(--color-stone-warm)] flex items-center justify-center text-[var(--color-gold)] text-xs flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact#booking"
                    className="self-start px-7 py-3.5 bg-[var(--color-charcoal)] text-[var(--button-text-primary)] text-sm font-semibold rounded-full hover:bg-[var(--color-gold)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(202,138,4,0.3)] hover:-translate-y-0.5"
                  >
                    Book This Treatment
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-[var(--color-stone-warm)]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">Not sure where to start?</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-charcoal)] mb-6">Let's Find Your Perfect Treatment</h2>
            <p className="text-[var(--color-charcoal-muted)] mb-10 leading-relaxed">A free, no-obligation consultation with Dr. Zarabi will help identify the right path to your ideal smile.</p>
            <Link href="/contact#booking" className="px-10 py-5 bg-[var(--color-charcoal)] text-[var(--button-text-primary)] font-semibold rounded-full hover:bg-[var(--color-gold)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(202,138,4,0.3)] hover:-translate-y-1 text-sm">
              Book Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
