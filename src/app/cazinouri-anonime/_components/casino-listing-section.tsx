import { Star, CheckCircle2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { anonymousCasinos } from '@/data/cazinouri-anonime';

export function CasinoListingSection() {
  return (
    <section id="top-cazinouri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Top Cazinouri Anonime Fără Verificare
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Cele mai bune cazinouri crypto unde poți juca fără KYC, cu bonusuri
            generoase și retrageri rapide.
          </p>
        </div>

        <div className="space-y-4">
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
                          className={`text-lg sm:text-xl font-bold font-mono hover:text-orange-600 transition-colors ${
                            index === 0 ? 'text-orange-700' : 'text-gray-900'
                          }`}
                        >
                          {casino.name}
                        </a>
                        <p className="text-sm sm:text-base font-mono text-orange-600">{casino.bonus}</p>
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
                        <span className="text-sm font-semibold font-mono text-gray-600">
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
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2.5 text-sm font-semibold font-mono text-white transition"
                    >
                      Joacă Acum
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={`/casino/${casino.slug}/`}
                      className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold font-mono text-gray-700 transition hover:border-orange-400 hover:text-orange-600"
                    >
                      Vezi Detalii
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
