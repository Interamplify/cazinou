import { Gamepad2, Tv, Zap, Ticket, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const gameCategories = [
  {
    name: 'Sloturi',
    icon: Gamepad2,
    count: '150-340',
    description: 'Sloturi clasice, Megaways, jackpoturi și funcția Bonus Buy',
    color: 'purple',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    count: '~10 mese',
    description: 'Ruletă, blackjack și baccarat cu dealeri reali',
    color: 'red',
  },
  {
    name: 'Jocuri Instant',
    icon: Zap,
    count: '50+',
    description: 'Spaceman, Aero, Plinko și alte jocuri crash',
    color: 'amber',
  },
  {
    name: 'Lozuri Răzuibile',
    icon: Ticket,
    count: '80+',
    description: 'Cea mai mare colecție de scratch cards',
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  purple: { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
  red: { border: 'border-red-300', bg: 'bg-red-50', text: 'text-red-700', iconBg: 'bg-red-100' },
  amber: { border: 'border-amber-300', bg: 'bg-amber-50', text: 'text-amber-700', iconBg: 'bg-amber-100' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100' },
};

const providers = [
  'Pragmatic Play', 'Evolution', 'NetEnt', "Play'n GO", 'Novomatic',
  'Fugaso', 'Amusnet', 'PGSoft', 'Playson', 'BGaming', 'KaGaming', 'NoLimitCity'
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Oferta de Jocuri GratoWin Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Aproximativ 400-900 de jocuri organizate în categorii pentru navigare ușoară.
          </p>
        </div>

        {/* Games images */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          <Image
            src="/images/gratowin-sloturi.webp"
            alt="GratoWin Sloturi"
            width={1024}
            height={360}
            className="rounded-xl shadow-lg w-full h-auto"
          />
          <Image
            src="/images/gratowin-live-casino.webp"
            alt="GratoWin Live Casino"
            width={1024}
            height={381}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Game categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {gameCategories.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <article
                key={category.name}
                className={`rounded-2xl border-2 ${colors.border} bg-white p-5 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.iconBg}`}>
                    <category.icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-gray-900 text-sm">{category.name}</h3>
                    <p className={`text-xs font-semibold ${colors.text}`}>{category.count} jocuri</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </article>
            );
          })}
        </div>

        {/* Providers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Furnizori de Jocuri
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {providers.map((provider) => (
              <span
                key={provider}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
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
