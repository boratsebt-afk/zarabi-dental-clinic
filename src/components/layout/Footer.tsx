import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[var(--color-stone-warm)] pt-24 pb-12 mt-auto border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="text-[var(--color-gold)]">
                <Image 
                  src="/images/449455925_977747057468189_1434526537659370180_n.jpg"
                  alt="Zarabi Dental Center Logo"
                  width={28}
                  height={28}
                  className="rounded-sm object-contain logo-blend"
                />
              </div>
              <span className="font-display font-semibold text-xl tracking-[0.15em] text-[var(--color-charcoal)] leading-none">
                ZARABI
              </span>
            </Link>
            <p className="text-sm text-[var(--color-charcoal-muted)] leading-relaxed max-w-sm">
              {t('Description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[var(--color-charcoal)] mb-6">{t('QuickLinks')}</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm text-[var(--color-charcoal-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[var(--color-charcoal)] mb-6">{t('Services')}</h4>
            <ul className="space-y-3">
              {[
                { name: 'Dental Implants', id: 'implants' },
                { name: 'Porcelain Veneers', id: 'veneers' },
                { name: 'Teeth Whitening', id: 'whitening' },
                { name: 'Invisalign', id: 'invisalign' },
                { name: 'Smile Makeover', id: 'makeover' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={`/services#${item.id}`} 
                    className="text-sm text-[var(--color-charcoal-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[var(--color-charcoal)] mb-6">{t('Contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--color-charcoal-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-[var(--color-gold)] shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>123 Medical Boulevard,<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--color-charcoal-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-[var(--color-gold)] shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-charcoal-muted)]">
            &copy; {new Date().getFullYear()} {t('Rights')}
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" aria-label={social} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[var(--color-charcoal-muted)] hover:bg-[var(--color-gold)] hover:text-white hover:border-transparent transition-all duration-300">
                {social === 'Instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>}
                {social === 'Facebook' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                {social === 'Twitter' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
