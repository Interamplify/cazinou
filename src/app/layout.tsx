import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/shared/json-ld';
import { generateOrganizationJsonLd } from '@/lib/seo-helpers';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Top Cazinouri Online Internaționale 2026 — Ghid Complet & Bonusuri',
    template: `%s`,
  },
  description:
    'Top cazinouri online internaționale 2026: clasament actualizat, bonusuri de bun venit, rotiri gratuite, metode de plată crypto și recenzii independente. Ghid complet pentru jucători români.',
  keywords: [
    'cazinouri online internationale',
    'top cazinouri online 2026',
    'cazinouri straine',
    'bonus cazinou online',
    'rotiri gratuite',
    'casino fara verificare',
    'crypto casino',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Top Cazinouri Online Internaționale 2026 — Ghid Complet',
    description:
      'Clasament actualizat cu cele mai bune cazinouri online internaționale. Bonusuri, metode de plată, jocuri și recenzii independente.',
    siteName: SITE_NAME,
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={orgJsonLd} />
        <div className="min-h-screen pt-16 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
