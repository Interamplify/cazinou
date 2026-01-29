'use client';

import Image from 'next/image';
import { Star, ExternalLink, Crown, Award, Sparkles } from 'lucide-react';
import type { Casino } from '@/types/casino';

interface HeroTop3Props {
  casinos: Casino[];
}

export function HeroTop3({ casinos }: HeroTop3Props) {
  if (casinos.length < 3) return null;

  const top3 = casinos.slice(0, 3);
  // Podium order: 2nd, 1st, 3rd
  const [first, second, third] = top3;
  const podiumOrder = [second, first, third];

  return (
    <div className="relative py-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-amber-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative flex items-end justify-center gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
        {podiumOrder.map((casino, idx) => {
          const isFirst = idx === 1;
          const isSecond = idx === 0;
          const position = isFirst ? 1 : isSecond ? 2 : 3;

          return (
            <a
              key={casino.slug}
              href={casino.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`group relative flex-1 transition-all duration-500 hover:z-20 ${
                isFirst
                  ? 'max-w-[160px] sm:max-w-[200px] z-10 -mt-4 hover:scale-110'
                  : 'max-w-[130px] sm:max-w-[160px] hover:scale-105'
              }`}
              style={{
                animationDelay: isFirst ? '0s' : isSecond ? '0.1s' : '0.2s',
              }}
            >
              {/* Card */}
              <div className={`relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl shadow-2xl transition-all duration-300 ${
                isFirst
                  ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 shadow-amber-500/40 group-hover:shadow-amber-500/60'
                  : isSecond
                    ? 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 shadow-slate-500/30 group-hover:shadow-slate-500/50'
                    : 'bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 shadow-amber-700/30 group-hover:shadow-amber-700/50'
              }`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Crown/Medal icon for position */}
                <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 z-20 ${
                  isFirst ? 'text-white drop-shadow-lg' : 'text-white/80'
                }`}>
                  {isFirst ? (
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ) : (
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>

                {/* Position badge */}
                <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex items-center justify-center rounded-full font-black text-xs sm:text-sm ${
                  isFirst
                    ? 'w-7 h-7 sm:w-8 sm:h-8 bg-white text-amber-600 shadow-lg'
                    : 'w-6 h-6 sm:w-7 sm:h-7 bg-white/20 text-white backdrop-blur-sm'
                }`}>
                  #{position}
                </div>

                {/* Content */}
                <div className={`relative p-3 sm:p-4 ${isFirst ? 'pt-10 sm:pt-12' : 'pt-8 sm:pt-10'}`}>
                  {/* Sparkle effect for #1 */}
                  {isFirst && (
                    <div className="absolute top-6 right-1/4 animate-pulse">
                      <Sparkles className="w-3 h-3 text-white/60" />
                    </div>
                  )}

                  {/* Logo */}
                  <div className={`relative mx-auto rounded-xl sm:rounded-2xl bg-white shadow-xl overflow-hidden ${
                    isFirst
                      ? 'w-16 h-16 sm:w-20 sm:h-20 ring-4 ring-white/50'
                      : 'w-12 h-12 sm:w-16 sm:h-16 ring-2 ring-white/30'
                  }`}>
                    <Image
                      src={casino.logo}
                      alt={casino.name}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>

                  {/* Name */}
                  <h3 className={`text-white font-black text-center mt-2 sm:mt-3 leading-tight truncate ${
                    isFirst ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}>
                    {casino.name}
                  </h3>

                  {/* Rating */}
                  <div className={`flex items-center justify-center gap-1 mt-1 sm:mt-2 ${
                    isFirst ? 'bg-white/20' : 'bg-white/10'
                  } backdrop-blur-sm rounded-full px-2 py-1 mx-auto w-fit`}>
                    <Star className={`fill-current ${
                      isFirst ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 text-white' : 'w-3 h-3 text-white/80'
                    }`} />
                    <span className={`font-bold ${
                      isFirst ? 'text-xs sm:text-sm text-white' : 'text-[10px] sm:text-xs text-white/90'
                    }`}>
                      {casino.overallRating.toFixed(1)}
                    </span>
                  </div>

                  {/* Bonus - only show on first */}
                  {isFirst && (
                    <div className="mt-2 sm:mt-3 bg-white/20 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-3 sm:py-2">
                      <p className="text-white/80 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wide text-center">Bonus</p>
                      <p className="text-white font-bold text-[10px] sm:text-xs text-center leading-tight">
                        {casino.bonusPercentage}% până la {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className={`mt-2 sm:mt-3 rounded-xl text-center transition-all duration-300 ${
                    isFirst
                      ? 'bg-white text-amber-600 py-2 sm:py-2.5 group-hover:bg-amber-50 shadow-lg'
                      : 'bg-white/20 text-white py-1.5 sm:py-2 group-hover:bg-white/30'
                  }`}>
                    <span className={`font-bold flex items-center justify-center gap-1 ${
                      isFirst ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'
                    }`}>
                      JOACĂ <ExternalLink className={isFirst ? 'w-3 h-3 sm:w-3.5 sm:h-3.5' : 'w-2.5 h-2.5'} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Podium base */}
              <div className={`relative overflow-hidden rounded-b-xl sm:rounded-b-2xl ${
                isFirst
                  ? 'h-12 sm:h-16 bg-gradient-to-b from-orange-500 to-orange-700'
                  : isSecond
                    ? 'h-8 sm:h-12 bg-gradient-to-b from-slate-500 to-slate-700'
                    : 'h-6 sm:h-10 bg-gradient-to-b from-amber-700 to-amber-900'
              }`}>
                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-black text-white/20 ${
                    isFirst ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {position}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// For anonymous casinos
interface AnonymousCasino {
  slug: string;
  name: string;
  bonus: string;
  rating: number;
  features: string[];
  tags: string[];
  license: string;
}

interface HeroTop3AnonymousProps {
  casinos: AnonymousCasino[];
}

export function HeroTop3Anonymous({ casinos }: HeroTop3AnonymousProps) {
  if (casinos.length < 3) return null;

  const top3 = casinos.slice(0, 3);
  const [first, second, third] = top3;
  const podiumOrder = [second, first, third];

  return (
    <div className="relative py-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-amber-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative flex items-end justify-center gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
        {podiumOrder.map((casino, idx) => {
          const isFirst = idx === 1;
          const isSecond = idx === 0;
          const position = isFirst ? 1 : isSecond ? 2 : 3;

          return (
            <a
              key={casino.slug}
              href={`/go/${casino.slug}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`group relative flex-1 transition-all duration-500 hover:z-20 ${
                isFirst
                  ? 'max-w-[160px] sm:max-w-[200px] z-10 -mt-4 hover:scale-110'
                  : 'max-w-[130px] sm:max-w-[160px] hover:scale-105'
              }`}
            >
              {/* Card */}
              <div className={`relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl shadow-2xl transition-all duration-300 ${
                isFirst
                  ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 shadow-amber-500/40 group-hover:shadow-amber-500/60'
                  : isSecond
                    ? 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 shadow-slate-500/30 group-hover:shadow-slate-500/50'
                    : 'bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 shadow-amber-700/30 group-hover:shadow-amber-700/50'
              }`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Crown/Medal icon */}
                <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 z-20 ${
                  isFirst ? 'text-white drop-shadow-lg' : 'text-white/80'
                }`}>
                  {isFirst ? (
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ) : (
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>

                {/* Position badge */}
                <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex items-center justify-center rounded-full font-black text-xs sm:text-sm ${
                  isFirst
                    ? 'w-7 h-7 sm:w-8 sm:h-8 bg-white text-amber-600 shadow-lg'
                    : 'w-6 h-6 sm:w-7 sm:h-7 bg-white/20 text-white backdrop-blur-sm'
                }`}>
                  #{position}
                </div>

                {/* Content */}
                <div className={`relative p-3 sm:p-4 ${isFirst ? 'pt-10 sm:pt-12' : 'pt-8 sm:pt-10'}`}>
                  {isFirst && (
                    <div className="absolute top-6 right-1/4 animate-pulse">
                      <Sparkles className="w-3 h-3 text-white/60" />
                    </div>
                  )}

                  {/* Logo */}
                  <div className={`relative mx-auto rounded-xl sm:rounded-2xl bg-white shadow-xl overflow-hidden ${
                    isFirst
                      ? 'w-16 h-16 sm:w-20 sm:h-20 ring-4 ring-white/50'
                      : 'w-12 h-12 sm:w-16 sm:h-16 ring-2 ring-white/30'
                  }`}>
                    <Image
                      src={`/images/casinos/${casino.slug}.webp`}
                      alt={casino.name}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>

                  {/* Name */}
                  <h3 className={`text-white font-black text-center mt-2 sm:mt-3 leading-tight truncate ${
                    isFirst ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}>
                    {casino.name}
                  </h3>

                  {/* Rating */}
                  <div className={`flex items-center justify-center gap-1 mt-1 sm:mt-2 ${
                    isFirst ? 'bg-white/20' : 'bg-white/10'
                  } backdrop-blur-sm rounded-full px-2 py-1 mx-auto w-fit`}>
                    <Star className={`fill-current ${
                      isFirst ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 text-white' : 'w-3 h-3 text-white/80'
                    }`} />
                    <span className={`font-bold ${
                      isFirst ? 'text-xs sm:text-sm text-white' : 'text-[10px] sm:text-xs text-white/90'
                    }`}>
                      {casino.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Bonus - only show on first */}
                  {isFirst && (
                    <div className="mt-2 sm:mt-3 bg-white/20 backdrop-blur-sm rounded-xl px-2 py-1.5 sm:px-3 sm:py-2">
                      <p className="text-white/80 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wide text-center">Bonus</p>
                      <p className="text-white font-bold text-[10px] sm:text-xs text-center leading-tight line-clamp-2">
                        {casino.bonus}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className={`mt-2 sm:mt-3 rounded-xl text-center transition-all duration-300 ${
                    isFirst
                      ? 'bg-white text-amber-600 py-2 sm:py-2.5 group-hover:bg-amber-50 shadow-lg'
                      : 'bg-white/20 text-white py-1.5 sm:py-2 group-hover:bg-white/30'
                  }`}>
                    <span className={`font-bold flex items-center justify-center gap-1 ${
                      isFirst ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'
                    }`}>
                      JOACĂ <ExternalLink className={isFirst ? 'w-3 h-3 sm:w-3.5 sm:h-3.5' : 'w-2.5 h-2.5'} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Podium base */}
              <div className={`relative overflow-hidden rounded-b-xl sm:rounded-b-2xl ${
                isFirst
                  ? 'h-12 sm:h-16 bg-gradient-to-b from-orange-500 to-orange-700'
                  : isSecond
                    ? 'h-8 sm:h-12 bg-gradient-to-b from-slate-500 to-slate-700'
                    : 'h-6 sm:h-10 bg-gradient-to-b from-amber-700 to-amber-900'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-black text-white/20 ${
                    isFirst ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {position}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
