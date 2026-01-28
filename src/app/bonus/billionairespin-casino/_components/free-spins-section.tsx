import { Dices, Crown, Info } from 'lucide-react';

const games = [
  {
    id: 'gates-of-ishtar',
    title: 'Gates of Ishtar',
    provider: 'Pragmatic Play',
    rtp: '96.13%',
    volatility: 'Ridicată',
    maxWin: '5000x',
    Icon: Dices,
    color: 'border-purple-200 bg-purple-50/50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 'royal-joker',
    title: 'Royal Joker',
    provider: 'Amusnet',
    rtp: '95.78%',
    volatility: 'Medie',
    maxWin: '1000x',
    Icon: Crown,
    color: 'border-amber-200 bg-amber-50/50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export function FreeSpinsSection() {
  return (
    <section id="rotiri-gratuite" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            250 Rotiri Gratuite — Pe Ce Jocuri Po&#539;i Folosi
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Cele 250 rotiri gratuite se împart astfel: <strong>150 rotiri</strong> la prima depunere
            pe Gates of Ishtar &#537;i <strong>100 rotiri</strong> la a doua depunere pe Royal Joker.
            Ambele sloturi oferă poten&#539;ial mare de câ&#537;tig.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {games.map((game) => (
            <div
              key={game.id}
              className={`rounded-2xl border-2 p-6 lg:p-8 ${game.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${game.iconBg}`}
                >
                  <game.Icon className={`h-7 w-7 ${game.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-gray-900">{game.title}</h3>
                  <p className="text-sm text-gray-600 font-mono">{game.provider}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/80 border border-gray-200 p-3">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wide mb-1">
                    RTP
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-900">{game.rtp}</p>
                </div>
                <div className="rounded-lg bg-white/80 border border-gray-200 p-3">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wide mb-1">
                    Volatilitate
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-900">{game.volatility}</p>
                </div>
                <div className="rounded-lg bg-white/80 border border-gray-200 p-3">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wide mb-1">
                    Câ&#537;tig Max
                  </p>
                  <p className="text-sm font-mono font-bold text-gray-900">{game.maxWin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-200 p-5">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-blue-800">Condi&#539;ii de utilizare:</strong> Rotirile sunt
            creditate automat după depunere &#537;i trebuie folosite în 7 zile. Câ&#537;tigurile
            ob&#539;inute au rulaj de 35x înainte de a putea fi retrase.
          </p>
        </aside>
      </div>
    </section>
  );
}
