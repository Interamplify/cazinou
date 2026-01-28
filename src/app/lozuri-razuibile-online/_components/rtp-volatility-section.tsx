import { TrendingUp, BarChart3, Award } from 'lucide-react';

export function RtpVolatilitySection() {
  return (
    <section id="rtp-volatilitate" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-mono">
            RTP, Volatilitate &#537;i Premii la Lozurile Online
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
            &#206;n&#539;elege cum func&#539;ioneaz&#259; returnul la juc&#259;tor, volatilitatea &#537;i structura premiilor
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: RTP */}
          <article className="rounded-xl border border-gray-200 bg-white p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <TrendingUp className="h-5 w-5 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="font-mono font-bold text-gray-900">RTP (Return to Player)</h3>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              RTP-ul lozurilor online variaz&#259; &#238;ntre 85% &#537;i 97%, majoritatea situ&#226;ndu-se &#238;n
              intervalul 90-95%. Un RTP de 95% &#238;nseamn&#259; c&#259;, teoretic, din 100€ paria&#539;i, 95€ se
              &#238;ntorc la juc&#259;tori pe termen lung. Caut&#259; lozuri cu RTP &gt; 94%.
            </p>

            {/* RTP Range Visual */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-gray-500">
                <span>85%</span>
                <span>90%</span>
                <span>95%</span>
                <span>97%</span>
              </div>
              <div className="relative h-3 rounded-full bg-gray-200 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-red-300 via-amber-300 to-green-400" />
                {/* Highlighted zone 90-95% */}
                <div
                  className="absolute inset-y-0 bg-green-500/40 border-x-2 border-green-600"
                  style={{ left: '41.67%', width: '41.67%' }}
                />
              </div>
              <p className="text-xs text-center text-gray-500 font-mono">
                Zona recomandat&#259;: 90-95%
              </p>
            </div>
          </article>

          {/* Card 2: Volatilitate */}
          <article className="rounded-xl border border-gray-200 bg-white p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-mono font-bold text-gray-900">Volatilitate</h3>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Volatilitatea indic&#259; frecven&#539;a &#537;i m&#259;rimea c&#226;&#537;tigurilor: (1) Sc&#259;zut&#259;: c&#226;&#537;tiguri
              frecvente, mici; (2) Medie: balans &#238;ntre frecven&#539;&#259; &#537;i valoare; (3) Ridicat&#259;: c&#226;&#537;tiguri
              rare, mari. Majoritatea lozurilor au volatilitate medie.
            </p>

            {/* Volatility Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Sc&#259;zut&#259;
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Medie
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Ridicat&#259;
              </span>
            </div>
          </article>

          {/* Card 3: Structura Premiilor */}
          <article className="rounded-xl border border-gray-200 bg-white p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-5 w-5 text-purple-600" aria-hidden="true" />
              </div>
              <h3 className="font-mono font-bold text-gray-900">Structura Premiilor</h3>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Premiile maxime variaz&#259; &#238;ntre 100x &#537;i 1000x miza. Lozuri clasice: premii p&#226;n&#259; la 500x.
              Lozuri cu jackpot progresiv: premii nelimitate. Verific&#259; tabela de pl&#259;&#539;i (paytable)
              pentru structura exact&#259; a fiec&#259;rui joc.
            </p>

            {/* Example Calculation */}
            <div className="rounded-lg bg-purple-50 border border-purple-200 p-3">
              <p className="text-xs text-purple-700 font-mono text-center">
                <span className="font-semibold">Exemplu:</span> Miza 1€ x 500x ={' '}
                <span className="font-bold">premiu maxim 500€</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
