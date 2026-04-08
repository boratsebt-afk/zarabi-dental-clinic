import type { Metadata } from 'next';
import { Cormorant, Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import ThemeProvider from '@/components/providers/ThemeProvider';
import EtherealBackground from '@/components/ui/EtherealBackground';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zarabi Dental Center | Premium Cosmetic Dentistry',
  description: 'Experience transformative dentistry at Zarabi Dental Center. Where art meets dental science.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col relative transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)]">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll>
              <EtherealBackground />
              <Navbar />
              <main className="flex-grow pt-24 relative w-full overflow-hidden min-h-screen">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
