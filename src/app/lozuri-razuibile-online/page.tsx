import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { lozuriRazuibileFaqs, tocItems } from '@/data/lozuri-razuibile';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { GamesShowcaseSection } from './_components/games-showcase-section';
import { QuickPicksSection } from './_components/quick-picks-section';
import { CasinoListingSection } from './_components/casino-listing-section';
import { WhatIsSection } from './_components/what-is-section';
import { GameTypesSection } from './_components/game-types-section';
import { FeaturedGamesSection } from './_components/featured-games-section';
import { HowToPlaySection } from './_components/how-to-play-section';
import { RtpVolatilitySection } from './_components/rtp-volatility-section';
import { ProsConsSection } from './_components/pros-cons-section';
import { TipsStrategySection } from './_components/tips-strategy-section';
import { PricingSection } from './_components/pricing-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Lozuri Răzuibile Online — Loz în Plic Gratis & Pe Bani Reali 2026',
  description:
    'Ghid complet cu cele mai bune jocuri de lozuri răzuibile online de la cazinouri internaționale accesibile din România. De la lozuri clasice la scratch match cu numere — fiecare joc testat pe criterii de RTP, volatilitate și premii maxime.',
  alternates: {
    canonical: '/lozuri-razuibile-online/',
  },
  openGraph: {
    title: 'Lozuri Răzuibile Online — Loz în Plic Gratis & Pe Bani Reali 2026',
    description:
      'Ghid complet cu cele mai bune jocuri de lozuri răzuibile online de la cazinouri internaționale accesibile din România. De la lozuri clasice la scratch match cu numere.',
    type: 'article',
  },
};

export default function LozuriRazuibilePage() {
  const faqJsonLd = generateFAQJsonLd(lozuriRazuibileFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lozuri Răzuibile Online — Loz în Plic Gratis & Pe Bani Reali 2026',
    url: `${SITE_URL}/lozuri-razuibile-online/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2026-01-28T15:00:00.000Z',
    dateModified: '2026-01-28T15:00:00.000Z',
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
        name: 'Lozuri Răzuibile Online',
        item: `${SITE_URL}/lozuri-razuibile-online/`,
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
      <GamesShowcaseSection />
      <QuickPicksSection />
      <CasinoListingSection />
      <WhatIsSection />
      <GameTypesSection />
      <FeaturedGamesSection />
      <HowToPlaySection />
      <RtpVolatilitySection />
      <ProsConsSection />
      <TipsStrategySection />
      <PricingSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
