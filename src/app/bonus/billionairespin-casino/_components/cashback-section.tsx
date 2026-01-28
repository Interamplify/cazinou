import { DollarSign, CheckCircle2 } from 'lucide-react';

interface VIPLevel {
  name: string;
  cashback: string;
  borderColor: string;
  bgColor: string;
  iconColor: string;
}

const vipLevels: VIPLevel[] = [
  {
    name: 'Bronze',
    cashback: '10%',
    borderColor: 'border-gray-300',
    bgColor: 'bg-gray-50/50',
    iconColor: 'text-gray-600',
  },
  {
    name: 'Silver',
    cashback: '15%',
    borderColor: 'border-gray-400',
    bgColor: 'bg-gray-100/50',
    iconColor: 'text-gray-700',
  },
  {
    name: 'Gold',
    cashback: '20%',
    borderColor: 'border-amber-300',
    bgColor: 'bg-amber-50/50',
    iconColor: 'text-amber-600',
  },
  {
    name: 'Platinum',
    cashback: '25%',
    borderColor: 'border-purple-300',
    bgColor: 'bg-purple-50/50',
    iconColor: 'text-purple-600',
  },
];

const howItWorks = [
  'Calculat automat în fiecare luni pentru pierderile din săptămâna anterioară',
  'Fără cerințe de rulaj — poți retrage imediat sau juca cu banii creditați',
  'Cashback minim eligibil: 10 RON (sub acest prag nu se acordă)',
  'Cashback maxim per săptămână: 10.000 RON',
];

export function CashbackSection() {
  return (
    <section id="cashback" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cashback Săptămânal — Recuperează până la 25% din Pierderi
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Billionairespin oferă un sistem de cashback săptămânal bazat pe nivelul tău VIP. Cu cât
            joci mai mult, cu atât crește procentul de cashback pe care îl primești automat în
            fiecare luni.
          </p>
        </div>

        {/* VIP Level Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {vipLevels.map((level) => (
            <div
              key={level.name}
              className={`group rounded-2xl border-2 p-6 ${level.borderColor} ${level.bgColor} transition-all hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <DollarSign className={`h-7 w-7 ${level.iconColor}`} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-center font-mono font-bold text-gray-900 text-lg mb-2">
                {level.name}
              </h3>
              <div className="text-center">
                <span className={`text-3xl font-extrabold ${level.iconColor}`}>
                  {level.cashback}
                </span>
                <p className="text-sm text-gray-600 mt-1">cashback</p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Cum Funcționează Cashback-ul?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-orange-700">Important:</strong> Cashback-ul se calculează doar
            pe pierderile nete (depuneri minus retrageri) și se aplică doar la jocurile eligibile.
            Verifică secțiunea „Cashback" din contul tău pentru detalii despre soldul curent.
          </p>
        </div>
      </div>
    </section>
  );
}
