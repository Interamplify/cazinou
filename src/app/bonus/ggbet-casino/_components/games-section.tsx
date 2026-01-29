import { Gamepad2, Tv, Zap, Trophy, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const gameCategories = [
  {
    name: 'Sloturi',
    icon: Gamepad2,
    count: '7.000+',
    description: 'Colecție vastă de păcănele de la aproape 100 de furnizori de top',
    features: ['Megaways', 'Buy Feature', 'Jackpoturi', 'Jocuri Originale GGBet'],
    color: 'orange',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    count: '560+',
    description: 'Mese de joc live cu dealeri reali din studiouri premium',
    features: ['Ruletă Live', 'Blackjack', 'Baccarat', 'Game Shows'],
    color: 'purple',
  },
  {
    name: 'Jocuri Instant',
    icon: Zap,
    count: '186+',
    description: 'Aviator, JetX, Plinko și alte jocuri crash cu câștiguri rapide',
    features: ['Aviator', 'JetX', 'Plinko Rush', 'Keno Loto'],
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', iconBg: 'bg-orange-100' },
  purple: { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100' },
};

const providers = [
  'Pragmatic Play', 'Evolution', 'NetEnt', "Play'n GO", 'Endorphina',
  'Evoplay', '1spin4win', 'Kalamba', 'Amusnet (EGT)', 'Betsoft', 'Platipus', '+90 alții'
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Oferta de Jocuri GGBet — Peste 8.000 de Titluri
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            GGBet are una dintre cele mai vaste biblioteci de jocuri din industrie,
            cu peste 8.000 de titluri de la aproape 100 de furnizori de top.
          </p>
        </div>

        {/* Games image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/ggbet-jocuri.webp"
            alt="Jocuri GGBet Casino"
            width={1463}
            height={608}
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

        {/* Tournaments highlight */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/30 p-6 shadow-sm mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Trophy className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Turnee de Sloturi Active</h3>
              <p className="text-sm text-amber-700 font-semibold">Premii generoase și calificare ușoară</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            GGBet organizează turnee constante cu premii atractive. Calificarea presupune doar
            10 runde jucate la jocurile incluse. La fiecare 4 RON câștigați primești un punct
            în clasament.
          </p>
        </div>

        {/* Providers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Furnizori de Jocuri — Aproape 100 de Provideri
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
