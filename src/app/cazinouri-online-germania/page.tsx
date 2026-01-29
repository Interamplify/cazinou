import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { cazinouriGermaniaFaqs, tocItems } from '@/data/cazinouri-germania';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { CasinoListingSection } from './_components/casino-listing-section';
import { ComparisonTableSection } from './_components/comparison-table-section';
import { LegalSection } from './_components/legal-section';
import { VpnGuideSection } from './_components/vpn-guide-section';
import { NoDepositSection } from './_components/no-deposit-section';
import { VpnCasinoSection } from './_components/vpn-casino-section';
import { ProsConsSection } from './_components/pros-cons-section';
import { BonusTypesSection } from './_components/bonus-types-section';
import { GameTypesSection } from './_components/game-types-section';
import { PopularSlotsSection } from './_components/popular-slots-section';
import { RomanianGamesSection } from './_components/romanian-games-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { HowToChooseSection } from './_components/how-to-choose-section';
import { ReviewsSection } from './_components/reviews-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Cele Mai Bune Cazinouri Online Germania 2026 - Casino Cu VPN',
  description:
    'Descoperă cele mai bune cazinouri online Germania 2026. Lista casino cu VPN pentru jucători români din Germania. Bonusuri, jocuri și plăți crypto.',
  alternates: {
    canonical: '/cazinouri-online-germania/',
  },
  openGraph: {
    title: 'Cele Mai Bune Cazinouri Online Germania 2026',
    description:
      'Descoperă cele mai bune cazinouri online Germania 2026. Lista casino cu VPN pentru jucători români din Germania.',
    type: 'article',
  },
};

export default function CazinouriGermaniaPage() {
  const faqJsonLd = generateFAQJsonLd(cazinouriGermaniaFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cele Mai Bune Cazinouri Online Germania 2026',
    url: `${SITE_URL}/cazinouri-online-germania/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2025-10-10T00:00:00.000Z',
    dateModified: '2026-01-28T12:00:00.000Z',
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
        name: 'Cazinouri Online Germania',
        item: `${SITE_URL}/cazinouri-online-germania/`,
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
      <ReviewsSection />
      <ComparisonTableSection />
      <LegalSection />
      <VpnGuideSection />
      <NoDepositSection />
      <VpnCasinoSection />
      <ProsConsSection />
      <BonusTypesSection />
      <GameTypesSection />
      <PopularSlotsSection />
      <RomanianGamesSection />
      <PaymentMethodsSection />
      <HowToChooseSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
