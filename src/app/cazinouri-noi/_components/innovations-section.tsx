import { Bitcoin, ShieldCheck, Smartphone, Check, AlertTriangle } from 'lucide-react';
import { innovations } from '@/data/cazinouri-noi';

const innovationIcons = {
  0: Bitcoin,
  1: ShieldCheck,
  2: Smartphone,
};

const innovationColors = {
  0: {
    border: 'border-amber-200',
    bg: 'bg-amber-50/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    titleColor: 'text-amber-800',
    checkBg: 'bg-amber-500',
  },
  1: {
    border: 'border-green-200',
    bg: 'bg-green-50/30',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    checkBg: 'bg-green-500',
  },
  2: {
    border: 'border-blue-200',
    bg: 'bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800',
    checkBg: 'bg-blue-500',
  },
};

export function InnovationsSection() {
  return (
    <section id="inovatii" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Inovații Tehnologice — Ce Aduc Cazinourile Noi
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Platformele lansate recent integrează tehnologii moderne care îmbunătățesc experiența de joc:
            plăți crypto, transparență blockchain și optimizare mobilă nativă.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {innovations.map((innovation, index) => {
            const Icon = innovationIcons[index as keyof typeof innovationIcons];
            const colors = innovationColors[index as keyof typeof innovationColors];

            return (
              <div
                key={innovation.title}
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.iconBg}`}>
                    <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                  </div>
                  <h3 className={`font-mono font-bold text-lg ${colors.titleColor}`}>{innovation.title}</h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">{innovation.desc}</p>

                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-bold font-mono text-gray-900 uppercase tracking-wide mb-3">
                    Caracteristici Cheie
                  </p>
                  <ul className="space-y-2.5">
                    {innovation.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${colors.checkBg} text-white flex-shrink-0 mt-0.5`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {innovation.warning && (
                  <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 p-3 rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800">{innovation.warning}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary note */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-gray-900">De reținut:</strong> Cazinourile noi investesc în tehnologie pentru a
            atrage jucători de la competiție. Aceste inovații nu sunt doar marketing — ele oferă beneficii reale:
            retrageri mai rapide, mai multă transparență și acces facil de pe orice dispozitiv.
          </p>
        </div>
      </div>
    </section>
  );
}
