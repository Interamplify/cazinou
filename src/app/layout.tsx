import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/shared/json-ld';
import { generateOrganizationJsonLd } from '@/lib/seo-helpers';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
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
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cazinou.io - Top Cazinouri Online Internaționale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Cazinouri Online Internaționale 2026',
    description: 'Clasament actualizat cu cele mai bune cazinouri online internaționale. Bonusuri și recenzii independente.',
    images: ['/images/og-image.jpg'],
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
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
