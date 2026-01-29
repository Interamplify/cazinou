import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { bonusHubFaqs, tocItems } from '@/data/bonus-hub';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from '@/components/shared/sticky-toc';
import { BonusCategoriesSection } from './_components/bonus-categories-section';
import { CasinoBonusesSection } from './_components/casino-bonuses-section';
import { BonusTypesSection } from './_components/bonus-types-section';
import { WageringSection } from './_components/wagering-section';
import { ChoosingGuideSection } from './_components/choosing-guide-section';
import { MethodologySection } from './_components/methodology-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Cele Mai Bune Bonusuri la Cazinouri Internaționale 2026',
  description:
    'Ghid complet cu cele mai bune bonusuri la cazinouri internaționale accesibile din România: bonus fără depunere, rotiri gratuite, condiții de rulaj și metode de retragere.',
  alternates: {
    canonical: '/bonus/',
  },
  openGraph: {
    title: 'Cele Mai Bune Bonusuri la Cazinouri Internaționale 2026',
    description:
      'Ghid complet cu cele mai bune bonusuri la cazinouri internaționale accesibile din România.',
    type: 'article',
  },
};

export default function BonusPage() {
  const faqJsonLd = generateFAQJsonLd(bonusHubFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cele Mai Bune Bonusuri la Cazinouri Internaționale 2026',
    url: `${SITE_URL}/bonus/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2026-01-27T06:38:00.000Z',
    dateModified: '2026-01-28T16:00:00.000Z',
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
        name: 'Bonusuri',
        item: `${SITE_URL}/bonus/`,
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
      <BonusCategoriesSection />
      <CasinoBonusesSection />
      <BonusTypesSection />
      <WageringSection />
      <ChoosingGuideSection />
      <MethodologySection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
