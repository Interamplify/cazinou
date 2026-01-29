import { TrendingUp, Zap } from 'lucide-react';
import { popularSlots } from '@/data/cazinouri-germania';

const volatilityColors: Record<string, string> = {
  'Mică': 'text-green-600 bg-green-50 border-green-100',
  'Medie': 'text-amber-600 bg-amber-50 border-amber-100',
  'Mare': 'text-red-600 bg-red-50 border-red-100',
};

export function PopularSlotsSection() {
  return (
    <section id="pacanele-populare" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cele mai populare pacanele online Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Sloturi legendare apreciate de jucătorii din Germania — disponibile la cazinourile
            offshore fără restricțiile GGL.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularSlots.map((slot, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold font-mono text-gray-900">{slot.title}</h3>
                  <p className="text-xs text-gray-500 font-mono">{slot.provider}</p>
                </div>
                <span className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full border ${volatilityColors[slot.volatility] || volatilityColors['Medie']}`}>
                  <Zap className="h-3 w-3" />
                  {slot.volatility}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{slot.description}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-mono text-gray-700">RTP: {slot.rtp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
