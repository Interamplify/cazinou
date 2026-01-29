import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { gratowinBonusFaqs, tocItems } from '@/data/gratowin-bonus';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { WelcomeBonusSection } from './_components/welcome-bonus-section';
import { NoDepositBonusSection } from './_components/no-deposit-bonus-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { WageringSection } from './_components/wagering-section';
import { GamesSection } from './_components/games-section';
import { VIPProgramSection } from './_components/vip-program-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Bonus GratoWin Casino 2026 — 50 Rotiri Fără Depunere + Pachet Bun Venit',
  description:
    'Descoperă bonusul GratoWin Casino: 50 rotiri gratuite fără depunere la înregistrare + pachet de bun venit până la 15.000 RON. Cod promoțional și ghid complet.',
  alternates: {
    canonical: '/bonus/gratowin-casino/',
  },
  openGraph: {
    title: 'Bonus GratoWin Casino 2026 — 50 Rotiri Fără Depunere',
    description:
      'Descoperă bonusul GratoWin Casino: 50 rotiri gratuite fără depunere + pachet de bun venit până la 15.000 RON.',
    type: 'article',
  },
};

export default function GratowinBonusPage() {
  const faqJsonLd = generateFAQJsonLd(gratowinBonusFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bonus GratoWin Casino 2026',
    url: `${SITE_URL}/bonus/gratowin-casino/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2025-10-07T00:00:00.000Z',
    dateModified: '2026-01-29T12:00:00.000Z',
    inLanguage: 'ro',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Bonusuri', item: `${SITE_URL}/bonus/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'GratoWin Casino',
        item: `${SITE_URL}/bonus/gratowin-casino/`,
      },
    ],
  };

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'GratoWin Casino Bonus Bun Venit',
    description: '50 Rotiri Fără Depunere + Pachet până la 15.000 RON',
    url: `${SITE_URL}/bonus/gratowin-casino/`,
    priceCurrency: 'RON',
    price: '0',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-01-01',
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
      <VIPProgramSection />
      <PaymentMethodsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
