import { Gift, Star, Clock, CheckCircle2 } from 'lucide-react';

export function NoDepositBonusSection() {
  return (
    <section id="bonus-fara-depunere" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonus Fără Depunere — 100 Rotiri Gratuite Exclusiv
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Doar pe Cazinou.io poți obține 100 de rotiri gratuite fără depunere la Megapari Casino.
            Acest bonus exclusiv îți permite să testezi platforma fără risc financiar.
          </p>
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
                <h3 className="font-mono font-bold text-gray-900 text-xl">100 Rotiri Fără Depunere</h3>
                <p className="text-sm text-gray-600">Exclusiv pentru utilizatorii Cazinou.io</p>
              </div>
            </div>

            {/* Bonus amount */}
            <div className="mb-6 text-center py-5 rounded-xl bg-white/60 border border-green-200">
              <p className="text-xs text-gray-600 font-medium mb-1">Cod Promoțional</p>
              <p className="text-4xl font-extrabold text-green-600 font-mono">ROTIRI</p>
            </div>

            {/* Details */}
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">100 Rotiri Gratuite</p>
                  <p className="text-sm text-gray-700">Fără depunere necesară</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Rulaj 20x</p>
                  <p className="text-sm text-gray-700">Mai mic decât standard</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Valabil 7 Zile</p>
                  <p className="text-sm text-gray-700">De la activare</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Exclusiv Cazinou.io</p>
                  <p className="text-sm text-gray-700">Nu e ofertă standard</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/go/megapari-casino"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-bold font-mono text-white hover:bg-green-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Obține 100 Rotiri Gratuite
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Cum activezi:</strong> La înregistrare, introdu codul{' '}
            <code className="bg-amber-100 px-2 py-0.5 rounded font-mono text-amber-800">ROTIRI</code>{' '}
            în câmpul de cod promoțional pentru a primi cele 100 de rotiri fără depunere.
          </p>
        </div>
      </div>
    </section>
  );
}
