import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const freeSpinsGames = [
  { game: 'Pyramid Spin', spins: 20 },
  { game: 'Demon Diamond', spins: 15 },
  { game: 'Scratch King', spins: 15 },
];

export function NoDepositBonusSection() {
  return (
    <section id="rotiri-fara-depunere" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-green-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            50 Rotiri Gratuite Fără Depunere GratoWin
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Primești automat 50 de rotiri gratuite la înregistrare, fără să fie nevoie de depunere
            sau verificare.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Image */}
          <div>
            <Image
              src="/images/gratowin-bonus-fara-depunere.webp"
              alt="GratoWin Rotiri Gratuite Fără Depunere"
              width={741}
              height={740}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div>
            <div className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm mb-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Sparkles className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-xl">
                    50 Rotiri Gratuite
                  </h3>
                  <p className="text-sm text-green-600 font-semibold">Fără Depunere • Fără Verificare</p>
                </div>
              </div>

              {/* Games breakdown */}
              <div className="space-y-3 mb-5">
                {freeSpinsGames.map((item) => (
                  <div
                    key={item.game}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200"
                  >
                    <span className="font-mono font-semibold text-gray-900">{item.game}</span>
                    <span className="text-lg font-bold text-green-600">{item.spins} rotiri</span>
                  </div>
                ))}
              </div>

              {/* Conditions */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Rulaj: 35x câștigurile</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Disponibile 2 zile după înregistrare</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Fără cod promoțional necesar</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/go/gratowin-casino"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              Ia 50 Rotiri Gratuite
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
