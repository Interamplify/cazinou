import { Star, CheckCircle2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { anonymousCasinos } from '@/data/cazinouri-anonime';

// Colores vibrantes para las cards
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

// Badge basado en rank
function getBadge(rank: number): string | null {
  if (rank === 1) return 'TOP #1';
  if (rank === 2) return 'TOP #2';
  if (rank === 3) return 'TOP #3';
  return null;
}

export function CasinoListingSection() {
  return (
    <section id="top-cazinouri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Top Cazinouri Anonime Fără Verificare
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Cele mai bune cazinouri crypto unde poți juca fără KYC, cu bonusuri
            generoase și retrageri rapide.
          </p>
        </div>

        {/* Mobile Cards - COLORFUL */}
        <div className="lg:hidden space-y-4">
          {anonymousCasinos.map((casino, index) => {
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
                {getBadge(rank) && (
                  <div className="absolute top-3 -right-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[10px] font-black px-10 py-1 rotate-45 shadow-lg">
                    {getBadge(rank)}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block space-y-4">
          {anonymousCasinos.map((casino, index) => (
            <article
              key={casino.slug}
              className={`rounded-2xl border shadow-sm transition hover:shadow-md overflow-hidden ${
                index === 0
                  ? 'border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white'
                  : index === 1
                    ? 'border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-white'
                    : 'border-gray-200 bg-white'
              }`}
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Rank & Logo */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white shadow ${
                        index === 0 ? 'bg-orange-500' : 'bg-orange-400'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <a
                      href={`/go/${casino.slug}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="relative block h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 hover:border-orange-300 transition-colors"
                    >
                      <Image
                        src={`/images/casinos/${casino.slug}.webp`}
                        alt={`${casino.name} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </a>
                  </div>

                  {/* Casino Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <a
                          href={`/go/${casino.slug}`}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className={`text-lg sm:text-xl font-bold hover:text-orange-600 transition-colors ${
                            index === 0 ? 'text-orange-700' : 'text-gray-900'
                          }`}
                        >
                          {casino.name}
                        </a>
                        <p className="text-sm sm:text-base font-semibold text-orange-600">{casino.bonus}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(casino.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </span>
                        <span className="text-sm font-semibold text-gray-600">
                          {casino.rating}/10
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {casino.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                            tag === 'Crypto' || tag === 'Crypto Only'
                              ? 'bg-blue-100 text-blue-700'
                              : tag === 'Live Casino'
                                ? 'bg-red-100 text-red-700'
                                : tag === 'Mobile'
                                  ? 'bg-green-100 text-green-700'
                                  : tag === 'Provably Fair'
                                    ? 'bg-purple-100 text-purple-700'
                                    : tag === 'No KYC'
                                      ? 'bg-orange-100 text-orange-700'
                                      : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-gray-700">
                      {casino.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-2 sm:w-36">
                    <span className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide border-orange-200 bg-white/80 text-orange-600">
                      {casino.license}
                    </span>
                    <a
                      href={`/go/${casino.slug}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2.5 text-sm font-bold text-white transition shadow-lg shadow-orange-500/25"
                    >
                      Joacă Acum
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
