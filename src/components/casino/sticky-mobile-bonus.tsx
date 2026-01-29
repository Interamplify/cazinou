'use client';

import * as React from 'react';
import Image from 'next/image';
import { X, Gift, ExternalLink } from 'lucide-react';
import type { Casino } from '@/types/casino';

interface StickyMobileBonusProps {
  casino: Casino;
  label?: string;
}

export function StickyMobileBonus({ casino, label = 'Bonusul Săptămânii' }: StickyMobileBonusProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setHasScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || !hasScrolled) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      {/* Gradient border top */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-3 py-2.5 shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Închide"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>

          {/* Casino logo */}
          <div className="relative w-10 h-10 flex-shrink-0 rounded-lg bg-white overflow-hidden shadow-lg">
            <Image
              src={casino.logo}
              alt={casino.name}
              fill
              className="object-contain p-1"
              sizes="40px"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Gift className="w-3 h-3 text-amber-400" />
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wide">{label}</span>
            </div>
            <p className="text-white font-bold text-xs truncate">
              {casino.bonusPercentage}% până la {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
            </p>
          </div>

          {/* CTA */}
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
          >
            <span>JOACĂ</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

// For use with anonymous casino data
interface AnonymousCasino {
  slug: string;
  name: string;
  bonus: string;
  rating: number;
  features: string[];
  tags: string[];
  license: string;
}

interface StickyMobileBonusAnonymousProps {
  casino: AnonymousCasino;
  label?: string;
}

export function StickyMobileBonusAnonymous({ casino, label = 'Bonusul Săptămânii' }: StickyMobileBonusAnonymousProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || !hasScrolled) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-3 py-2.5 shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Închide"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>

          <div className="relative w-10 h-10 flex-shrink-0 rounded-lg bg-white overflow-hidden shadow-lg">
            <Image
              src={`/images/casinos/${casino.slug}.webp`}
              alt={casino.name}
              fill
              className="object-contain p-1"
              sizes="40px"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Gift className="w-3 h-3 text-amber-400" />
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wide">{label}</span>
            </div>
            <p className="text-white font-bold text-xs truncate">
              {casino.bonus}
            </p>
          </div>

          <a
            href={`/go/${casino.slug}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
          >
            <span>JOACĂ</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
