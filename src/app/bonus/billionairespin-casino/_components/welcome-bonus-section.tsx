import { Gift, Zap, Trophy } from 'lucide-react';

const deposits = [
  {
    number: 1,
    title: 'Prima Depunere',
    bonus: '100% p&#226;n&#259; la 750 RON',
    freeSpins: '150 Rotiri Gratuite',
    minDeposit: '100 RON minim',
    icon: Gift,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: 2,
    title: 'A Doua Depunere',
    bonus: '55% p&#226;n&#259; la 750 RON',
    freeSpins: '100 Rotiri Gratuite',
    minDeposit: '100 RON minim',
    icon: Zap,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: 3,
    title: 'A Treia Depunere',
    bonus: '100% p&#226;n&#259; la 750 RON',
    freeSpins: '&#8212;',
    minDeposit: '100 RON minim',
    icon: Trophy,
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
            Bonus de Bun Venit Billionairespin &#8212; 255% + 250 Rotiri pe 3 Depuneri
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Pachetul complet se desf&#259;&#537;oar&#259; pe primele trei depuneri,
            oferindu-&#539;i un total de 2.250 RON bonus &#537;i 250 rotiri gratuite
            pentru a explora biblioteca de sloturi.
          </p>
        </div>

        {/* Deposit cards grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-8">
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
                  <h3 className="text-xl font-bold font-mono text-gray-900">
                    {deposit.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase mb-1">Bonus</p>
                      <p className="text-lg font-bold font-mono text-orange-600" dangerouslySetInnerHTML={{ __html: deposit.bonus }} />
                    </div>

                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase mb-1">Rotiri Gratuite</p>
                      <p className="text-base font-semibold font-mono text-gray-900" dangerouslySetInnerHTML={{ __html: deposit.freeSpins }} />
                    </div>

                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase mb-1">Depunere Minim&#259;</p>
                      <p className="text-sm font-medium font-mono text-gray-700">{deposit.minDeposit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total summary box */}
        <div className="rounded-2xl border-2 border-orange-500 bg-orange-50/50 p-6 text-center">
          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Total Pachet</p>
          <p className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            2.250 RON <span className="text-orange-500">+</span> 250 Rotiri Gratuite
          </p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            Distributed pe primele 3 depuneri &#8226; Rulaj 35x &#8226; Activare automat&#259;
          </p>
        </div>
      </div>
    </section>
  );
}
