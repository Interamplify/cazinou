'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';

interface AnonymousCasino {
  name: string;
  slug: string;
  bonus: string;
  rating: number;
  features: string[];
  tags: string[];
  license: string;
}

// Colores vibrantes para las cards móviles
const colorSchemes = [
  { gradient: 'from-orange-500 via-red-500 to-pink-500', shadow: 'shadow-orange-500/30', cta: 'from-orange-600 to-red-600' },
  { gradient: 'from-violet-600 via-purple-500 to-fuchsia-500', shadow: 'shadow-violet-500/30', cta: 'from-violet-600 to-purple-600' },
  { gradient: 'from-cyan-500 via-blue-500 to-indigo-500', shadow: 'shadow-cyan-500/30', cta: 'from-cyan-600 to-blue-600' },
  { gradient: 'from-emerald-500 via-green-500 to-teal-500', shadow: 'shadow-emerald-500/30', cta: 'from-emerald-600 to-green-600' },
  { gradient: 'from-amber-500 via-yellow-500 to-orange-400', shadow: 'shadow-amber-500/30', cta: 'from-amber-600 to-yellow-600' },
  { gradient: 'from-rose-500 via-pink-500 to-red-400', shadow: 'shadow-rose-500/30', cta: 'from-rose-600 to-pink-600' },
  { gradient: 'from-blue-600 via-indigo-500 to-violet-500', shadow: 'shadow-blue-500/30', cta: 'from-blue-600 to-indigo-600' },
  { gradient: 'from-teal-500 via-cyan-500 to-sky-500', shadow: 'shadow-teal-500/30', cta: 'from-teal-600 to-cyan-600' },
];

interface PremiumAnonymousTableProps {
  casinos: AnonymousCasino[];
  title: string;
  subtitle?: string;
  initialCount?: number;
  showMoreEnabled?: boolean;
}

