import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';

// Esquemas de colores vibrantes rotativos
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

export interface ColorfulMobileCardProps {
  casino: {
    slug: string;
    name: string;
    logo: string;
    bonusTitle: string;
    bonusPercentage?: number;
    freeSpins?: number;
    wageringRequirement?: number;
    overallRating: number;
    license: string;
    features?: string[];
    affiliateUrl: string;
  };
  rank: number;
  index: number;
}

export function ColorfulMobileCard({ casino, rank, index }: ColorfulMobileCardProps) {
  const scheme = colorSchemes[index % colorSchemes.length];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up opacity-0 shadow-xl ${scheme.shadow}`}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
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
            {casino.freeSpins && casino.freeSpins > 0 && (
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
              {casino.wageringRequirement !== undefined && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] font-bold uppercase shadow-sm">
                  Rulaj x{casino.wageringRequirement}
                </span>
              )}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold uppercase shadow-sm">
                {casino.license === 'N/A' ? 'Fără KYC' : casino.license}
              </span>
            </div>
            {casino.features && casino.features[0] && (
              <p className="text-xs text-gray-600 mt-2 font-medium">{casino.features[0]}</p>
            )}
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
        <div className="absolute top-3 -right-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[10px] font-black px-10 py-1 rotate-45 shadow-lg">
          {scheme.badge}
        </div>
      )}
    </div>
  );
}

// Componente para lista completa
export interface ColorfulMobileListProps {
  casinos: ColorfulMobileCardProps['casino'][];
}

export function ColorfulMobileList({ casinos }: ColorfulMobileListProps) {
  return (
    <div className="lg:hidden space-y-4">
      {casinos.map((casino, i) => (
        <ColorfulMobileCard key={casino.slug} casino={casino} rank={i + 1} index={i} />
      ))}
    </div>
  );
}
