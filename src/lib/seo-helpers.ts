import { SITE_NAME, SITE_URL } from './constants';
import { siteConfig } from '@/data/site-config';

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EntertainmentBusiness', 'Organization'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/logos/cazinou-logo.webp`,
      contentUrl: `${SITE_URL}/images/logos/cazinou-logo.webp`,
      caption: SITE_NAME,
    },
    description: siteConfig.description,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calea Victoriei 155, tronson 5, bloc D1',
      addressLocality: 'București',
      addressRegion: 'Sector 1',
      addressCountry: 'RO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      contactType: 'editorial',
      availableLanguage: 'ro',
    },
    areaServed: 'RO',
    knowsLanguage: 'ro',
  };
}

export function generateArticleJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/#article`,
    headline: 'Top Cazinouri Online Internaționale 2026 — Ghid Complet & Bonusuri',
    description:
      'Clasament actualizat cu cele mai bune cazinouri online internaționale. Bonusuri, metode de plată, jocuri și recenzii independente pentru jucători români.',
    url: SITE_URL,
    datePublished: '2025-01-15T08:00:00+02:00',
    dateModified: '2026-01-27T10:00:00+02:00',
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logos/cazinou-logo.webp`,
      },
    },
    inLanguage: 'ro',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL,
    },
  };
}

export function generateBreadcrumbJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Top Cazinouri Online Internaționale 2026',
        item: SITE_URL,
      },
    ],
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateItemListJsonLd(
  items: { name: string; url: string; image?: string; description?: string }[],
  listName: string,
  listUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.image && { image: item.image }),
      ...(item.description && { description: item.description }),
    })),
  };
}
