import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { getTopCasinos } from '@/lib/data-helpers';
import { RATING_MAX } from '@/lib/constants';

export function CasinoListingSection() {
  const casinos = getTopCasinos(20);

  return (
    <section id="top-cazinouri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Tabel comparativ — Top 20 cazinouri online internaționale
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            Clasament actualizat lunar · Ianuarie 2026
          </p>
        </div>

        {/* Mobile cards (< lg) - COLORFUL */}
        <div className="lg:hidden space-y-4">
          {casinos.map((casino, i) => {
            const rank = i + 1;

            // Colores vibrantes rotativos para cada card
            const colorSchemes = [
              { gradient: 'from-orange-500 via-red-500 to-pink-500', shadow: 'shadow-orange-500/30', cta: 'from-orange-600 to-red-600', ctaHover: 'from-red-600 to-pink-600', badge: 'TOP #1' },
              { gradient: 'from-violet-600 via-purple-500 to-fuchsia-500', shadow: 'shadow-violet-500/30', cta: 'from-violet-600 to-purple-600', ctaHover: 'from-purple-600 to-fuchsia-600', badge: 'HOT' },
              { gradient: 'from-cyan-500 via-blue-500 to-indigo-500', shadow: 'shadow-cyan-500/30', cta: 'from-cyan-600 to-blue-600', ctaHover: 'from-blue-600 to-indigo-600', badge: 'TOP 3' },
              { gradient: 'from-emerald-500 via-green-500 to-teal-500', shadow: 'shadow-emerald-500/30', cta: 'from-emerald-600 to-green-600', ctaHover: 'from-green-600 to-teal-600', badge: null },
              { gradient: 'from-amber-500 via-yellow-500 to-orange-400', shadow: 'shadow-amber-500/30', cta: 'from-amber-600 to-yellow-600', ctaHover: 'from-yellow-600 to-orange-500', badge: null },
              { gradient: 'from-rose-500 via-pink-500 to-red-400', shadow: 'shadow-rose-500/30', cta: 'from-rose-600 to-pink-600', ctaHover: 'from-pink-600 to-red-500', badge: null },
              { gradient: 'from-blue-600 via-indigo-500 to-violet-500', shadow: 'shadow-blue-500/30', cta: 'from-blue-600 to-indigo-600', ctaHover: 'from-indigo-600 to-violet-600', badge: null },
              { gradient: 'from-teal-500 via-cyan-500 to-sky-500', shadow: 'shadow-teal-500/30', cta: 'from-teal-600 to-cyan-600', ctaHover: 'from-cyan-600 to-sky-600', badge: null },
              { gradient: 'from-fuchsia-500 via-pink-500 to-rose-400', shadow: 'shadow-fuchsia-500/30', cta: 'from-fuchsia-600 to-pink-600', ctaHover: 'from-pink-600 to-rose-500', badge: null },
              { gradient: 'from-lime-500 via-green-500 to-emerald-500', shadow: 'shadow-lime-500/30', cta: 'from-lime-600 to-green-600', ctaHover: 'from-green-600 to-emerald-600', badge: null },
            ];

            const scheme = colorSchemes[i % colorSchemes.length];

            return (
              <div
                key={casino.slug}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up opacity-0 shadow-xl ${scheme.shadow}`}
                style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
              >
                {/* Bonus banner - SUPER COLORIDO */}
                <div className={`px-4 py-4 bg-gradient-to-r ${scheme.gradient} relative overflow-hidden`}>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 animate-shimmer" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm text-sm font-black text-white border border-white/30">
                          {rank}
                        </span>
                        <span className="text-white font-bold text-sm drop-shadow-sm">{casino.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
                        <Star className="h-3.5 w-3.5 text-yellow-300 fill-yellow-300 drop-shadow-sm" />
                        <span className="text-white text-sm font-black">{casino.overallRating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* BONUS DESTACADÍSIMO */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                      <p className="text-white font-black text-xl leading-tight drop-shadow-md">
                        {casino.bonusTitle}
                      </p>
                      {casino.freeSpins > 0 && (
                        <p className="text-white/95 text-sm font-bold mt-1 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
                          + {casino.freeSpins.toLocaleString('ro-RO')} Rotiri Gratuite
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-gray-100 bg-white flex-shrink-0 shadow-md">
                      <Image src={casino.logo} alt={casino.name} fill className="object-contain p-1.5" sizes="56px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] font-bold uppercase shadow-sm">
                          Rulaj x{casino.wageringRequirement}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold uppercase shadow-sm">
                          {casino.license === 'N/A' ? 'Fără KYC' : casino.license}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 font-medium">{casino.features[0]}</p>
                    </div>
                  </div>

                  {/* CTA MEGA PROMINENTE */}
                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`group/btn relative flex items-center justify-center gap-2 w-full rounded-xl py-4 text-base font-black text-white transition-all duration-300 overflow-hidden bg-gradient-to-r ${scheme.cta} shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    <span className="relative z-10 drop-shadow-sm">REVENDICĂ BONUSUL</span>
                    <ExternalLink className="h-5 w-5 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                    <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity bg-gradient-to-r ${scheme.ctaHover}`} />
                  </a>
                </div>

                {/* Badge especial */}
                {scheme.badge && (
                  <div className={`absolute top-3 -right-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[10px] font-black px-10 py-1 rotate-45 shadow-lg`}>
                    {scheme.badge}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop HTML table (>= lg) — semantic for SEO */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse bg-white text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-10">#</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">Casino</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">Bonus</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">FS</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">Rulaj</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-28">Jocuri</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-20">Licență</th>
                <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">Scor</th>
                <th className="px-3 py-3 w-24" />
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino, i) => {
                const rank = i + 1;
                const isTop3 = rank <= 3;
                return (
                  <tr
                    key={casino.slug}
                    className={`border-b border-gray-100 transition-colors hover:bg-orange-50/40 ${
                      isTop3 ? 'bg-orange-50/20' : ''
                    }`}
                  >
                    <td className="px-3 py-3">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white ${rank === 1 ? 'bg-orange-500' : rank <= 3 ? 'bg-orange-400' : 'bg-gray-400'}`}>
                        {rank}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
                          <Image src={casino.logo} alt={`${casino.name} logo`} fill className="object-contain p-1" sizes="36px" />
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
                        {casino.bonusPercentage}% până la {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="text-[12px] font-mono text-gray-700">{casino.freeSpins.toLocaleString('ro-RO')}</span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="text-[12px] font-mono text-gray-700">x{casino.wageringRequirement}</span>
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[12px] text-gray-600">{casino.features[0]}</span>
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 uppercase tracking-wide whitespace-nowrap">
                        {casino.license === 'N/A' ? 'N/A' : casino.license}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-[13px] font-bold font-mono text-gray-900">{casino.overallRating.toFixed(1)}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="group/btn relative inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-3.5 py-2 text-[11px] font-bold text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden"
                      >
                        <span className="relative z-10">Vizitează</span>
                        <ExternalLink className="h-3 w-3 relative z-10 transition-transform group-hover/btn:translate-x-0.5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          * Termenii și condițiile se aplică tuturor ofertelor de bonus. Doar pentru persoane peste 18 ani. Joacă cu responsabilitate.
        </p>
      </div>
    </section>
  );
}
