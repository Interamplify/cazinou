import Image from 'next/image';
import { Zap, Tv, Bitcoin, Percent, Smartphone } from 'lucide-react';
import { getCategoryPicks } from '@/lib/data-helpers';

const categoryIcons: Record<string, React.ReactNode> = {
  'retrageri-rapide': <Zap className="h-5 w-5" />,
  'casino-live': <Tv className="h-5 w-5" />,
  'crypto-casino': <Bitcoin className="h-5 w-5" />,
  'rulaj-mic': <Percent className="h-5 w-5" />,
  mobil: <Smartphone className="h-5 w-5" />,
};

export function CategoryPicksSection() {
  const picks = getCategoryPicks();

  return (
    <section id="categorii-cazinouri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Clasament pe Categorii
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Mini-clasamente pentru diferite nevoi: retrageri rapide, crypto, casino live, rulaj mic, mobil.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-base text-gray-600 leading-relaxed">
            Nu toți jucătorii au aceleași priorități. Unii caută retrageri instant prin crypto, alții preferă un cazinou live cu dealeri reali sau o platformă cu cerințe de rulaj cât mai mici. Am creat mini-clasamente dedicate pentru fiecare nevoie, bazate pe aceleași criterii riguroase din metodologia noastră principală. Alege categoria care ți se potrivește și descoperă operatorii ideali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-orange-50 text-orange-500">
                  {categoryIcons[pick.id]}
                </span>
                <h3 className="text-base font-bold font-mono text-gray-900">{pick.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{pick.description}</p>
              <div className="space-y-3">
                {pick.casinos.map((casino, i) => (
                  <a
                    key={casino.slug}
                    href={casino.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3 hover:border-orange-200 hover:bg-orange-50/30 transition-all group"
                  >
                    <span className="text-sm font-mono text-orange-400 font-bold w-5">#{i + 1}</span>
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      <Image
                        src={casino.logo}
                        alt={casino.name}
                        fill
                        className="object-contain p-1"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {casino.name}
                      </p>
                      <p className="text-xs text-gray-400 font-mono">
                        &#9733; {casino.overallRating.toFixed(1)}/10
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
