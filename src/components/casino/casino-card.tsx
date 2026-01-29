import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Casino } from '@/types/casino';
import { RATING_MAX } from '@/lib/constants';

interface CasinoCardProps {
  casino: Casino;
  rank: number;
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const isTop = rank <= 3;

  return (
    <article
      className={cn(
        'group rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-0.5',
        isTop
          ? 'border-orange-200 bg-gradient-to-br from-orange-50/50 via-white to-white shadow-md shadow-orange-100/50'
          : 'border-gray-200 bg-white hover:border-orange-200'
      )}
    >
      {/* Mobile layout */}
      <div className="flex flex-col gap-4 p-5 sm:hidden">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm',
              rank === 1 ? 'bg-orange-500' : rank <= 3 ? 'bg-orange-400' : 'bg-gray-400'
            )}
          >
            {rank}
          </span>
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
          >
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              fill
              className="object-contain p-1.5"
              sizes="64px"
            />
          </a>
          <div className="min-w-0 flex-1">
            <a
              href={casino.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-lg font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors truncate"
            >
              {casino.name}
            </a>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-amber-500">&#9733;</span>
              <span className="text-base font-bold font-mono text-gray-900">
                {casino.overallRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400 font-mono">/{RATING_MAX}</span>
            </div>
          </div>
        </div>

        <p className="text-sm font-medium text-orange-600 font-mono">
          {casino.bonusTitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {casino.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-sm text-gray-500 bg-gray-50 rounded-lg px-2.5 py-1">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-gray-200 text-gray-500 uppercase tracking-wide">
            {casino.license}
          </span>
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group/btn relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Joaca Acum</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:flex items-center gap-5 p-5 lg:p-6">
        {/* Rank */}
        <span
          className={cn(
            'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm',
            rank === 1 ? 'bg-orange-500' : rank <= 3 ? 'bg-orange-400' : 'bg-gray-400'
          )}
        >
          {rank}
        </span>

        {/* Logo */}
        <a
          href={casino.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative h-20 w-20 lg:h-[88px] lg:w-[88px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
        >
          <Image
            src={casino.logo}
            alt={`${casino.name} logo`}
            fill
            className="object-contain p-2"
            sizes="88px"
          />
        </a>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <div className="min-w-0">
              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-lg lg:text-xl font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors"
              >
                {casino.name}
              </a>
              <p className="text-sm font-medium text-orange-600 font-mono mt-0.5 truncate">
                {casino.bonusTitle}
              </p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 bg-gray-50 rounded-lg px-3 py-1.5">
              <span className="text-amber-500">&#9733;</span>
              <span className="text-lg font-bold font-mono text-gray-900">
                {casino.overallRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400 font-mono">/{RATING_MAX}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {casino.features.slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className="text-sm text-gray-500 bg-gray-50 rounded-lg px-2.5 py-1"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* License + CTA */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group/btn relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 w-full overflow-hidden"
          >
            <span className="relative z-10">Joaca Acum</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-gray-200 text-gray-500 uppercase tracking-wide">
            {casino.license}
          </span>
        </div>
      </div>
    </article>
  );
}
