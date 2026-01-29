import Image from 'next/image';
import { ExternalLink, Star, Calendar, Clock, Award } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { casinoCategories } from '@/data/cazinouri-noi';

const categoryIcons = {
  recent: Calendar,
  established: Clock,
  veteran: Award,
};

const categoryColors = {
  recent: {
    border: 'border-green-200',
    bg: 'bg-green-50/30',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
  },
  established: {
    border: 'border-blue-200',
    bg: 'bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800',
  },
  veteran: {
    border: 'border-purple-200',
    bg: 'bg-purple-50/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    titleColor: 'text-purple-800',
  },
};

export function RecommendationsSection() {
  return (
    <section id="recomandari" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recomandări pe Categorii — Alege în Funcție de Vechime
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Am grupat cazinourile după vechime pentru a te ajuta să alegi în funcție de preferințele tale:
            platforme noi cu bonusuri agresive sau operatori stabili cu reputație dovedită.
          </p>
        </div>

        <div className="space-y-6">
          {casinoCategories.map((category) => {
            const casinos = getCasinosBySlugs(category.slugs);
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
            const colors = categoryColors[category.id as keyof typeof categoryColors];

            return (
              <div
                key={category.id}
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.iconBg}`}>
                    <Icon className={`h-5 w-5 ${colors.iconColor}`} />
                  </div>
                  <div>
                    <h3 className={`font-mono font-bold ${colors.titleColor}`}>{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.desc}</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {casinos.map((casino) => (
                    <div
                      key={casino.slug}
                      className="rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-gray-100 bg-white flex-shrink-0">
                          <Image
                            src={casino.logo}
                            alt={`${casino.name} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold font-mono text-gray-900 truncate">{casino.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                            <span className="text-xs font-mono text-gray-600">
                              {casino.overallRating.toFixed(1)}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">· {casino.license}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-orange-50 border border-orange-100 px-2.5 py-2 mb-3">
                        <p className="text-xs font-semibold text-orange-700 font-mono leading-snug line-clamp-2">
                          {casino.bonusTitle}
                        </p>
                      </div>

                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 text-xs font-bold font-mono transition-colors w-full justify-center"
                      >
                        Joacă Acum <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
