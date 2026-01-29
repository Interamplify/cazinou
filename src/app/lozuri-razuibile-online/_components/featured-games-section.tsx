import { Hash, Grid3X3, Flame, Lock } from 'lucide-react';

const games = [
  {
    name: 'Scratch Match',
    provider: 'Evoplay',
    description:
      'Joc de tip număr cu 5 numere norocoase între 0-100. Alegi să joci 10 sau 20 de numere, fiecare cu un multiplicator variabil. Bonus special la potrivirea 777 cu super premiu. RTP 96%, premiu maxim 500x.',
    features: [
      '5 numere norocoase',
      '10 sau 20 numere jucate',
      'Bonus 777',
      'Multiplicatori variabili',
    ],
    rtp: '96%',
    maxWin: '500x',
    minBet: '0.20€',
    Icon: Hash,
    color: 'orange',
  },
  {
    name: 'Scratch Alpaca',
    provider: 'BGaming',
    description:
      'Loz clasic cu 3 variante: Bronze, Silver, Gold. Potrivește 3 simboluri identice pentru a câștiga. Valoarea numerelor se înmulțește cu miza. Funcții Auto Play și Scratch All pentru joc rapid.',
    features: [
      '3 variante (Bronze/Silver/Gold)',
      'Auto Play',
      'Scratch All',
      'Simboluri cu numere',
    ],
    rtp: '95%',
    maxWin: '250x',
    minBet: '0.10€',
    Icon: Grid3X3,
    color: 'blue',
  },
  {
    name: 'Demon Train Scratch',
    provider: 'Relax Gaming',
    description:
      'Loz tematic dark cu premiu maxim 500x. Feature special "Wild Ride" activează multiplicatori progresivi. Design întunecat cu grafică de înaltă calitate și animații fluide.',
    features: ['Temă dark', 'Wild Ride feature', 'Multiplicatori progresivi', 'Grafică HD'],
    rtp: '94%',
    maxWin: '500x',
    minBet: '0.50€',
    Icon: Flame,
    color: 'red',
  },
  {
    name: 'The Bank Heist Scratchcard',
    provider: 'Dragon Gaming',
    description:
      'Joc tematic cu jaful unei bănci. Simbolul Vault trigger-ează până la 10 scratch-uri gratuite. Premiu maxim 500x miza, volatilitate medie, ideal pentru sesiuni lungi.',
    features: [
      'Temă heist',
      'Până la 10 scratch-uri gratuite',
      'Simbol Vault special',
      'Volatilitate medie',
    ],
    rtp: '93.5%',
    maxWin: '500x',
    minBet: '0.20€',
    Icon: Lock,
    color: 'purple',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
};

export function FeaturedGamesSection() {
  return (
    <section id="jocuri-populare" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-mono">
            Jocuri Populare de Lozuri Razuibile
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
            Analiza celor mai apreciate scratch cards disponibile la cazinouri internaționale
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {games.map((game) => {
            const colors = colorClasses[game.color];
            return (
              <article
                key={game.name}
                className="border-2 border-gray-200 bg-white rounded-2xl p-6 lg:p-8 hover:border-gray-300 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg}`}
                  >
                    <game.Icon className={`h-6 w-6 ${colors.text}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-mono">{game.name}</h3>
                    <p className="text-sm text-gray-500">{game.provider}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-5">{game.description}</p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {game.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-mono font-semibold text-green-700">
                    RTP: {game.rtp}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-semibold text-orange-700">
                    Max Win: {game.maxWin}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-mono font-semibold text-gray-700">
                    Min Bet: {game.minBet}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
