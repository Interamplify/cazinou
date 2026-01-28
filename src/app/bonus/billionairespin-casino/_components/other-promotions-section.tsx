import { RefreshCw, Percent, Gift } from 'lucide-react';

interface Promotion {
  icon: typeof RefreshCw;
  iconColor: string;
  iconBg: string;
  title: string;
  bonus?: string;
  benefits?: string;
  code?: string;
  requirements: string[];
}

const promotions: Promotion[] = [
  {
    icon: RefreshCw,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    title: 'Reload Duminică',
    bonus: '25% până la 100€',
    code: 'RELDAY',
    requirements: [
      'Nivel VIP: Bronze+',
      'Depunere minimă: 30€',
      'Rulaj: 35x',
      'Valabil: Doar duminică',
    ],
  },
  {
    icon: Percent,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Rakeback până la 17%',
    benefits: 'Returnează până la 17% din taxele de cazinou',
    requirements: [
      'Nivel VIP: Silver+ (10%), Gold (15%), Platinum (17%)',
      'Calculat lunar',
      'Fără rulaj',
    ],
  },
];

export function OtherPromotionsSection() {
  return (
    <section id="alte-promotii" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Alte Promoții Permanente — Reload, Rakeback și Mai Mult
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Pe lângă bonusul de bun venit și cashback-ul săptămânal, Billionairespin oferă și alte
            promoții permanente pentru jucătorii activi.
          </p>
        </div>

        {/* Promotion Cards */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {promotions.map((promo) => (
            <div
              key={promo.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${promo.iconBg}`}
                >
                  <promo.icon className={`h-6 w-6 ${promo.iconColor}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-lg">{promo.title}</h3>
                  {promo.bonus && (
                    <p className="text-xl font-extrabold text-orange-600 mt-1">{promo.bonus}</p>
                  )}
                  {promo.benefits && (
                    <p className="text-sm text-gray-600 mt-1">{promo.benefits}</p>
                  )}
                </div>
              </div>

              {/* Code if available */}
              {promo.code && (
                <div className="mb-5 rounded-xl border-2 border-dashed border-orange-300 bg-orange-50/50 p-4 text-center">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Cod Bonus
                  </p>
                  <p className="font-mono font-bold text-orange-600 text-2xl">{promo.code}</p>
                </div>
              )}

              {/* Requirements */}
              <div className="space-y-2.5">
                <p className="text-sm font-semibold text-gray-900 font-mono">Cerințe:</p>
                {promo.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex-shrink-0 mt-0.5">
                      <Gift className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Notă:</strong> Promoțiile se actualizează lunar.
            Verifică secțiunea Promoții din cont pentru oferte noi.
          </p>
        </div>
      </div>
    </section>
  );
}