export function PremiumAnonymousTable({
  casinos,
  title,
  subtitle,
  initialCount = 10,
  showMoreEnabled = true,
}: PremiumAnonymousTableProps) {
  const [showAll, setShowAll] = React.useState(false);

  const visibleCasinos = showMoreEnabled && !showAll
    ? casinos.slice(0, initialCount)
    : casinos;
  const remainingCount = casinos.length - initialCount;
  const hasMore = showMoreEnabled && remainingCount > 0 && !showAll;

  return (
    <section id="top-cazinouri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Mobile Cards - COLORFUL */}
        <div className="lg:hidden space-y-4">
          {visibleCasinos.map((casino, index) => {
            const scheme = colorSchemes[index % colorSchemes.length];
            const rank = index + 1;

            return (
              <article
                key={casino.slug}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up opacity-0 shadow-xl ${scheme.shadow}`}
                style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
              >
                {/* Header colorido */}
                <div className={`px-4 py-4 bg-gradient-to-r ${scheme.gradient} relative overflow-hidden`}>
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
                        <span className="text-white text-sm font-black">{casino.rating}</span>
                      </div>
                    </div>

                    {/* Bonus destacado */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                      <p className="text-white font-black text-xl leading-tight drop-shadow-md">
                        {casino.bonus}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {casino.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/25 text-white border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-gray-100 bg-white flex-shrink-0 shadow-md">
                      <Image
                        src={`/images/casinos/${casino.slug}.webp`}
                        alt={casino.name}
                        fill
                        className="object-contain p-1.5"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] font-bold uppercase shadow-sm">
                          {casino.license}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold uppercase shadow-sm">
                          Fără KYC
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {casino.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`/go/${casino.slug}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`group/btn relative flex items-center justify-center gap-2 w-full rounded-xl py-4 text-base font-black text-white transition-all duration-300 overflow-hidden bg-gradient-to-r ${scheme.cta} shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    <span className="relative z-10 drop-shadow-sm">JOACĂ ACUM</span>
                    <ExternalLink className="h-5 w-5 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                  </a>
                </div>

                {/* Badge basado en rank */}
                {rank <= 3 && (
                  <div className="absolute top-3 -right-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[10px] font-black px-10 py-1 rotate-45 shadow-lg">
                    TOP #{rank}
                  </div>
                )}
              </article>
            );
          })}

          {/* Show More Button - Mobile */}
          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:animate-shimmer" />
                <span className="relative z-10">Vezi {remainingCount} Cazinouri Mai Mult</span>
                <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Desktop Table - PREMIUM */}
        <div className="hidden lg:block overflow-x-auto rounded-3xl border-0 shadow-2xl shadow-slate-200/50">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-12">#</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">Casino</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">Bonus de Bun Venit</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-24">Licență</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-20 text-center">Rating</th>
                <th className="px-4 py-4 w-32" />
              </tr>
            </thead>
            <tbody>
              {visibleCasinos.map((casino, i) => {
                const rank = i + 1;
                const isTop3 = rank <= 3;

                const rowColors = {
                  1: 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50',
                  2: 'bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50',
                  3: 'bg-gradient-to-r from-amber-50/50 via-orange-50/50 to-amber-50/50',
                };

                const rankColors = {
                  1: 'bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/30',
                  2: 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-500/30',
                  3: 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30',
                };

                const ctaColors = {
                  1: 'from-orange-500 to-red-500 shadow-orange-500/30 hover:shadow-orange-500/50',
                  2: 'from-violet-500 to-purple-500 shadow-violet-500/30 hover:shadow-violet-500/50',
                  3: 'from-amber-500 to-orange-500 shadow-amber-500/30 hover:shadow-amber-500/50',
                };

                return (
                  <tr
                    key={casino.slug}
                    className={`border-b border-gray-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:z-10 relative ${
                      isTop3 ? rowColors[rank as 1 | 2 | 3] : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="relative">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white ${
                          isTop3 ? rankColors[rank as 1 | 2 | 3] : 'bg-gray-300'
                        }`}>
                          {rank}
                        </span>
                        {rank === 1 && (
                          <span className="absolute -top-1 -right-1 text-[10px]">👑</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md ${
                          isTop3 ? 'ring-2 ring-orange-200' : 'border border-gray-100'
                        }`}>
                          <Image src={`/images/casinos/${casino.slug}.webp`} alt={`${casino.name} logo`} fill className="object-contain p-1.5" sizes="48px" />
                        </div>
                        <div>
                          <a
                            href={`/go/${casino.slug}`}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className={`text-sm font-bold hover:text-orange-600 transition-colors ${
                              rank === 1 ? 'text-orange-700' : 'text-gray-900'
                            }`}
                          >
                            {casino.name}
                          </a>
                          {isTop3 && (
                            <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                              rank === 1 ? 'bg-orange-100 text-orange-700' : rank === 2 ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              TOP #{rank}
                            </span>
                          )}
                          <p className="text-[11px] text-gray-500 mt-0.5">{casino.features[0]}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                        isTop3 ? 'bg-gradient-to-r from-orange-100 to-amber-100' : 'bg-gray-50'
                      }`}>
                        <span className={`text-sm font-bold ${isTop3 ? 'text-orange-700' : 'text-gray-700'}`}>
                          {casino.bonus}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-purple-100 text-purple-700">
                        {casino.license}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${
                        casino.rating >= 9 ? 'bg-gradient-to-r from-amber-100 to-yellow-100' : 'bg-gray-50'
                      }`}>
                        <Star className={`h-4 w-4 ${casino.rating >= 9 ? 'text-amber-500' : 'text-gray-400'} fill-current`} />
                        <span className={`text-sm font-black ${casino.rating >= 9 ? 'text-amber-700' : 'text-gray-700'}`}>
                          {casino.rating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <a
                        href={`/go/${casino.slug}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${
                          isTop3 ? ctaColors[rank as 1 | 2 | 3] : 'from-gray-700 to-gray-800 shadow-gray-500/20 hover:shadow-gray-500/40'
                        } shadow-lg`}
                      >
                        Joacă Acum
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Show More Button - Desktop */}
        {hasMore && (
          <div className="hidden lg:flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-bold text-base shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:animate-shimmer" />
              <span className="relative z-10">Vezi {remainingCount} Cazinouri Mai Mult</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          * Termenii și condițiile se aplică tuturor ofertelor. Doar 18+. Joacă responsabil.
        </p>
      </div>
    </section>
  );
}
