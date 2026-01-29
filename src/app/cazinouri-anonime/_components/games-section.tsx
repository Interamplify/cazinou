import { Gamepad2, Tv, Spade, Dices, Zap } from 'lucide-react';

const gameTypes = [
  {
    name: 'Jocuri Slot',
    icon: Gamepad2,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    description: 'Peste 5.000 de titluri de păcănele. Multe cazinouri oferă rotiri gratuite, precum cele 200 rotiri fără verificare KYC.',
  },
  {
    name: 'Ruletă',
    icon: Dices,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    description: 'Versiuni europeană și americană. Mese de ruletă live cu dealer real prin streaming.',
  },
  {
    name: 'Blackjack',
    icon: Spade,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    description: 'Mese exclusive de blackjack live în lobby-uri cu dealeri profesioniști.',
  },
  {
    name: 'Poker',
    icon: Spade,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    description: 'Video poker în mai multe variante: Texas Hold\'em, Omaha sau poker live.',
  },
  {
    name: 'Jocuri Provably Fair',
    icon: Zap,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    description: 'Jocuri unice precum Crash, Plinko, Dice, bingo sau keno cu tehnologie care garantează corectitudinea.',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    description: 'Mese live cu dealeri reali pentru ruletă, blackjack, baccarat și game shows.',
  },
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ce Jocuri Pot Juca la Cazinouri Fără Verificare?
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Cazinourile anonime oferă o gamă variată de jocuri, adesea depășind oferta
            cazinourilor tradiționale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gameTypes.map((game) => (
            <article
              key={game.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${game.iconBg}`}>
                  <game.icon className={`h-6 w-6 ${game.iconColor}`} />
                </div>
                <h3 className="font-mono font-bold text-gray-900">{game.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{game.description}</p>
            </article>
          ))}
        </div>

        {/* Provably Fair explanation */}
        <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50/50 p-6 lg:p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
              <Zap className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-purple-900 text-lg mb-2">
                Ce este Provably Fair?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Multe cazinouri crypto oferă jocuri cu tehnologia <strong>Provably Fair</strong> care
                utilizează hashing criptografic și blockchain pentru a permite jucătorilor să verifice
                independent și matematic corectitudinea fiecărui rezultat. Astfel, ai garanția că
                jocurile nu sunt manipulate. Caută secțiunea &quot;Provably Fair Games&quot; pe site-ul cazinoului.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
