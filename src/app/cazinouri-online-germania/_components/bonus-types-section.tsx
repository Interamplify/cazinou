import { Gift, RotateCcw, Percent, RefreshCw, Crown, Sparkles } from 'lucide-react';
import { bonusTypes } from '@/data/cazinouri-germania';

const iconMap: Record<string, React.ReactNode> = {
  'Bonus de Bun Venit': <Gift className="h-5 w-5" />,
  'Bonus Fără Depunere': <Sparkles className="h-5 w-5" />,
  'Rotiri Gratuite': <RotateCcw className="h-5 w-5" />,
  'Cashback': <Percent className="h-5 w-5" />,
  'Bonus Reload': <RefreshCw className="h-5 w-5" />,
  'Program VIP / Loialitate': <Crown className="h-5 w-5" />,
};

export function BonusTypesSection() {
  return (
    <section id="tipuri-bonusuri" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de bonusuri disponibile la cazinourile online Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            De la bonusuri de bun venit până la programe VIP — descoperă toate tipurile de promoții
            disponibile la cazinourile din Germania.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonusTypes.map((bonus, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  {iconMap[bonus.title] || <Gift className="h-5 w-5" />}
                </div>
                <h3 className="text-base font-bold font-mono text-gray-900">{bonus.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{bonus.description}</p>
              <div className="rounded-lg bg-orange-50 px-3 py-2 border border-orange-100">
                <p className="text-xs text-orange-700 font-mono">{bonus.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
