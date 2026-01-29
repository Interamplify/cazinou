import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { ggbetBonusFaqs, tocItems } from '@/data/ggbet-bonus';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { WelcomeBonusSection } from './_components/welcome-bonus-section';
import { NoDepositBonusSection } from './_components/no-deposit-bonus-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { WageringSection } from './_components/wagering-section';
import { GamesSection } from './_components/games-section';
import { EsportsSection } from './_components/esports-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

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
    type: 'article',
  },
};

export default function GGBetBonusPage() {
  const faqJsonLd = generateFAQJsonLd(ggbetBonusFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bonus GGBet Casino 2026 — 12.000 RON + 900 Rotiri + 50 Fără Depunere',
    url: `${SITE_URL}/bonus/ggbet-casino/`,
    author: {
      '@type': 'Person',
      name: 'Andrei Gavrila',
      url: `${SITE_URL}/autori/andrei-gavrila/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cazinou.io',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: '2026-01-29T12:00:00.000Z',
    dateModified: '2026-01-29T12:00:00.000Z',
    inLanguage: 'ro',
    about: {
      '@type': 'Thing',
      name: 'GGBet Casino',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bonusuri',
        item: `${SITE_URL}/bonus/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bonus GGBet Casino',
        item: `${SITE_URL}/bonus/ggbet-casino/`,
      },
    ],
  };

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Bonus de Bun Venit GGBet Casino',
    description: 'Până la 12.000 RON + 900 rotiri gratuite pe 7 depuneri + 50 rotiri fără depunere',
    url: `${SITE_URL}/bonus/ggbet-casino/`,
    price: '0',
    priceCurrency: 'RON',
    availability: 'https://schema.org/InStock',
    eligibleRegion: {
      '@type': 'Country',
      name: 'RO',
    },
    itemOffered: {
      '@type': 'Service',
      name: 'Casino Bonus',
      provider: {
        '@type': 'Organization',
        name: 'GGBet Casino',
      },
    },
  };

  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={offerJsonLd} />

      <HeroSection />
      <StickyToc items={tocItems} />
      <WelcomeBonusSection />
      <NoDepositBonusSection />
      <ActivationGuideSection />
      <WageringSection />
      <GamesSection />
      <EsportsSection />
      <PaymentMethodsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
