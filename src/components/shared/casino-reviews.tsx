import Image from 'next/image';
import { Star, Check, X, ExternalLink, Gamepad2, Gift, CreditCard } from 'lucide-react';
import { casinoReviews } from '@/data/content';
import { RATING_MAX } from '@/lib/constants';
import type { Casino } from '@/types/casino';

interface CasinoReviewsProps {
  casinos: Casino[];
  title?: string;
  subtitle?: string;
  rankPrefix?: string;
}

export function CasinoReviews({
  casinos,
  title = 'Recenzii Individuale',
  subtitle = 'Analiză detaliată a cazinourilor din clasamentul nostru.',
  rankPrefix = 'TOP',
}: CasinoReviewsProps) {
  const ratingLabels: Record<string, string> = {
    securitate: 'Securitate',
    catalogJocuri: 'Jocuri',
    bonusuri: 'Bonusuri',
    metodePlata: 'Plăți',
    experientaUtilizator: 'UX',
    licenta: 'Licență',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {casinos.map((casino, index) => {
        const review = casinoReviews[casino.slug];
        const rank = index + 1;

        return (
          <article
            key={casino.slug}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Header: Rank + Name + Score */}
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Left: Rank + Logo */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold font-mono text-white shadow-md">
                      {rank}
                    </span>
                  </div>
                  <a
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
                  >
                    <Image src={casino.logo} alt={`${casino.name} logo`} fill className="object-contain p-2" sizes="80px" />
                  </a>
                </div>

                {/* Right: Name + Tagline + Score */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <span className="inline-block text-[10px] font-bold font-mono text-orange-600 bg-orange-50 rounded px-2 py-0.5 uppercase tracking-widest mb-2">
                        {rankPrefix} {rank} CAZINO
                      </span>
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="block text-xl sm:text-2xl font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors"
                      >
                        {casino.name}
                      </a>
                      {review && (
                        <p className="text-sm text-gray-500 mt-1">{review.tagline}</p>
                      )}
                    </div>

                    {/* Score box */}
                    <div className="flex flex-col items-center bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 flex-shrink-0">
                      <span className="text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider">Punctuație</span>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Experți</span>
                      <div className="flex items-baseline gap-0.5 mt-1">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                        <span className="text-2xl font-bold font-mono text-gray-900">{casino.overallRating.toFixed(1)}</span>
                        <span className="text-xs text-gray-400 font-mono">/{RATING_MAX}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body: Structured review sections */}
            {review && (
              <div className="p-6 sm:p-8 space-y-6">
                {/* Platform & Games */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-4 w-4 text-orange-500" />
                    <h4 className="text-sm font-bold font-mono text-gray-900">Platformă și Jocuri</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.platform}</p>
                </div>

                {/* Bonuses & Promotions */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-4 w-4 text-orange-500" />
                    <h4 className="text-sm font-bold font-mono text-gray-900">Bonusuri și Promoții</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.bonuses}</p>
                </div>

                {/* Payments & Mobile */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-4 w-4 text-orange-500" />
                    <h4 className="text-sm font-bold font-mono text-gray-900">Plăți și Mobil</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.payments}</p>
                </div>
              </div>
            )}

            {/* Analyst Verdict: Pros & Cons + Ratings */}
            <div className="border-t border-gray-100 p-6 sm:p-8">
              <h4 className="text-xs font-bold font-mono text-gray-900 uppercase tracking-wide mb-4">Verdictul Analistului</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Pros */}
                <div>
                  <ul className="space-y-2">
                    {casino.pros.map((pro, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-green-700">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <ul className="space-y-2">
                    {casino.cons.map((con, ci) => (
                      <li key={ci} className="flex items-start gap-2 text-sm text-red-600">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ratings breakdown */}
                <div className="space-y-2">
                  {Object.entries(casino.ratings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-gray-500">{ratingLabels[key]}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${(value / 10) * 100}%` }} />
                        </div>
                        <span className="text-xs font-bold font-mono text-gray-700 w-7 text-right">{value.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bonus Offer at Bottom */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold font-mono text-orange-200 uppercase tracking-widest">Ofertă de Bun Venit</span>
                  <p className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
                    {casino.bonusTitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-orange-100 font-mono">
                    <span>Rulaj x{casino.wageringRequirement}</span>
                    <span className="w-1 h-1 rounded-full bg-orange-300" />
                    <span>Validitate {review?.bonusValidity ?? '7 zile'}</span>
                    <span className="w-1 h-1 rounded-full bg-orange-300" />
                    <span>{casino.license === 'N/A' ? 'Lic. N/A' : casino.license}</span>
                  </div>
                </div>
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold font-mono text-orange-600 hover:bg-orange-50 transition-colors shadow-md flex-shrink-0"
                >
                  Joacă Acum
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
