import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateFAQJsonLd } from '@/lib/seo-helpers';
import { JsonLd } from '@/components/shared/json-ld';
import { iWildBonusFaqs, tocItems } from '@/data/iwild-bonus';

import { HeroSection } from './_components/hero-section';
import { StickyToc } from './_components/sticky-toc';
import { WelcomeBonusSection } from './_components/welcome-bonus-section';
import { ActivationGuideSection } from './_components/activation-guide-section';
import { FreeSpinsSection } from './_components/free-spins-section';
import { WageringSection } from './_components/wagering-section';
import { GamesSection } from './_components/games-section';
import { TournamentsSection } from './_components/tournaments-section';
import { VIPProgramSection } from './_components/vip-program-section';
import { ShopSection } from './_components/shop-section';
import { PaymentMethodsSection } from './_components/payment-methods-section';
import { VideoSection } from './_components/video-section';
import { FaqSection } from './_components/faq-section';
import { ResponsibleGamingSection } from './_components/responsible-gaming-section';

export const metadata: Metadata = {
  title: 'Bonus iWild Casino 2026 — Ofertă Exclusivă de Bun Venit',
  description:
    'Descoperă bonusul de bun venit la iWild Casino. Program VIP pe 5 niveluri, magazin de recompense, turnee cu premii, 6000+ jocuri. Acceptă crypto.',
  alternates: {
    canonical: '/bonus/iwild-casino/',
  },
  openGraph: {
    title: 'Bonus iWild Casino 2026 — Ofertă Exclusivă de Bun Venit',
    description:
      'Descoperă bonusul de bun venit la iWild Casino. Program VIP cu 5 niveluri, magazin de recompense, 6000+ jocuri.',
    type: 'article',
  },
};

export default function IWildBonusPage() {
  const faqJsonLd = generateFAQJsonLd(iWildBonusFaqs);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bonus iWild Casino 2026 — Ofertă Exclusivă de Bun Venit',
    url: `${SITE_URL}/bonus/iwild-casino/`,
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
      name: 'iWild Casino',
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
        name: 'Bonus iWild Casino',
        item: `${SITE_URL}/bonus/iwild-casino/`,
      },
    ],
  };

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Bonus de Bun Venit iWild Casino',
    description: '550% până la 20.000 RON + 550 rotiri gratuite pe primele 4 depuneri',
    url: `${SITE_URL}/bonus/iwild-casino/`,
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
        name: 'iWild Casino',
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
      <VideoSection />
      <GamesSection />
      <TournamentsSection />
      <VIPProgramSection />
      <ShopSection />
      <PaymentMethodsSection />
      <FaqSection />
      <ResponsibleGamingSection />
    </article>
  );
}
