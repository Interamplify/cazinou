import { RefreshCw, Plane, Percent, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const recurringBonuses = [
  {
    name: 'Bonus Vineri',
    icon: RefreshCw,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    borderColor: 'border-blue-300',
    bgGradient: 'from-blue-50/50 to-cyan-50/30',
    bonus: '100% Reîncărcare',
    details: [
      'Disponibil în fiecare vineri',
      'Rulaj 30x',
      'Valabil 48 ore',
    ],
  },
  {
    name: 'Duminica Aviator',
    icon: Plane,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    borderColor: 'border-purple-300',
    bgGradient: 'from-purple-50/50 to-pink-50/30',
    bonus: '60 Rotiri Gratuite',
    details: [
      'Exclusiv pentru jocul Aviator',
      'În fiecare duminică',
      'Free bets speciale',
    ],
  },
  {
    name: 'Cashback Săptămânal',
    icon: Percent,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    borderColor: 'border-green-300',
    bgGradient: 'from-green-50/50 to-emerald-50/30',
    bonus: '3% din Pierderi',
    details: [
      'Toate categoriile de jocuri',
      'Calculat săptămânal',
      'Până la 12% pentru VIP',
    ],
  },
];

export function RecurringBonusesSection() {
  return (
    <section id="bonusuri-recurente" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonusuri Recurente Megapari Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Pe lângă bonusul de bun venit, Megapari oferă promoții săptămânale regulate
            care îți permit să beneficiezi constant de oferte atractive.
          </p>
        </div>

        {/* Cashback image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/megapari-bonus-cashback.webp"
            alt="Megapari VIP Cashback"
            width={2316}
            height={496}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Bonus cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {recurringBonuses.map((bonus) => (
            <article
              key={bonus.name}
              className={`group overflow-hidden rounded-2xl border-2 ${bonus.borderColor} bg-gradient-to-br ${bonus.bgGradient} p-6 transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${bonus.iconBg} shadow-sm transition-transform group-hover:scale-110`}>
                  <bonus.icon className={`h-7 w-7 ${bonus.iconColor}`} />
                </div>
                <h3 className="font-mono font-bold text-gray-900 text-lg">{bonus.name}</h3>
              </div>

              {/* Bonus amount */}
              <div className="mb-5 text-center py-4 rounded-xl bg-white/60 border border-gray-200">
                <p className={`text-2xl font-extrabold ${bonus.iconColor}`}>{bonus.bonus}</p>
              </div>

              {/* Details */}
              <div className="space-y-2">
                {bonus.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Sports bonus note */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Bonus Sport:</strong> Megapari oferă și un bonus de bun venit pentru
            pariuri sportive de <strong>200% până la 230 EUR</strong>, cu rulaj doar 5x pe pariuri acumulator
            (minim 3 selecții, cote 1.40+) în 30 de zile.
          </p>
        </div>
      </div>
    </section>
  );
}
