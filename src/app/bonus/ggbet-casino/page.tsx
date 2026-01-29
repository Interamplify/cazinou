import type { Metadata } from 'next';
import { ggbetBonusFaqs, tocItems } from '@/data/ggbet-bonus';
import {
  HeroSection,
  WelcomeBonusSection,
  NoDepositBonusSection,
  ActivationGuideSection,
  WageringSection,
  GamesSection,
  EsportsSection,
  PaymentMethodsSection,
  FaqSection,
  ResponsibleGamingSection,
} from './_components';

export const metadata: Metadata = {
  title: 'Bonus GGBet Casino 2026 — 12.000 RON + 900 Rotiri + 50 Fără Depunere',
  description:
    'Descoperă bonusul GGBet Casino: 50 rotiri fără depunere la înregistrare și până la 12.000 RON + 900 rotiri pe 7 depuneri. Lider în pariuri eSports cu 8.000+ jocuri.',
  alternates: {
    canonical: '/bonus/ggbet-casino/',
  },
  openGraph: {
    title: 'Bonus GGBet Casino 2026 — 12.000 RON + 950 Rotiri',
    description:
      'GGBet Casino oferă 50 rotiri fără depunere + până la 12.000 RON și 900 rotiri pe primele 7 depuneri. Lider în eSports.',
    url: '/bonus/ggbet-casino/',
    type: 'article',
  },
};

export default function GGBetBonusPage() {
  // JSON-LD schemas
  const articleSchema = {
    '@type': 'Article',
    headline: 'Bonus GGBet Casino 2026',
    description:
      'GGBet Casino oferă 50 rotiri fără depunere la înregistrare și un pachet generos de până la 12.000 RON + 900 rotiri pe 7 depuneri.',
    datePublished: '2025-01-01',
    dateModified: '2026-01-29',
    author: {
      '@type': 'Organization',
      name: 'Cazinou.ro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cazinou.ro',
    },
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: 'https://cazinou.ro/' },
      { '@type': 'ListItem', position: 2, name: 'Bonus', item: 'https://cazinou.ro/bonus/' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'GGBet Casino Bonus',
        item: 'https://cazinou.ro/bonus/ggbet-casino/',
      },
    ],
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: ggbetBonusFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const offerSchema = {
    '@type': 'Offer',
    name: 'GGBet Casino Bonus de Bun Venit',
    description: 'Până la 12.000 RON + 900 rotiri gratuite + 50 rotiri fără depunere',
    priceCurrency: 'RON',
    price: '0',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'GGBet Casino',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [articleSchema, breadcrumbSchema, faqSchema, offerSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Table of contents - floating on desktop */}
      <nav className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
        <div className="rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm p-4 shadow-lg">
          <p className="text-xs font-mono font-bold text-gray-500 uppercase mb-3">Conținut</p>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-mono text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <HeroSection />
        <WelcomeBonusSection />
        <NoDepositBonusSection />
        <ActivationGuideSection />
        <WageringSection />
        <GamesSection />
        <EsportsSection />
        <PaymentMethodsSection />
        <FaqSection />
        <ResponsibleGamingSection />
      </main>
    </>
  );
}
