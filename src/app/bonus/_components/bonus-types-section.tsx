import { Gift, Sparkles, RotateCcw, Percent, TrendingUp, Award } from 'lucide-react';

const bonusTypes = [
  {
    title: 'Bonus de Bun Venit',
    Icon: Gift,
    desc: 'Ofertă acordată noilor jucători la prima depunere. De obicei un procent din sumă (ex: 100%) până la un plafon maxim.',
    example: 'Depui 200€, primești 200€ bonus = 400€ total de jucat.',
  },
  {
    title: 'Bonus Fără Depunere',
    Icon: Sparkles,
    desc: 'Credit gratuit oferit doar pentru înregistrare, fără a fi necesară o depunere. Ideal pentru testarea platformei.',
    example: '10€ gratis la validarea contului — joci fără risc propriu.',
  },
  {
    title: 'Rotiri Gratuite',
    Icon: RotateCcw,
    desc: 'Spin-uri oferite la sloturi specifice, fie ca bonus de bun venit, fie în promoții săptămânale.',
    example: '50 rotiri gratuite la Book of Dead, valoare spin 0,20€.',
  },
  {
    title: 'Cashback',
    Icon: Percent,
    desc: 'Returnarea unui procent din pierderile nete pe o perioadă definită. Poate fi cu sau fără rulaj.',
    example: '10% cashback săptămânal — pierzi 500€, primești 50€ înapoi.',
  },
  {
    title: 'Bonus de Reload',
    Icon: TrendingUp,
    desc: 'Bonus pentru depunerile ulterioare, nu doar prima. Procent mai mic decât bun venit, dar recurent.',
    example: '50% reload până la 100€ în fiecare vineri.',
  },
  {
    title: 'Program VIP',
    Icon: Award,
    desc: 'Sistem de loialitate cu niveluri, puncte și recompense exclusive: cashback mărit, manager dedicat, retrageri prioritare.',
    example: 'Nivel Platinum: 15% cashback, limită retragere 50.000€/lună.',
  },
];

export function BonusTypesSection() {
  return (
    <section id="explicatii" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de Bonusuri la Cazino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Fiecare tip de bonus are avantaje și condiții specifice. Cunoaște-le pentru a alege
            ofertele potrivite stilului tău de joc.
          </p>
        </div>

        {/* Bonus types grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bonusTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <item.Icon className="h-4 w-4 text-orange-600" />
                </div>
                <p className="text-sm font-bold font-mono text-gray-900">{item.title}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
              <div className="rounded-lg bg-orange-50 border border-orange-100 p-2.5">
                <p className="text-[10px] font-mono font-bold text-orange-700 uppercase tracking-wide mb-1">
                  Exemplu
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
