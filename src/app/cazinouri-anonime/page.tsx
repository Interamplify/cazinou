import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { cazinouriAnonymeFaqs, tocItems } from '@/data/cazinouri-anonime';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { CasinoListingSection } from './_components/casino-listing-section';
import { WhatIsSection } from './_components/what-is-section';
import { PrivacyLevelsSection } from './_components/privacy-levels-section';
import { BettingSitesSection } from './_components/betting-sites-section';
import { TipsSection } from './_components/tips-section';
import { GamesSection } from './_components/games-section';
import { HowToChooseSection } from './_components/how-to-choose-section';
import { CryptoSection } from './_components/crypto-section';
import { ProsConsSection } from './_components/pros-cons-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Cazinouri Anonime Fără Verificare KYC 2026 — Ghid Complet',
  description:
    'Descoperă cele mai bune cazinouri anonime fără verificare KYC. Lista cazinouri crypto cu VPN, bonusuri fără depunere și ghid complet pentru joc anonim.',
  alternates: {
    canonical: '/cazinouri-anonime/',
  },
  openGraph: {
    title: 'Cazinouri Anonime Fără Verificare KYC 2026',
    description:
      'Descoperă cele mai bune cazinouri anonime fără verificare KYC. Lista cazinouri crypto cu VPN și bonusuri.',
    type: 'article',
  },
};

export default function CazinouriAnonymePage() {
  const faqJsonLd = generateFAQJsonLd(cazinouriAnonymeFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cazinouri Anonime Fără Verificare KYC 2026',
    url: `${SITE_URL}/cazinouri-anonime/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2025-10-10T00:00:00.000Z',
    dateModified: '2026-01-29T12:00:00.000Z',
    inLanguage: 'ro',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cazinouri Anonime',
        item: `${SITE_URL}/cazinouri-anonime/`,
      },
    ],
  };

  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <HeroSection />
      <StickyToc items={tocItems} />
      <CasinoListingSection />
      <WhatIsSection />
      <PrivacyLevelsSection />
      <BettingSitesSection />
      <TipsSection />
      <GamesSection />
      <HowToChooseSection />
      <CryptoSection />
      <ProsConsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
