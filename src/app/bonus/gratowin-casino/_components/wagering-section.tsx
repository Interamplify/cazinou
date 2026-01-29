import { Calculator, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function WageringSection() {
  return (
    <section id="rulaj" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cerințe de Rulaj și Condiții Bonus GratoWin
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Înțelege condițiile de rulaj pentru a-ți planifica strategia de joc
          </p>
        </div>

        {/* Main wagering info */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Wagering requirement card - Deposit Bonus */}
          <div className="rounded-2xl border-2 border-orange-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Bonus la Depunere</h3>
            </div>

            <div className="rounded-xl bg-orange-50 p-5 text-center mb-5">
              <p className="text-5xl font-extrabold text-orange-600 font-mono">35x</p>
              <p className="text-sm text-gray-600 mt-1">Suma bonusului</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Rulaj doar pe suma bonus</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Valabil 30 zile de la activare</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Sloturi contribuie 100%</span>
              </div>
            </div>
          </div>

          {/* Wagering requirement card - No Deposit */}
          <div className="rounded-2xl border-2 border-green-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Calculator className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Rotiri Fără Depunere</h3>
            </div>

            <div className="rounded-xl bg-green-50 p-5 text-center mb-5">
              <p className="text-5xl font-extrabold text-green-600 font-mono">35x</p>
              <p className="text-sm text-gray-600 mt-1">Câștigurile din rotiri</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Disponibile 2 zile după înregistrare</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Fără cod promoțional necesar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">50 rotiri pe 3 jocuri selectate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example calculation */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-orange-600" />
            Exemplu de Calcul Rulaj (Bonus Depunere)
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Depunere</p>
              <p className="text-xl font-bold text-gray-900 font-mono">500 RON</p>
            </div>
            <div className="rounded-xl bg-orange-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Bonus 100%</p>
              <p className="text-xl font-bold text-orange-600 font-mono">500 RON</p>
            </div>
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Rulaj necesar (35x)</p>
              <p className="text-xl font-bold text-green-600 font-mono">17.500 RON</p>
            </div>
          </div>
        </div>

        {/* Important warning - Live Casino */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-mono font-bold text-red-700">Atenție Live Casino!</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Pentru jocurile de Live Casino, cerințele de rulaj pot ajunge la{' '}
            <strong>250x sau chiar 500x</strong>, condiții considerate foarte ridicate și aproape
            imposibil de îndeplinit. Recomandăm să eviți bonusurile pentru Live Casino.
          </p>
        </div>
      </div>
    </section>
  );
}
