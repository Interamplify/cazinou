'use client';

import Image from 'next/image';
import { Star, ExternalLink, Crown, Medal, Trophy } from 'lucide-react';
import type { Casino } from '@/types/casino';

interface HeroTop3Props {
  casinos: Casino[];
}

export function HeroTop3({ casinos }: HeroTop3Props) {
  if (casinos.length < 3) return null;

  const top3 = casinos.slice(0, 3);
  // Podium order: 2nd, 1st, 3rd
  const podiumOrder = [top3[1], top3[0], top3[2]];

  const config = [
    { // 2nd place (left)
      position: 2,
      scale: 'scale-95',
      gradient: 'from-slate-700 to-slate-800',
      icon: Medal,
      badgeBg: 'bg-slate-500',
      ring: 'ring-slate-400/50',
    },
    { // 1st place (center)
      position: 1,
      scale: 'scale-105 z-10',
      gradient: 'from-amber-500 to-orange-500',
      icon: Crown,
      badgeBg: 'bg-amber-500',
      ring: 'ring-amber-400/50',
    },
    { // 3rd place (right)
      position: 3,
      scale: 'scale-95',
      gradient: 'from-amber-700 to-amber-800',
      icon: Trophy,
      badgeBg: 'bg-amber-600',
      ring: 'ring-amber-500/50',
    },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
      {podiumOrder.map((casino, idx) => {
        const cfg = config[idx];
        const Icon = cfg.icon;

        return (
          <a
            key={casino.slug}
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`group relative flex-1 max-w-[120px] sm:max-w-[150px] ${cfg.scale} transition-all duration-300 hover:scale-110 hover:z-20`}
          >
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${cfg.gradient} p-2.5 sm:p-3 shadow-xl ring-2 ${cfg.ring}`}>
              {/* Position badge */}
              <div className={`absolute -top-1 -left-1 w-6 h-6 sm:w-7 sm:h-7 ${cfg.badgeBg} rounded-full flex items-center justify-center shadow-lg`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>

              {/* Logo */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-white shadow-lg overflow-hidden mb-2">
                <Image
                  src={casino.logo}
                  alt={casino.name}
                  fill
                  className="object-contain p-1.5"
                  sizes="56px"
                />
              </div>

              {/* Name */}
              <p className="text-white font-bold text-[10px] sm:text-xs text-center truncate mb-1">
                {casino.name}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-[10px] sm:text-xs font-bold">{casino.overallRating.toFixed(1)}</span>
              </div>

              {/* CTA */}
              <div className="bg-white/20 rounded-lg py-1.5 text-center group-hover:bg-white/30 transition-colors">
                <span className="text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center gap-1">
                  JOACĂ <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            {/* Position number below */}
            <div className={`h-4 sm:h-6 bg-gradient-to-b ${cfg.gradient} rounded-b-lg -mt-1 flex items-center justify-center`}>
              <span className="text-white/50 text-xs sm:text-sm font-black">#{cfg.position}</span>
            </div>
          </a>
        );
      })}
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
  const podiumOrder = [top3[1], top3[0], top3[2]];

  const config = [
    { position: 2, scale: 'scale-95', gradient: 'from-slate-700 to-slate-800', icon: Medal, badgeBg: 'bg-slate-500', ring: 'ring-slate-400/50' },
    { position: 1, scale: 'scale-105 z-10', gradient: 'from-amber-500 to-orange-500', icon: Crown, badgeBg: 'bg-amber-500', ring: 'ring-amber-400/50' },
    { position: 3, scale: 'scale-95', gradient: 'from-amber-700 to-amber-800', icon: Trophy, badgeBg: 'bg-amber-600', ring: 'ring-amber-500/50' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
      {podiumOrder.map((casino, idx) => {
        const cfg = config[idx];
        const Icon = cfg.icon;

        return (
          <a
            key={casino.slug}
            href={`/go/${casino.slug}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`group relative flex-1 max-w-[120px] sm:max-w-[150px] ${cfg.scale} transition-all duration-300 hover:scale-110 hover:z-20`}
          >
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${cfg.gradient} p-2.5 sm:p-3 shadow-xl ring-2 ${cfg.ring}`}>
              <div className={`absolute -top-1 -left-1 w-6 h-6 sm:w-7 sm:h-7 ${cfg.badgeBg} rounded-full flex items-center justify-center shadow-lg`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-white shadow-lg overflow-hidden mb-2">
                <Image
                  src={`/images/casinos/${casino.slug}.webp`}
                  alt={casino.name}
                  fill
                  className="object-contain p-1.5"
                  sizes="56px"
                />
              </div>

              <p className="text-white font-bold text-[10px] sm:text-xs text-center truncate mb-1">
                {casino.name}
              </p>

              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-[10px] sm:text-xs font-bold">{casino.rating.toFixed(1)}</span>
              </div>

              <div className="bg-white/20 rounded-lg py-1.5 text-center group-hover:bg-white/30 transition-colors">
                <span className="text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center gap-1">
                  JOACĂ <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            <div className={`h-4 sm:h-6 bg-gradient-to-b ${cfg.gradient} rounded-b-lg -mt-1 flex items-center justify-center`}>
              <span className="text-white/50 text-xs sm:text-sm font-black">#{cfg.position}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
