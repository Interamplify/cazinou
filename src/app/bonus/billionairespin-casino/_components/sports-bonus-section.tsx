import { Trophy, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

const deposits = [
  {
    order: 'Prima depunere',
    percentage: '100%',
    maxAmount: '500 RON',
    color: 'bg-orange-500',
    width: 'w-full',
  },
  {
    order: 'A doua depunere',
    percentage: '75%',
    maxAmount: '750 RON',
    color: 'bg-orange-400',
    width: 'w-[75%]',
  },
  {
    order: 'A treia depunere',
    percentage: '50%',
    maxAmount: '1.000 RON',
    color: 'bg-orange-300',
    width: 'w-[50%]',
  },
];

const requirements = [
  {
    label: 'Depunere minimă',
    value: '100 RON',
    Icon: Target,
  },
  {
    label: 'Rulaj necesar',
    value: '5x (mult mai mic!)',
    Icon: TrendingUp,
  },
  {
    label: 'Valabil pentru',
    value: 'Pariuri combinate cu 3+ evenimente',
    Icon: CheckCircle2,
  },
  {
    label: 'Cotă minimă pe eveniment',
    value: '1.4',
    Icon: CheckCircle2,
  },
];

export function SportsBonusSection() {
  return (
    <section id="bonus-pariuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonus Pariuri Sportive — 225% până la 2.250 RON
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Dacă preferi pariurile sportive, Billionaire Spin oferă un bonus impresionant de{' '}
            <strong>225%</strong> distribuit pe primele 3 depuneri, cu cerin&#539;e de rulaj mult
            mai avantajoase decât bonusul de cazinou.
          </p>
        </div>

        {/* Deposit breakdown */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Trophy className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-mono font-bold text-lg text-gray-900">
              Distribuire Bonus pe Depuneri
            </h3>
          </div>

          <div className="space-y-6">
            {deposits.map((deposit, index) => (
              <div key={deposit.order}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-mono font-semibold text-gray-700">
                      {deposit.order}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-mono font-bold text-orange-600">
                      {deposit.percentage}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">până la {deposit.maxAmount}</span>
                  </div>
                </div>
                <div className="h-3 w-full rounded-full bg-gray-100">
                  <div className={`h-3 rounded-full ${deposit.color} ${deposit.width}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-orange-50 border border-orange-100 p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-orange-800">Total disponibil:</strong> Depunând{' '}
              <strong>2.250 RON</strong> (500 + 750 + 1.000), prime&#537;ti un bonus suplimentar de{' '}
              <strong>2.250 RON</strong>, ajungând la un sold total de <strong>4.500 RON</strong>{' '}
              pentru pariuri sportive.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
          <h3 className="font-mono font-bold text-lg text-gray-900 mb-5">Cerin&#539;e Bonus</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {requirements.map((req) => (
              <div
                key={req.label}
                className="flex items-start gap-3 rounded-lg bg-gray-50 border border-gray-200 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <req.Icon className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wide mb-1">
                    {req.label}
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-900">{req.value}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-green-800">Avantaj major:</strong> Rulajul de doar{' '}
              <strong>5x</strong> este considerabil mai mic decât la bonusurile de cazinou (35x),
              făcând acest bonus mult mai u&#537;or de îndeplinit pentru pariori. Asigură-te că
              biletele tale con&#539;in minimum 3 evenimente, fiecare cu cotă de cel pu&#539;in 1.4.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
