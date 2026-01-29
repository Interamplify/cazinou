import { Check, X, Minus } from 'lucide-react';
import { gglVsOffshoreComparison } from '@/data/cazinouri-germania';

function ValueCell({ value, isGgl }: { value: string; isGgl: boolean }) {
  const isPositive = value === 'Disponibile' || value === 'Disponibil' || value === 'Fără limită' || value === 'Fără pauză' || value === '0%' || value === 'Generoase';
  const isNegative = value === 'Interzise' || value === 'Interzis' || value === 'Limitate';

  if (isGgl) {
    return (
      <div className="flex items-center gap-2">
        {isNegative ? (
          <X className="h-4 w-4 text-red-500 flex-shrink-0" />
        ) : isPositive ? (
          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
        ) : (
          <Minus className="h-4 w-4 text-gray-400 flex-shrink-0" />
        )}
        <span className={isNegative ? 'text-red-600' : ''}>{value}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isPositive ? (
        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
      ) : isNegative ? (
        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
      ) : (
        <Minus className="h-4 w-4 text-gray-400 flex-shrink-0" />
      )}
      <span className={isPositive ? 'text-green-600 font-medium' : ''}>{value}</span>
    </div>
  );
}

export function ComparisonTableSection() {
  return (
    <section id="comparatie" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Comparație: Cazinouri GGL vs Offshore cu VPN
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Diferențele cheie între cazinourile licențiate în Germania și platformele internaționale accesibile cu VPN.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 font-bold font-mono text-gray-900 text-sm">Criteriu</div>
            <div className="p-4 font-bold font-mono text-gray-900 text-sm text-center border-l border-gray-200">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                GGL Germania
              </span>
            </div>
            <div className="p-4 font-bold font-mono text-gray-900 text-sm text-center border-l border-gray-200">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
                Offshore + VPN
              </span>
            </div>
          </div>

          {/* Rows */}
          {gglVsOffshoreComparison.categories.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index < gglVsOffshoreComparison.categories.length - 1 ? 'border-b border-gray-100' : ''} ${index % 2 === 1 ? 'bg-gray-50/50' : ''}`}
            >
              <div className="p-4 text-sm font-medium text-gray-900">{row.category}</div>
              <div className="p-4 text-sm text-gray-600 border-l border-gray-100">
                <ValueCell value={row.ggl} isGgl={true} />
              </div>
              <div className="p-4 text-sm text-gray-600 border-l border-gray-100">
                <ValueCell value={row.offshore} isGgl={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
