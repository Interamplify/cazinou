'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { RATING_MAX } from '@/lib/constants';
import type { Casino } from '@/types/casino';
import { ColorfulMobileList } from '@/components/casino/colorful-mobile-card';

interface TopListProps {
  casinos: Casino[];
  trackingSource?: string;
  initialCount?: number;
  showMoreEnabled?: boolean;
}

export function TopList({ casinos, trackingSource, initialCount = 10, showMoreEnabled = true }: TopListProps) {
  const [showAll, setShowAll] = React.useState(false);

  const visibleCasinos = showMoreEnabled && !showAll
    ? casinos.slice(0, initialCount)
    : casinos;
  const remainingCount = casinos.length - initialCount;
  const hasMore = showMoreEnabled && remainingCount > 0 && !showAll;

  return (
    <>
      {/* Mobile cards - COLORFUL */}
      <ColorfulMobileList casinos={casinos} initialCount={initialCount} showMoreEnabled={showMoreEnabled} />

      {/* Desktop HTML table (>= lg) — PREMIUM DESIGN */}
      <div className="hidden lg:block overflow-x-auto rounded-3xl border-0 shadow-2xl shadow-slate-200/50">
        <table className="w-full border-collapse text-left">
          {/* Header con gradiente oscuro */}
          <thead>
            <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-12">#</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">Casino</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">Bonus de Bun Venit</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-20 text-center">Free Spins</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-16 text-center">Rulaj</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-28">Jocuri</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-24">Licență</th>
              <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-20 text-center">Rating</th>
              <th className="px-4 py-4 w-32" />
            </tr>
          </thead>
          <tbody>
            {visibleCasinos.map((casino, i) => {
              const rank = i + 1;
              const isTop3 = rank <= 3;

              // Colores para el top 3 (sin bordes)
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
                        <Image src={casino.logo} alt={`${casino.name} logo`} fill className="object-contain p-1.5" sizes="48px" />
                      </div>
                      <div>
                        <a
                          href={casino.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          data-tracking={trackingSource}
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
                        {casino.bonusPercentage}% până la {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-bold ${
                      casino.freeSpins > 100 ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {casino.freeSpins > 0 ? casino.freeSpins.toLocaleString('ro-RO') : '—'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-bold ${
                      casino.wageringRequirement <= 35 ? 'bg-green-100 text-green-700' : casino.wageringRequirement <= 45 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                      x{casino.wageringRequirement}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-[12px] text-gray-600">{casino.features[0]}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      casino.license === 'N/A' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {casino.license === 'N/A' ? 'No KYC' : casino.license}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${
                      casino.overallRating >= 9 ? 'bg-gradient-to-r from-amber-100 to-yellow-100' : 'bg-gray-50'
                    }`}>
                      <Star className={`h-4 w-4 ${casino.overallRating >= 9 ? 'text-amber-500' : 'text-gray-400'} fill-current`} />
                      <span className={`text-sm font-black ${casino.overallRating >= 9 ? 'text-amber-700' : 'text-gray-700'}`}>
                        {casino.overallRating.toFixed(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <a
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      data-tracking={trackingSource}
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
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:animate-shimmer" />
            <span className="relative z-10">Vezi {remainingCount} Cazinouri Mai Mult</span>
            <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
        * Termenii și condițiile se aplică tuturor ofertelor de bonus. Doar pentru persoane peste 18 ani. Joacă cu responsabilitate.
      </p>
    </>
  );
}
