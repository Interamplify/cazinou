'use client';

import Image from 'next/image';
import { Star, ExternalLink, Trophy, Crown, Medal } from 'lucide-react';
import type { Casino } from '@/types/casino';

interface Top3PodiumProps {
  casinos: Casino[];
  title?: string;
  subtitle?: string;
}

// Unified casino interface for both types
interface UnifiedCasino {
  slug: string;
  name: string;
  logo: string;
  bonus: string;
  rating: number;
  affiliateUrl: string;
  features?: string[];
  license?: string;
}

function normalizeCasino(casino: Casino | any): UnifiedCasino {
  // Handle both Casino type and anonymous casino type
  if ('bonusTitle' in casino) {
    return {
      slug: casino.slug,
      name: casino.name,
      logo: casino.logo,
      bonus: casino.bonusTitle,
      rating: casino.overallRating,
      affiliateUrl: casino.affiliateUrl,
      features: casino.features,
      license: casino.license,
    };
  }
  // Anonymous casino format
  return {
    slug: casino.slug,
    name: casino.name,
    logo: `/images/casinos/${casino.slug}.webp`,
    bonus: casino.bonus,
    rating: casino.rating,
    affiliateUrl: `/go/${casino.slug}`,
    features: casino.features,
    license: casino.license,
  };
}

