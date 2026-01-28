import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { billionaireSpinBonusFaqs, tocItems } from '@/data/billionairespin-bonus';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { WelcomeBonusSection } from './_components/welcome-bonus-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { FreeSpinsSection } from './_components/free-spins-section';
import { WageringSection } from './_components/wagering-section';
import { SportsBonusSection } from './_components/sports-bonus-section';
import { CashbackSection } from './_components/cashback-section';
import { VIPProgramSection } from './_components/vip-program-section';
import { TournamentsSection } from './_components/tournaments-section';
import { OtherPromotionsSection } from './_components/other-promotions-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Bonus Billionairespin Casino 2026 — 255% până la 2.250 RON + 250 Rotiri',
  description:
    'Bonus Billionairespin Casino: 255% până la 2.250 RON + 250 rotiri gratuite pe 3 depuneri. Cashback 25%, program VIP cu 4 niveluri, turnee cu 10.000€ premii. Rulaj 35x, cod bonus RELDAY.',
  alternates: {
    canonical: '/bonus/billionairespin-casino/',
  },
  openGraph: {
    title: 'Bonus Billionairespin Casino 2026 — 255% până la 2.250 RON + 250 Rotiri',
    description:
      'Bonus Billionairespin: 255% până la 2.250 RON + 250 rotiri gratuite. Cashback 25%, VIP cu 4 niveluri, turnee cu premii mari.',
    type: 'article',
  },
};

export default function BillionaireSpinBonusPage() {
  const faqJsonLd = generateFAQJsonLd(billionaireSpinBonusFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bonus Billionairespin Casino 2026 — 255% până la 2.250 RON + 250 Rotiri Gratuite',
    url: `${SITE_URL}/bonus/billionairespin-casino/`,
    author: {
      '@type': 'Person',
      name: 'Cristian Radulescu',
      url: `${SITE_URL}/autori/cristian-radulescu/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cazinou.io',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: '2026-01-28T16:00:00.000Z',
    dateModified: '2026-01-28T16:00:00.000Z',
    inLanguage: 'ro',
    about: {
      '@type': 'Thing',
      name: 'Billionairespin Casino',
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
        name: 'Bonus Billionairespin Casino',
        item: `${SITE_URL}/bonus/billionairespin-casino/`,
      },
    ],
  };

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Bonus de Bun Venit Billionairespin Casino',
    description: '255% până la 2.250 RON + 250 rotiri gratuite pe primele 3 depuneri',
    url: `${SITE_URL}/bonus/billionairespin-casino/`,
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
        name: 'Billionairespin Casino',
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
      <ActivationGuideSection />
      <FreeSpinsSection />
      <WageringSection />
      <SportsBonusSection />
      <CashbackSection />
      <VIPProgramSection />
      <TournamentsSection />
      <OtherPromotionsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
