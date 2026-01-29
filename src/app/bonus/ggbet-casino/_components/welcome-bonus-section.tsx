import { Gift, Zap, Star, Trophy, Crown, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

const deposits = [
  {
    number: 1,
    title: 'Prima Depunere',
    bonus: '100% până la 2.000 RON',
    spins: '50 rotiri la Gates of Olympus 1000',
    icon: Gift,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '2-5',
    title: 'Depunerile 2-5',
    bonus: '100% până la 2.000 RON fiecare',
    spins: '100 rotiri la Sweet Bonanza 1000',
    icon: Zap,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: 6,
    title: 'A Șasea Depunere',
    bonus: '100% până la 2.000 RON',
    spins: '350 rotiri la Coin Win',
    icon: Star,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    number: 7,
    title: 'A Șaptea Depunere',
    bonus: '100% până la 2.000 RON',
    spins: 'Bonus final',
    icon: Crown,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
];

export function WelcomeBonusSection() {
  return (
    <section id="bonus-bun-venit" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonus de Bun Venit GGBet Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Pachetul complet se desfășoară pe primele 7 depuneri,
            oferindu-ți până la 12.000 RON + 900 rotiri gratuite.
          </p>
        </div>

        {/* Review image */}
        <div className="mb-10 max-w-3xl mx-auto">
          <Image
            src="/images/ggbet-recenzie.webp"
            alt="GGBet Casino Recenzie"
            width={1857}
            height={587}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Deposit cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-8">
          {deposits.map((deposit) => {
            const IconComponent = deposit.icon;
            return (
              <div
                key={deposit.number}
                className={`group relative overflow-hidden rounded-2xl border-2 ${deposit.borderColor} bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`h-2 bg-gradient-to-r ${deposit.bgColor}`} />
                <div className="p-6 space-y-4">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold font-mono text-lg">
                      {deposit.number}
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${deposit.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${deposit.iconColor}`} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-mono text-gray-900">
                    {deposit.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase mb-1">Bonus</p>
                      <p className="text-base font-bold font-mono text-orange-600">{deposit.bonus}</p>
                    </div>

                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase mb-1">Rotiri</p>
                      <p className="text-sm font-medium font-mono text-gray-700">{deposit.spins}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total summary box */}
        <div className="rounded-2xl border-2 border-orange-500 bg-orange-50/50 p-6 text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Total Pachet Bun Venit</p>
          <p className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Până la 12.000 RON <span className="text-orange-500">+</span> 900 Rotiri <span className="text-orange-500">+</span> 50 Fără Depunere
          </p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            Distribuit pe primele 7 depuneri • Rulaj 40x • Depunere minimă 50 RON
          </p>
        </div>

        {/* Warning note */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Atenție:</strong> Se aplică o taxă de 20% la retragere
            dacă fondurile depuse nu au fost rulate de cel puțin 2x. Citește cu atenție termenii și condițiile.
          </p>
        </div>
      </div>
    </section>
  );
}