export function Top3Podium({ casinos, title, subtitle }: Top3PodiumProps) {
  if (casinos.length < 3) return null;

  const top3 = casinos.slice(0, 3).map(normalizeCasino);
  const [first, second, third] = top3;

  // Podium order: 2nd, 1st, 3rd (like sports podium)
  const podiumOrder = [second, first, third];

  const podiumConfig = {
    0: { // 2nd place (left)
      position: 2,
      height: 'h-32 lg:h-40',
      cardHeight: 'min-h-[280px] lg:min-h-[320px]',
      gradient: 'from-slate-600 via-slate-500 to-slate-600',
      ringColor: 'ring-slate-400',
      shadowColor: 'shadow-slate-500/40',
      icon: Medal,
      iconColor: 'text-slate-300',
      badge: 'bg-gradient-to-r from-slate-500 to-slate-600',
      badgeText: 'text-white',
      ctaGradient: 'from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600',
      ctaShadow: 'shadow-slate-500/30',
      delay: '0.1s',
    },
    1: { // 1st place (center)
      position: 1,
      height: 'h-40 lg:h-52',
      cardHeight: 'min-h-[320px] lg:min-h-[380px]',
      gradient: 'from-amber-500 via-yellow-400 to-amber-500',
      ringColor: 'ring-amber-400',
      shadowColor: 'shadow-amber-500/50',
      icon: Crown,
      iconColor: 'text-amber-300',
      badge: 'bg-gradient-to-r from-amber-500 to-yellow-500',
      badgeText: 'text-slate-900',
      ctaGradient: 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400',
      ctaShadow: 'shadow-amber-500/40',
      delay: '0s',
    },
    2: { // 3rd place (right)
      position: 3,
      height: 'h-28 lg:h-36',
      cardHeight: 'min-h-[260px] lg:min-h-[300px]',
      gradient: 'from-amber-700 via-amber-600 to-amber-700',
      ringColor: 'ring-amber-600',
      shadowColor: 'shadow-amber-600/40',
      icon: Trophy,
      iconColor: 'text-amber-400',
      badge: 'bg-gradient-to-r from-amber-600 to-amber-700',
      badgeText: 'text-white',
      ctaGradient: 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600',
      ctaShadow: 'shadow-amber-600/30',
      delay: '0.2s',
    },
  };

  return (
    <div className="w-full">
      {/* Title */}
      {title && (
        <div className="text-center mb-6 lg:mb-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}

      {/* Podium Container */}
      <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto px-2">
        {podiumOrder.map((casino, idx) => {
          const config = podiumConfig[idx as 0 | 1 | 2];
          const Icon = config.icon;

          return (
            <div
              key={casino.slug}
              className="flex-1 max-w-[140px] sm:max-w-[180px] lg:max-w-[220px] animate-fade-in-up opacity-0"
              style={{ animationDelay: config.delay }}
            >
              {/* Card */}
              <div
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${config.cardHeight} flex flex-col shadow-2xl ${config.shadowColor} ring-2 ${config.ringColor}`}
              >
                {/* Glow effect */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b ${config.gradient} opacity-20 blur-2xl`} />

                {/* Position Badge */}
                <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${config.badge} ${config.badgeText} text-[10px] lg:text-xs font-black shadow-lg`}>
                    <Icon className={`h-3 w-3 lg:h-4 lg:w-4`} />
                    <span>#{config.position}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-between h-full p-3 lg:p-4 pt-10 lg:pt-12">
                  {/* Logo */}
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-white shadow-xl overflow-hidden ring-4 ${config.ringColor}/30`}>
                    <Image
                      src={casino.logo}
                      alt={casino.name}
                      fill
                      className="object-contain p-1.5 lg:p-2"
                      sizes="80px"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-white font-black text-sm sm:text-base lg:text-lg text-center mt-2 lg:mt-3 leading-tight line-clamp-2">
                    {casino.name}
                  </h4>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 mt-1 lg:mt-2">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-xs lg:text-sm">{casino.rating.toFixed(1)}</span>
                  </div>

                  {/* Bonus */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-2 py-1.5 lg:px-3 lg:py-2 mt-2 w-full">
                    <p className="text-white/80 text-[8px] lg:text-[10px] font-semibold uppercase tracking-wide text-center">Bonus</p>
                    <p className="text-white font-bold text-[10px] sm:text-xs lg:text-sm text-center leading-tight line-clamp-2">
                      {casino.bonus}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`w-full mt-2 lg:mt-3 flex items-center justify-center gap-1 rounded-xl py-2 lg:py-2.5 text-[10px] sm:text-xs lg:text-sm font-black text-white transition-all duration-300 bg-gradient-to-r ${config.ctaGradient} shadow-lg ${config.ctaShadow} hover:scale-105 hover:shadow-xl`}
                  >
                    <span>JOACĂ</span>
                    <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
                  </a>
                </div>
              </div>

              {/* Podium Base */}
              <div className={`${config.height} bg-gradient-to-b ${config.gradient} rounded-b-xl lg:rounded-b-2xl shadow-inner relative overflow-hidden mt-0`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12" />
                {/* Position number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl sm:text-5xl lg:text-6xl font-black ${config.badgeText} opacity-30`}>
                    {config.position}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Simplified version for anonymous casinos
interface AnonymousCasino {
  slug: string;
  name: string;
  bonus: string;
  rating: number;
  features: string[];
  tags: string[];
  license: string;
}

interface Top3PodiumAnonymousProps {
  casinos: AnonymousCasino[];
  title?: string;
  subtitle?: string;
}

export function Top3PodiumAnonymous({ casinos, title, subtitle }: Top3PodiumAnonymousProps) {
  if (casinos.length < 3) return null;

  const normalizedCasinos = casinos.slice(0, 3).map(casino => ({
    slug: casino.slug,
    name: casino.name,
    logo: `/images/casinos/${casino.slug}.webp`,
    bonus: casino.bonus,
    rating: casino.rating,
    affiliateUrl: `/go/${casino.slug}`,
    features: casino.features,
    license: casino.license,
  }));

  // Reuse the same rendering logic
  const [first, second, third] = normalizedCasinos;
  const podiumOrder = [second, first, third];

  const podiumConfig = {
    0: { // 2nd place
      position: 2,
      height: 'h-32 lg:h-40',
      cardHeight: 'min-h-[280px] lg:min-h-[320px]',
      gradient: 'from-slate-600 via-slate-500 to-slate-600',
      ringColor: 'ring-slate-400',
      shadowColor: 'shadow-slate-500/40',
      icon: Medal,
      iconColor: 'text-slate-300',
      badge: 'bg-gradient-to-r from-slate-500 to-slate-600',
      badgeText: 'text-white',
      ctaGradient: 'from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600',
      ctaShadow: 'shadow-slate-500/30',
      delay: '0.1s',
    },
    1: { // 1st place
      position: 1,
      height: 'h-40 lg:h-52',
      cardHeight: 'min-h-[320px] lg:min-h-[380px]',
      gradient: 'from-amber-500 via-yellow-400 to-amber-500',
      ringColor: 'ring-amber-400',
      shadowColor: 'shadow-amber-500/50',
      icon: Crown,
      iconColor: 'text-amber-300',
      badge: 'bg-gradient-to-r from-amber-500 to-yellow-500',
      badgeText: 'text-slate-900',
      ctaGradient: 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400',
      ctaShadow: 'shadow-amber-500/40',
      delay: '0s',
    },
    2: { // 3rd place
      position: 3,
      height: 'h-28 lg:h-36',
      cardHeight: 'min-h-[260px] lg:min-h-[300px]',
      gradient: 'from-amber-700 via-amber-600 to-amber-700',
      ringColor: 'ring-amber-600',
      shadowColor: 'shadow-amber-600/40',
      icon: Trophy,
      iconColor: 'text-amber-400',
      badge: 'bg-gradient-to-r from-amber-600 to-amber-700',
      badgeText: 'text-white',
      ctaGradient: 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600',
      ctaShadow: 'shadow-amber-600/30',
      delay: '0.2s',
    },
  };

  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-6 lg:mb-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto px-2">
        {podiumOrder.map((casino, idx) => {
          const config = podiumConfig[idx as 0 | 1 | 2];
          const Icon = config.icon;

          return (
            <div
              key={casino.slug}
              className="flex-1 max-w-[140px] sm:max-w-[180px] lg:max-w-[220px] animate-fade-in-up opacity-0"
              style={{ animationDelay: config.delay }}
            >
              <div
                className={`relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${config.cardHeight} flex flex-col shadow-2xl ${config.shadowColor} ring-2 ${config.ringColor}`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b ${config.gradient} opacity-20 blur-2xl`} />

                <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${config.badge} ${config.badgeText} text-[10px] lg:text-xs font-black shadow-lg`}>
                    <Icon className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span>#{config.position}</span>
                  </div>
                </div>

                <div className="relative flex flex-col items-center justify-between h-full p-3 lg:p-4 pt-10 lg:pt-12">
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-white shadow-xl overflow-hidden ring-4 ${config.ringColor}/30`}>
                    <Image
                      src={casino.logo}
                      alt={casino.name}
                      fill
                      className="object-contain p-1.5 lg:p-2"
                      sizes="80px"
                    />
                  </div>

                  <h4 className="text-white font-black text-sm sm:text-base lg:text-lg text-center mt-2 lg:mt-3 leading-tight line-clamp-2">
                    {casino.name}
                  </h4>

                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 mt-1 lg:mt-2">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-xs lg:text-sm">{casino.rating.toFixed(1)}</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-2 py-1.5 lg:px-3 lg:py-2 mt-2 w-full">
                    <p className="text-white/80 text-[8px] lg:text-[10px] font-semibold uppercase tracking-wide text-center">Bonus</p>
                    <p className="text-white font-bold text-[10px] sm:text-xs lg:text-sm text-center leading-tight line-clamp-2">
                      {casino.bonus}
                    </p>
                  </div>

                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`w-full mt-2 lg:mt-3 flex items-center justify-center gap-1 rounded-xl py-2 lg:py-2.5 text-[10px] sm:text-xs lg:text-sm font-black text-white transition-all duration-300 bg-gradient-to-r ${config.ctaGradient} shadow-lg ${config.ctaShadow} hover:scale-105 hover:shadow-xl`}
                  >
                    <span>JOACĂ</span>
                    <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
                  </a>
                </div>
              </div>

              <div className={`${config.height} bg-gradient-to-b ${config.gradient} rounded-b-xl lg:rounded-b-2xl shadow-inner relative overflow-hidden mt-0`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl sm:text-5xl lg:text-6xl font-black ${config.badgeText} opacity-30`}>
                    {config.position}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
