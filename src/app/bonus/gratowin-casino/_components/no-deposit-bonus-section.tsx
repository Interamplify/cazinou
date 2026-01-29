import { Gift, Star, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function NoDepositBonusSection() {
  return (
    <section id="rotiri-fara-depunere" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            50 Rotiri Gratuite Fără Depunere GratoWin
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Primești automat 50 de rotiri gratuite la înregistrare, fără să fie nevoie de depunere
            sau verificare. Rotirile sunt disponibile pe 3 jocuri selectate.
          </p>
        </div>

        {/* Bonus image */}
        <div className="mb-10 max-w-2xl mx-auto">
          <Image
            src="/images/gratowin-bonus-fara-depunere.webp"
            alt="GratoWin Rotiri Gratuite Fără Depunere"
            width={741}
            height={740}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Main bonus card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50/50 to-emerald-50/30 p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 shadow-sm">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-gray-900 text-xl">50 Rotiri Fără Depunere</h3>
                <p className="text-sm text-gray-600">Automat la înregistrare</p>
              </div>
            </div>

            {/* Games breakdown */}
            <div className="mb-6 space-y-2">
              <p className="text-xs font-mono text-gray-500 uppercase mb-2">Jocuri Eligibile</p>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-green-200">
                  <span className="font-mono font-semibold text-gray-900">Pyramid Spin</span>
                  <span className="text-sm font-bold text-green-600">20 rotiri</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-green-200">
                  <span className="font-mono font-semibold text-gray-900">Demon Diamond</span>
                  <span className="text-sm font-bold text-green-600">15 rotiri</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-green-200">
                  <span className="font-mono font-semibold text-gray-900">Scratch King</span>
                  <span className="text-sm font-bold text-green-600">15 rotiri</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Fără Depunere</p>
                  <p className="text-sm text-gray-700">Nu e nevoie de bani</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Rulaj 35x</p>
                  <p className="text-sm text-gray-700">Pe câștiguri</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Disponibile 2 Zile</p>
                  <p className="text-sm text-gray-700">După înregistrare</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Fără Verificare</p>
                  <p className="text-sm text-gray-700">Doar înregistrare</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/go/gratowin-casino"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-bold font-mono text-white hover:bg-green-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Obține 50 Rotiri Gratuite
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Cum activezi:</strong> Rotirile sunt creditate automat
            după ce completezi înregistrarea. Nu este necesar niciun cod promoțional.
          </p>
        </div>
      </div>
    </section>
  );
}
