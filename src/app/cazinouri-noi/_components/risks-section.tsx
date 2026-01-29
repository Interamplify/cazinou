import { AlertTriangle } from 'lucide-react';
import { risks } from '@/data/cazinouri-noi';

const severityConfig = {
  high: {
    bg: 'bg-red-500',
    border: 'border-l-red-500',
    badge: 'bg-red-100 text-red-700',
    label: 'Ridicat',
  },
  medium: {
    bg: 'bg-yellow-500',
    border: 'border-l-yellow-500',
    badge: 'bg-yellow-100 text-yellow-700',
    label: 'Mediu',
  },
  low: {
    bg: 'bg-green-500',
    border: 'border-l-green-500',
    badge: 'bg-green-100 text-green-700',
    label: 'Scăzut',
  },
};

export function RisksSection() {
  return (
    <section id="riscuri" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-red-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Riscuri de Luat în Considerare
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Cazinourile noi vin cu unele riscuri. Iată ce trebuie să ai în vedere înainte de a te înregistra.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="font-mono font-bold text-lg text-red-900">Atenție la Aceste Aspecte</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {risks.map((risk) => {
              const config = severityConfig[risk.severity as keyof typeof severityConfig];
              return (
                <div
                  key={risk.title}
                  className={`flex items-start gap-2.5 pl-3 border-l-2 ${config.border}`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${config.bg} text-white text-[10px] font-bold flex-shrink-0 mt-0.5`}
                  >
                    !
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-bold text-gray-900 font-mono">{risk.title}</p>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${config.badge}`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{risk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
