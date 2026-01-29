import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { cazinouriNoiFaqs, tocItems } from '@/data/cazinouri-noi';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { CasinoListingSection } from './_components/casino-listing-section';
import { RecommendationsSection } from './_components/recommendations-section';
import { NoDepositSection } from './_components/no-deposit-section';
import { InnovationsSection } from './_components/innovations-section';
import { AdvantagesSection } from './_components/advantages-section';
import { RisksSection } from './_components/risks-section';
import { LegalAspectsSection } from './_components/legal-aspects-section';
import { ExpertQuoteSection } from './_components/expert-quote-section';
import { EvaluationStepsSection } from './_components/evaluation-steps-section';
import { MethodologySection } from './_components/methodology-section';
import { ReviewsSection } from './_components/reviews-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Cazinouri Noi Internaționale 2026 — Top 20 Platforme Testate',
  description:
    'Descoperă cele mai bune cazinouri online internaționale noi din 2026. Ghid complet cu 20 platforme testate, bonusuri generoase, plăți crypto și licențe verificate. Accesibil din România.',
  alternates: {
    canonical: '/cazinouri-noi/',
  },
  openGraph: {
    title: 'Cazinouri Noi Internaționale 2026 — Top 20 Platforme Testate',
    description:
      'Descoperă cele mai bune cazinouri online internaționale noi din 2026. 20 platforme testate cu bonusuri generoase și licențe verificate.',
    type: 'article',
  },
};

export default function CazinouriNoiPage() {
  const faqJsonLd = generateFAQJsonLd(cazinouriNoiFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cazinouri Noi Internaționale 2026 — Ghid Complet',
    url: `${SITE_URL}/cazinouri-noi/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2026-01-28T10:00:00.000Z',
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
        name: 'Cazinouri Noi',
        item: `${SITE_URL}/cazinouri-noi/`,
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
      <RecommendationsSection />
      <NoDepositSection />
      <InnovationsSection />
      <AdvantagesSection />
      <RisksSection />
      <LegalAspectsSection />
      <ExpertQuoteSection />
      <EvaluationStepsSection />
      <MethodologySection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
