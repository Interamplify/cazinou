import { Gamepad2, Tv, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const gameCategories = [
  {
    name: 'Sloturi',
    icon: Gamepad2,
    count: '5000+',
    description: 'Mii de păcănele de la furnizori de top cu funcții speciale',
    features: ['Wilds & Multipliers', 'Buy Feature', 'Megaways', 'High Volatility', 'Stacked Symbols'],
    color: 'orange',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    count: '500+',
    description: 'Ruletă, Blackjack, Baccarat și Poker cu dealeri reali',
    features: ['Ruletă Europeană & Americană', 'Blackjack VIP', 'Baccarat Lightning', 'Casino Holdem', 'Game Shows'],
    color: 'purple',
  },
  {
    name: 'Jocuri Instant/Crash',
    icon: Zap,
    count: '200+',
    description: 'Jocuri rapide bazate 100% pe noroc cu rezultate instant',
    features: ['Spaceman', 'Aviator', 'Crash Games', 'Mini Games', 'Dice & Wheels'],
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', iconBg: 'bg-orange-100' },
  purple: { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100' },
};

const providers = [
  'Pragmatic Play', 'Nolimit City', "Play'n GO", 'Evolution Gaming', 'Red Tiger',
  'Relax Gaming', 'BGaming', 'GameArt', 'Endorphina', 'Betsoft', 'Evoplay', '+60 alții'
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Oferta de Jocuri iWild Casino — Peste 6000 de Titluri
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            iWild Casino pune la dispoziție una dintre cele mai mari biblioteci de jocuri,
            cu peste 6000 de titluri de la 70+ furnizori recunoscuți la nivel global.
          </p>
        </div>

        {/* Games image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/jocuri-iwild-casino.webp"
            alt="Jocuri iWild Casino"
            width={1200}
            height={500}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Game categories */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {gameCategories.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <article
                key={category.name}
                className={`group overflow-hidden rounded-2xl border-2 ${colors.border} bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`h-2 ${colors.bg}`} />
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${colors.iconBg} transition-transform group-hover:scale-110`}>
                      <category.icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-gray-900 text-lg">{category.name}</h3>
                      <p className={`text-sm font-bold ${colors.text}`}>{category.count} jocuri</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Providers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Furnizori de Jocuri — 70+ Provideri Premium
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {providers.map((provider) => (
              <span
                key={provider}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
