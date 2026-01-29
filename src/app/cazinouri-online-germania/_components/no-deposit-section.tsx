import Image from 'next/image';
import { ExternalLink, Star, Gift } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { noDepositGermaniaSlugs, noDepositBonuses } from '@/data/cazinouri-germania';

export function NoDepositSection() {
  const casinos = getCasinosBySlugs(noDepositGermaniaSlugs);

  return (
    <section id="fara-depunere" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cazinouri online Germania cu bonus fără depunere
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Testează aceste platforme fără să riști bani proprii. Bonusurile fără depunere îți
            permit să explorezi catalogul de jocuri și să câștigi bani reali gratuit.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {casinos.map((casino) => {
            const details = noDepositBonuses[casino.slug];
            return (
              <div
                key={casino.slug}
                className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-5 transition-all hover:shadow-lg hover:border-orange-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <Gift className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-xs font-bold font-mono text-orange-600 uppercase tracking-wide">
                    Bonus Fără Depunere
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-gray-100 bg-white flex-shrink-0">
                    <Image
                      src={casino.logo}
                      alt={`${casino.name} logo`}
                      fill
                      className="object-contain p-1.5"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-bold font-mono text-gray-900">{casino.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-mono text-gray-600">
                        {casino.overallRating.toFixed(1)}
                      </span>
                      <span className="text-xs font-mono text-gray-400">· Rulaj {details?.wagering || `x${casino.wageringRequirement}`}</span>
                    </div>
                  </div>
                </div>

                {/* Bonus highlight */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="rounded-xl bg-orange-500 px-3 py-2.5 text-center">
                    <p className="text-[10px] text-orange-200 font-mono uppercase">Bonus Gratis</p>
                    <p className="text-lg font-bold font-mono text-white">{details?.bonus || '—'}</p>
                  </div>
                  <div className="rounded-xl bg-orange-500 px-3 py-2.5 text-center">
                    <p className="text-[10px] text-orange-200 font-mono uppercase">Rotiri Gratuite</p>
                    <p className="text-lg font-bold font-mono text-white">{details?.spins || '—'}</p>
                  </div>
                </div>

                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-3 text-sm font-bold font-mono transition-colors shadow-sm"
                >
                  Joacă Fără Depunere <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
