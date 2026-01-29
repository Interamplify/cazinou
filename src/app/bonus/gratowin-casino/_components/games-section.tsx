import { Gamepad2, Tv, Zap, Ticket, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const gameCategories = [
  {
    name: 'Sloturi',
    icon: Gamepad2,
    count: '150-340',
    description: 'Sloturi clasice, Megaways, jackpoturi și funcția Bonus Buy',
    features: ['Sloturi 3D', 'Megaways', 'Bonus Buy', 'Jackpoturi'],
    color: 'orange',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    count: '~10 mese',
    description: 'Ruletă, blackjack și baccarat cu dealeri reali',
    features: ['Ruletă Live', 'Blackjack', 'Baccarat', 'Game Shows'],
    color: 'purple',
  },
  {
    name: 'Jocuri Instant',
    icon: Zap,
    count: '50+',
    description: 'Spaceman, Aero, Plinko și alte jocuri crash',
    features: ['Crash Games', 'Plinko', 'Aviator', 'Instant Win'],
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', iconBg: 'bg-orange-100' },
  purple: { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100' },
};

const providers = [
  'Pragmatic Play', 'Evolution', 'NetEnt', "Play'n GO", 'Novomatic',
  'Fugaso', 'Amusnet', 'PGSoft', 'Playson', 'BGaming', 'KaGaming', 'NoLimitCity'
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Oferta de Jocuri GratoWin — Peste 400 de Titluri
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            GratoWin oferă aproximativ 400-900 de jocuri organizate în categorii,
            inclusiv sloturi, casino live și jocuri instant de la furnizori de top.
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

        {/* Scratch cards highlight */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/30 p-6 shadow-sm mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Ticket className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Lozuri Răzuibile — 80+ Jocuri</h3>
              <p className="text-sm text-amber-700 font-semibold">Cea mai mare colecție de scratch cards</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            GratoWin are cea mai impresionantă colecție de lozuri răzuibile digitale din industrie,
            cu peste 80 de titluri pentru cine caută câștiguri rapide și distractive.
          </p>
        </div>

        {/* Providers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Furnizori de Jocuri — Provideri Premium
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
