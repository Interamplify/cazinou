import { Coins, Calculator, Lightbulb } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="preturi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Preturi si Mize la Lozurile Online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Ghid complet de costuri — cat costa un loz razuibil online si cum variaza mizele
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            {/* Left card: Pricing Structure */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                  <Coins className="h-4 w-4 text-orange-600" />
                </div>
                <h3 className="font-mono font-bold text-gray-900">Structura Preturilor</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">&#8226;</span>
                  <div>
                    <span className="font-semibold text-gray-900">Miza minima:</span>
                    <span className="text-gray-600"> 0.10 EUR - 1 EUR (in functie de joc)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">&#8226;</span>
                  <div>
                    <span className="font-semibold text-gray-900">Miza maxima:</span>
                    <span className="text-gray-600">
                      {' '}
                      10 EUR - 100 EUR (unele jocuri permit pana la 500 EUR)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">&#8226;</span>
                  <div>
                    <span className="font-semibold text-gray-900">Miza medie recomandata:</span>
                    <span className="text-gray-600">
                      {' '}
                      0.50 EUR - 2 EUR pentru sesiuni echilibrate
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">&#8226;</span>
                  <div>
                    <span className="font-semibold text-gray-900">Flexibilitate:</span>
                    <span className="text-gray-600"> poti schimba miza intre fiecare scratch</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right card: Practical Examples */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <Calculator className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-mono font-bold text-gray-900">Exemple Practice</h3>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="font-mono text-sm font-semibold text-gray-800 mb-1">
                    Joc A (miza 0.20 EUR, RTP 95%, 100 lozuri):
                  </p>
                  <ul className="text-sm text-gray-600 space-y-0.5">
                    <li>Investitie: 20 EUR</li>
                    <li>Return mediu teoretic: 19 EUR</li>
                    <li>Premiu maxim posibil (500x): 100 EUR</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="font-mono text-sm font-semibold text-gray-800 mb-1">
                    Joc B (miza 1 EUR, RTP 93%, 50 lozuri):
                  </p>
                  <ul className="text-sm text-gray-600 space-y-0.5">
                    <li>Investitie: 50 EUR</li>
                    <li>Return mediu teoretic: 46.50 EUR</li>
                    <li>Premiu maxim posibil (300x): 300 EUR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="rounded-xl border-2 border-orange-200 bg-orange-50/30 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 flex-shrink-0 mt-0.5">
                <Lightbulb className="h-4 w-4 text-orange-600" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Sfat:</strong> Incepe cu mize mici (0.20 EUR -
                0.50 EUR) pentru a testa jocul. Creste miza doar daca ai un buget confortabil si
                intelegi complet mecanica jocului.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
