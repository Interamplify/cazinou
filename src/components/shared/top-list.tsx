import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { RATING_MAX } from '@/lib/constants';
import type { Casino } from '@/types/casino';
import { ColorfulMobileList } from '@/components/casino/colorful-mobile-card';

interface TopListProps {
  casinos: Casino[];
  trackingSource?: string;
}

export function TopList({ casinos, trackingSource }: TopListProps) {
  return (
    <>
      {/* Mobile cards - COLORFUL */}
      <ColorfulMobileList casinos={casinos} />

      {/* Desktop HTML table (>= lg) — semantic for SEO */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse bg-white text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-10">#</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">Casino</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">Bonus</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">FS</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">Rulaj</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-28">Jocuri</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-20">Licenta</th>
              <th className="px-3 py-3 text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider w-14 text-center">Scor</th>
              <th className="px-3 py-3 w-24" />
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, i) => {
              const rank = i + 1;
              const isTop3 = rank <= 3;
              return (
                <tr
                  key={casino.slug}
                  className={`border-b border-gray-100 transition-colors hover:bg-orange-50/40 ${
                    isTop3 ? 'bg-orange-50/20' : ''
                  }`}
                >
                  <td className="px-3 py-3">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white ${rank === 1 ? 'bg-orange-500' : rank <= 3 ? 'bg-orange-400' : 'bg-gray-400'}`}>
                      {rank}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
                        <Image src={casino.logo} alt={`${casino.name} logo`} fill className="object-contain p-1" sizes="36px" />
                      </div>
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        data-tracking={trackingSource}
                        className="text-[13px] font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors whitespace-nowrap"
                      >
                        {casino.name}
                      </a>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-[13px] font-semibold text-orange-600 font-mono leading-tight whitespace-nowrap">
                      {casino.bonusPercentage}% pana la {casino.bonusMaxAmount.toLocaleString('ro-RO')} {casino.bonusCurrency}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-[12px] font-mono text-gray-700">{casino.freeSpins.toLocaleString('ro-RO')}</span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-[12px] font-mono text-gray-700">x{casino.wageringRequirement}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-[12px] text-gray-600">{casino.features[0]}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 uppercase tracking-wide whitespace-nowrap">
                      {casino.license === 'N/A' ? 'N/A' : casino.license}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-[13px] font-bold font-mono text-gray-900">{casino.overallRating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <a
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      data-tracking={trackingSource}
                      className="inline-flex items-center justify-center gap-1 rounded-xl bg-orange-500 px-3.5 py-2 text-[11px] font-bold font-mono text-white hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      Viziteaza
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
        * Termenii si conditiile se aplica tuturor ofertelor de bonus. Doar pentru persoane peste 18 ani. Joaca cu responsabilitate.
      </p>
    </>
  );
}
