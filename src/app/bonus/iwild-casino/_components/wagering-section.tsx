import { Calculator, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export function WageringSection() {
  return (
    <section id="rulaj" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cerințe de Rulaj și Condiții Bonus iWild Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Înțelege condițiile de rulaj pentru a-ți planifica strategia de joc și a maximiza beneficiile
          </p>
        </div>

        {/* Main wagering info */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Wagering requirement card */}
          <div className="rounded-2xl border-2 border-orange-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Cerință de Rulaj</h3>
            </div>

            <div className="rounded-xl bg-orange-50 p-5 text-center mb-5">
              <p className="text-5xl font-extrabold text-orange-600 font-mono">35x</p>
              <p className="text-sm text-gray-600 mt-1">Suma bonusului</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Rulaj doar pe suma bonus (nu pe depunere + bonus)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Sloturi contribuie 100% la rulaj</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Jocuri de masă: 10% contribuție</span>
              </div>
            </div>
          </div>

          {/* Important limit card */}
          <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Limită Retragere Câștiguri</h3>
            </div>

            <div className="rounded-xl bg-amber-50 p-5 text-center mb-5">
              <p className="text-5xl font-extrabold text-amber-600 font-mono">5x</p>
              <p className="text-sm text-gray-600 mt-1">Valoarea bonusului primit</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Exemplu: Bonus 500 RON → Maxim 2.500 RON retragere din câștiguri</span>
              </div>
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Rotiri gratuite: limită de retragere 50-75 EUR</span>
              </div>
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Verifică T&C pentru detalii complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example calculation */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-orange-600" />
            Exemplu de Calcul Rulaj
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Depunere</p>
              <p className="text-xl font-bold text-gray-900 font-mono">500 RON</p>
            </div>
            <div className="rounded-xl bg-orange-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Bonus 200%</p>
              <p className="text-xl font-bold text-orange-600 font-mono">1.000 RON</p>
            </div>
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Rulaj necesar (35x)</p>
              <p className="text-xl font-bold text-green-600 font-mono">35.000 RON</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">
            Cu o miză medie de 5 RON/spin, ai nevoie de aproximativ 7.000 de rotiri pentru a îndeplini rulajul.
          </p>
        </div>

        {/* Additional important rule */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-red-700">Regulă Importantă:</strong> Toate depunerile trebuie rulate de
            cel puțin <strong>3x</strong> înainte de a putea solicita o retragere, chiar dacă nu ai revendicat
            un bonus. Această regulă este o măsură împotriva spălării banilor.
          </p>
        </div>
      </div>
    </section>
  );
}
