import Image from 'next/image';
import { ExternalLink, Trophy, Zap, Gamepad2, Sparkles, Coins, Gift } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';

const picks = [
  {
    label: 'Cel Mai Bun RTP',
    slug: 'iwild-casino',
    reason: 'Lozuri cu RTP de până la 97% de la Evoplay, BGaming și Hacksaw Gaming.',
    Icon: Trophy,
    color: 'border-green-200 bg-green-50/30',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Cele Mai Multe Jocuri',
    slug: 'velobet-casino',
    reason: 'Peste 60 de lozuri răzuibile cu teme variate — numere, animale, sporturi, money.',
    Icon: Gamepad2,
    color: 'border-blue-200 bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Cel Mai Bun pentru Crypto',
    slug: 'fairspin-casino',
    reason: 'Casino crypto cu lozuri răzuibile, retrageri instant BTC/ETH/USDT.',
    Icon: Coins,
    color: 'border-amber-200 bg-amber-50/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    label: 'Premii Mari',
    slug: 'fortunejack-casino',
    reason: 'Scratch games cu premii maxime de până la 500x și jackpot-uri progresive.',
    Icon: Sparkles,
    color: 'border-orange-200 bg-orange-50/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    label: 'Mode Demo Gratuit',
    slug: 'ggbet-casino',
    reason: 'Testează toate lozurile în mod gratuit înainte de a juca pe bani reali.',
    Icon: Gift,
    color: 'border-purple-200 bg-purple-50/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Cel Mai Rapid',
    slug: 'velobet-casino',
    reason: 'Retrageri e-wallet și crypto în sub 24 ore. Lozuri cu rezultate instant.',
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
    <section id="quick-picks" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recomandări Rapide — Cel Mai Bun Casino Pentru Lozuri Răzuibile
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Fiecare jucător caută altceva. Alege direct în funcție de ce contează cel mai mult pentru tine:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((pick) => {
            const casino = casinoMap[pick.slug];
            if (!casino) return null;
            return (
              <div
                key={`${pick.slug}-${pick.label}`}
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
                      Rulaj x{casino.wageringRequirement} · {casino.license}
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
                  Joacă Acum <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
