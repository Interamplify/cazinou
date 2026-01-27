import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/shared/json-ld';
import { CalendarDays, Gift, RotateCcw, ArrowRight, Shield, TrendingUp, Award } from 'lucide-react';

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

const bonusPages = [
  {
    title: 'Bonus Fără Depunere',
    href: '/bonus/fara-depunere/',
    desc: 'Top 10 cazinouri cu bonus fără depunere — primești bani gratis la înregistrare, fără a depune.',
    stats: ['10 cazinouri', 'Bonusuri 5€–10€', 'Rulaj de la 30x'],
    Icon: Gift,
    color: 'border-green-200 bg-green-50/30 hover:border-green-300',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    badge: 'Fără Depunere',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Rotiri Gratuite',
    href: '/bonus/rotiri-gratuite/',
    desc: 'Top 20 cazinouri cu rotiri gratuite — de la 50 la 5.000 free spins pe sloturi populare.',
    stats: ['20 cazinouri', 'Până la 5.000 FS', 'Rulaj de la 10x'],
    Icon: RotateCcw,
    color: 'border-orange-200 bg-orange-50/30 hover:border-orange-300',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badge: 'Free Spins',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
];

const highlights = [
  {
    Icon: Shield,
    label: 'Licențe verificate',
    desc: 'MGA, Curaçao, Gibraltar — fiecare cazinou verificat individual.',
  },
  {
    Icon: TrendingUp,
    label: 'Actualizat lunar',
    desc: 'Clasamente și oferte revizuite în fiecare lună de echipa noastră.',
  },
  {
    Icon: Award,
    label: 'Criterii riguroase',
    desc: '8 criterii de evaluare: licență, plăți, jocuri, termeni bonus, UX și mai mult.',
  },
];

export default function BonusPage() {
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
        name: 'Bonusuri',
        item: `${SITE_URL}/bonus/`,
      },
    ],
  };

  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white">
        <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-1.5 text-sm font-mono text-gray-400">
              <li>
                <a href="/" className="hover:text-orange-600 transition-colors">
                  Acasă
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-semibold">Bonusuri</li>
            </ol>
          </nav>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <CalendarDays className="h-4 w-4 text-orange-400" />
            <span>Actualizat: Ianuarie 2026</span>
          </div>

          <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1]">
            Cele Mai Bune{' '}
            <span className="text-orange-500">Bonusuri</span> la Cazinouri
            Internaționale
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-8">
            Ghid complet cu bonusurile disponibile la cazinouri internaționale accesibile din România.
            De la bonusuri fără depunere la pachete de rotiri gratuite — fiecare ofertă analizată pe
            criterii de rulaj, plafon de retragere și termeni.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm"
              >
                <h.Icon className="h-3.5 w-3.5 text-orange-500" />
                <span className="text-xs font-mono font-semibold text-gray-700">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus category cards */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
              Tipuri de Bonusuri Disponibile
            </h2>
            <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
              Alege categoria care te interesează pentru clasamente detaliate, recenzii și ghiduri de
              activare.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
            {bonusPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`group rounded-2xl border-2 p-6 lg:p-8 transition-all hover:shadow-lg ${page.color}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${page.iconBg}`}
                  >
                    <page.Icon className={`h-5 w-5 ${page.iconColor}`} />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${page.badgeColor}`}
                    >
                      {page.badge}
                    </span>
                    <h3 className="text-xl font-bold font-mono text-gray-900 mt-1">
                      {page.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-5">{page.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {page.stats.map((stat) => (
                    <span
                      key={stat}
                      className="text-xs font-mono font-semibold text-gray-600 bg-white/80 border border-gray-200 rounded-full px-2.5 py-1"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-bold font-mono text-orange-600 group-hover:gap-2.5 transition-all">
                  Vezi Clasamentul <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we evaluate */}
      <section className="py-14 lg:py-20 bg-gray-50/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
              Cum Evaluăm Bonusurile
            </h2>
            <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
              Fiecare ofertă trece printr-o analiză pe criterii obiective înainte de a fi inclusă în
              clasament.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                    <h.Icon className="h-4 w-4 text-orange-600" />
                  </div>
                  <h3 className="font-mono font-bold text-gray-900">{h.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible gaming */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-orange-400 bg-orange-50/50 p-6 lg:p-8 font-mono">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl lg:text-2xl">
                  18+
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-lg lg:text-xl font-bold text-gray-900">
                  Joacă responsabil – Doar pentru persoane peste 18 ani
                </p>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Jocurile de noroc sunt destinate exclusiv persoanelor care au împlinit 18 ani. Scopul
                  lor este distracția, nu câștigul sigur. Joacă mereu cu măsură și stabilește-ți din
                  timp limitele de timp și bani.
                </p>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Dacă simți că pierzi controlul sau jocul nu mai este o plăcere, cere ajutor. Poți
                  apela gratuit la linia telefonică Joc Responsabil –{' '}
                  <a href="tel:0800800099" className="font-semibold text-orange-600 hover:underline">
                    0800 800 099
                  </a>{' '}
                  sau vizita{' '}
                  <a
                    href="https://www.jocresponsabil.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-600 hover:underline"
                  >
                    www.jocresponsabil.ro
                  </a>{' '}
                  pentru consiliere și sprijin.
                </p>
                <p className="text-sm lg:text-base font-bold text-gray-900 pt-2">
                  Joacă informat. Joacă responsabil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
