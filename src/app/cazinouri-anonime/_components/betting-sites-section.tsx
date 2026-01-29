import { Trophy, CheckCircle2 } from 'lucide-react';

export function BettingSitesSection() {
  return (
    <section id="case-pariuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-green-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Case Pariuri Fără Verificare
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-gray-900 text-lg mb-2">
                  Pariuri Sportive Fără KYC
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Toate informațiile despre cazinourile anonime se aplică și în cazul pariurilor sportive.
                  Multe dintre site-urile de jocuri de noroc crypto includ atât o secțiune de casino,
                  cât și o secțiune de pariuri fără verificare.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-green-50 p-5 border border-green-200">
              <h4 className="font-mono font-semibold text-green-800 mb-3">
                Ce poți face la case de pariuri crypto:
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Pariuri sportive live</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Pariuri pe eSports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Depuneri instant cu crypto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Retrageri rapide (sub 1 oră)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Bonusuri de pariere</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Fără limite de câștig</span>
                </div>
              </div>
            </div>
          </div>

          {/* Popular recommendations */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
              Recomandări Cazinouri Crypto Anonime
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="font-mono font-semibold text-gray-900 mb-1">BetPanda</p>
                <p className="text-sm text-gray-600">
                  100% până la 1 BTC. Suportă Lightning Network pentru transferuri instantanee.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="font-mono font-semibold text-gray-900 mb-1">WSM Casino</p>
                <p className="text-sm text-gray-600">
                  Pachet de bun venit 200% până la 25.000$.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="font-mono font-semibold text-gray-900 mb-1">CoinCasino</p>
                <p className="text-sm text-gray-600">
                  Bonus 200% până la 30.000$.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="font-mono font-semibold text-gray-900 mb-1">Cryptorino</p>
                <p className="text-sm text-gray-600">
                  Cazino crypto anonim cu retrageri rapide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
