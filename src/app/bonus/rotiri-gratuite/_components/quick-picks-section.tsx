import Image from 'next/image';
import { ExternalLink, Trophy, Zap, Gamepad2, Sparkles, Crown, Coins } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';

const picks = [
  {
    label: 'Cele Mai Multe Rotiri',
    slug: 'fortunejack-casino',
    reason:
      '5.000 de rotiri gratuite cu rulaj de doar 10x — cea mai mare ofertă din clasament.',
    Icon: Sparkles,
    color: 'border-orange-200 bg-orange-50/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    label: 'Cel Mai Bun Rulaj',
    slug: 'vavada-casino',
    reason:
      'Rulaj doar 25x pe câștiguri din rotiri — cel mai mic din top 20.',
    Icon: Trophy,
    color: 'border-green-200 bg-green-50/30',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Rotiri Fără Depunere',
    slug: 'ggbet-casino',
    reason:
      '50 de rotiri gratuite fără depunere la înregistrare + 900 FS cu depunere.',
    Icon: Crown,
    color: 'border-purple-200 bg-purple-50/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Cele Mai Multe Jocuri',
    slug: 'cosmic-slot-casino',
    reason:
      'Peste 9.000 de titluri + 250 rotiri gratuite pe sloturi top.',
    Icon: Gamepad2,
    color: 'border-blue-200 bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Cel Mai Bun pentru Crypto',
    slug: 'rolletto-casino',
    reason:
      'BTC, ETH, USDT + 200 rotiri pe Book of Dead. Retrageri crypto instant.',
    Icon: Coins,
    color: 'border-amber-200 bg-amber-50/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    label: 'Cel Mai Rapid',
    slug: 'velobet-casino',
    reason:
      'Retrageri e-wallet și crypto în sub 24 ore. 70 rotiri + rulaj 30x.',
    Icon: Zap,
    color: 'border-cyan-200 bg-cyan-50/30',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export function QuickPicksSection() {
  const slugs = picks.map((p) => p.slug);
  const casinos = getCasinosBySlugs(slugs);
  const casinoMap = Object.fromEntries(casinos.map((c) => [c.slug, c]));

  return (
    <section id="recomandari" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recomand&#259;ri Rapide &#8212; Cel Mai Bun Casino Pentru Rotiri Gratuite
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Fiecare juc&#259;tor caut&#259; altceva. Alege direct &#238;n func&#539;ie de ce conteaz&#259; cel mai mult pentru tine:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((pick) => {
            const casino = casinoMap[pick.slug];
            if (!casino) return null;
            return (
              <div
                key={pick.slug}
                className={`rounded-2xl border-2 p-5 ${pick.color} transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${pick.iconBg}`}
                  >
                    <pick.Icon className={`h-4 w-4 ${pick.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold font-mono text-gray-900 uppercase tracking-wide">
                    {pick.label}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-gray-100 bg-white flex-shrink-0">
                    <Image
                      src={casino.logo}
                      alt={casino.name}
                      fill
                      className="object-contain p-1"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold font-mono text-gray-900">{casino.name}</p>
                    <p className="text-xs text-gray-500 font-mono">
                      Rulaj x{casino.wageringRequirement} &#183; {casino.license}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">{pick.reason}</p>

                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-xs font-bold font-mono transition-colors"
                >
                  Joac&#259; Acum <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
