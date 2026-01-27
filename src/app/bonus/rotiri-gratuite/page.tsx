import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { rotiriGratuiteFaqs, tocItems } from '@/data/rotiri-gratuite';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { CasinoListingSection } from './_components/casino-listing-section';
import { QuickPicksSection } from './_components/quick-picks-section';
import { ReviewsSection } from './_components/reviews-section';
import { SpinTypesSection } from './_components/spin-types-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { WageringSection } from './_components/wagering-section';
import { MethodologySection } from './_components/methodology-section';
import { ProsConsSection } from './_components/pros-cons-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { WithdrawalSection } from './_components/withdrawal-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Top 20 Cazinouri cu Rotiri Gratuite 2026',
  description:
    'Clasament cu cele mai bune oferte de rotiri gratuite de la cazinouri internaționale accesibile din România. De la 50 la 5.000 free spins — fiecare ofertă testată pe criterii de rulaj, furnizori și retragere.',
  alternates: {
    canonical: '/bonus/rotiri-gratuite/',
  },
  openGraph: {
    title: 'Top 20 Cazinouri cu Rotiri Gratuite 2026',
    description:
      'Clasament cu cele mai bune oferte de rotiri gratuite de la cazinouri internaționale accesibile din România. De la 50 la 5.000 free spins.',
    type: 'article',
  },
};

export default function RotiriGratuitePage() {
  const faqJsonLd = generateFAQJsonLd(rotiriGratuiteFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 20 Cazinouri cu Rotiri Gratuite 2026',
    url: `${SITE_URL}/bonus/rotiri-gratuite/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    datePublished: '2026-01-27T06:38:00.000Z',
    dateModified: '2026-01-27T06:38:00.000Z',
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
        name: 'Rotiri Gratuite',
        item: `${SITE_URL}/bonus/rotiri-gratuite/`,
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
      <QuickPicksSection />
      <ReviewsSection />
      <SpinTypesSection />
      <ActivationGuideSection />
      <WageringSection />
      <MethodologySection />
      <ProsConsSection />
      <PaymentMethodsSection />
      <WithdrawalSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
