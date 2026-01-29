import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { megapariBonusFaqs, tocItems } from '@/data/megapari-bonus';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { WelcomeBonusSection } from './_components/welcome-bonus-section';
import { NoDepositBonusSection } from './_components/no-deposit-bonus-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { WageringSection } from './_components/wagering-section';
import { RecurringBonusesSection } from './_components/recurring-bonuses-section';
import { GamesSection } from './_components/games-section';
import { VIPProgramSection } from './_components/vip-program-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Bonus Megapari Casino 2026 — Ofertă Exclusivă de Bun Venit',
  description:
    'Descoperă bonusul de bun venit la Megapari Casino. 100 rotiri fără depunere cu cod ROTIRI, program VIP pe 8 niveluri, 20.000+ jocuri. Acceptă crypto.',
  alternates: {
    canonical: '/bonus/megapari-casino/',
  },
  openGraph: {
    title: 'Bonus Megapari Casino 2026 — Ofertă Exclusivă de Bun Venit',
    description:
      'Descoperă bonusul de bun venit la Megapari Casino. 100 rotiri fără depunere, program VIP cu 8 niveluri, 20.000+ jocuri.',
    type: 'article',
  },
};

export default function MegapariBonusPage() {
  const faqJsonLd = generateFAQJsonLd(megapariBonusFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bonus Megapari Casino 2026 — Ofertă Exclusivă de Bun Venit',
    url: `${SITE_URL}/bonus/megapari-casino/`,
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
      name: 'Megapari Casino',
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
        name: 'Bonus Megapari Casino',
        item: `${SITE_URL}/bonus/megapari-casino/`,
      },
    ],
  };

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Bonus de Bun Venit Megapari Casino',
    description: 'Până la 7.465 RON + 150 rotiri gratuite pe primele 2 depuneri + 100 rotiri fără depunere',
    url: `${SITE_URL}/bonus/megapari-casino/`,
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
        name: 'Megapari Casino',
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
      <RecurringBonusesSection />
      <GamesSection />
      <VIPProgramSection />
      <PaymentMethodsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
