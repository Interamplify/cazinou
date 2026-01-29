import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { RATING_MAX } from '@/lib/constants';
import { cazinouriNoiSlugs } from '@/data/cazinouri-noi';
import { ColorfulMobileList } from '@/components/casino/colorful-mobile-card';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(cazinouriNoiSlugs);

  return (
    <section id="top-cazinouri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Tabel comparativ — Top 20 Cazinouri Noi Internaționale
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            Am analizat cele mai noi platforme de cazino internaționale lansate între 2023-2026 și am selectat
            cele mai sigure și atractive opțiuni accesibile din România.
          </p>
        </div>

        {/* ── Mobile Cards - COLORFUL ── */}
        <ColorfulMobileList casinos={casinos} />

        {/* ── Desktop Table ── */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse bg-white text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-10">
                  #
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">
                  Casino
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">
                  Bonus
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">
                  FS
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">
                  Rulaj
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-20">
                  Licență
                </th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">
                  Scor
                </th>
                <th className="px-3 py-3 w-24" />
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino, i) => {
                const rank = i + 1;
                return (
                  <tr
                    key={casino.slug}
                    className={`border-b border-gray-100 transition-colors hover:bg-orange-50/40 ${
                      rank <= 3 ? 'bg-orange-50/20' : ''
                    }`}
                  >
                    <td className="px-3 py-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                          rank === 1
                            ? 'bg-orange-500'
                            : rank <= 3
                              ? 'bg-orange-400'
                              : 'bg-gray-400'
                        }`}
                      >
                        {rank}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
                          <Image
                            src={casino.logo}
                            alt={`${casino.name} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="36px"
                          />
                        </div>
                        <a
                          href={casino.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="text-[13px] font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap"
                        >
                          {casino.name}
                        </a>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[13px] font-semibold text-orange-600 font-mono leading-tight whitespace-nowrap">
                        {casino.bonusPercentage}% până la{' '}
                        {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="text-[12px] font-mono text-gray-700">
                        {casino.freeSpins.toLocaleString('ro-RO')}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="text-[12px] font-mono text-gray-700">
                        x{casino.wageringRequirement}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 uppercase tracking-wide whitespace-nowrap">
                        {casino.license}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-[13px] font-bold font-mono text-gray-900">
                          {casino.overallRating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center justify-center gap-1 rounded-xl bg-orange-500 px-3.5 py-2 text-[11px] font-bold font-mono text-white hover:bg-orange-600 transition-colors shadow-sm whitespace-nowrap"
                      >
                        Vizitează <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          * Termenii și condițiile se aplică tuturor ofertelor. Doar 18+. Joacă responsabil.
        </p>
      </div>
    </section>
  );
}
