import { Gamepad2, Tv, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const gameCategories = [
  {
    name: 'Sloturi',
    icon: Gamepad2,
    count: '20.000+',
    description: 'Cea mai mare colecție de păcănele online din industrie',
    features: ['Sloturi 3D', 'Megaways', 'Crash & Aviator', 'Câștiguri în Cascadă', '200+ Furnizori'],
    color: 'orange',
  },
  {
    name: 'Casino Live',
    icon: Tv,
    count: '1.000+',
    description: 'Mese de joc live cu dealeri reali din studiouri premium',
    features: ['Ruletă Live', 'Blackjack VIP', 'Baccarat Speed', 'Poker Live', 'Game Shows'],
    color: 'purple',
  },
  {
    name: 'Alte Jocuri',
    icon: Zap,
    count: '500+',
    description: 'Jocuri instant, crash games și variante speciale',
    features: ['Plinko', 'Bingo', 'Lozuri Răzuibile', 'Keno Loto', 'Jocuri Crash'],
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', iconBg: 'bg-orange-100' },
  purple: { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100' },
};

const providers = [
  'Pragmatic Play', 'Evolution Gaming', 'NetEnt', "Play'n GO", 'Microgaming',
  'Yggdrasil', 'Red Tiger', 'Nolimit City', 'Push Gaming', 'Relax Gaming', 'BGaming', '+190 alții'
];

export function GamesSection() {
  return (
    <section id="jocuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Oferta de Jocuri Megapari — Peste 20.000 de Titluri
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Megapari are una dintre cele mai mari biblioteci de jocuri din industrie,
            cu peste 20.000 de sloturi și 1.000 de mese live de la 200+ furnizori.
          </p>
        </div>

        {/* Games image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/megapari-jocuri.webp"
            alt="Jocuri Megapari Casino"
            width={1024}
            height={475}
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

        {/* Live casino image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/megapari-live-casino.webp"
            alt="Megapari Live Casino"
            width={1024}
            height={484}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Providers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Furnizori de Jocuri — 200+ Provideri Premium
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
