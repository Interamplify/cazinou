import { TrendingUp, BarChart3, Award } from 'lucide-react';

export function RtpVolatilitySection() {
  return (
    <section id="rtp-volatilitate" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-mono">
            RTP, Volatilitate si Premii la Lozurile Online
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
            Intelege cum functioneaza returnul la jucator, volatilitatea si structura premiilor
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
              RTP-ul lozurilor online variaza intre 85% si 97%, majoritatea situandu-se in
              intervalul 90-95%. Un RTP de 95% inseamna ca, teoretic, din 100€ pariati, 95€ se
              intorc la jucatori pe termen lung. Cauta lozuri cu RTP &gt; 94%.
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
                Zona recomandata: 90-95%
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
              Volatilitatea indica frecventa si marimea castigurilor: (1) Scazuta: castiguri
              frecvente, mici; (2) Medie: balans intre frecventa si valoare; (3) Ridicata: castiguri
              rare, mari. Majoritatea lozurilor au volatilitate medie.
            </p>

            {/* Volatility Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Scazuta
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Medie
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Ridicata
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
              Premiile maxime variaza intre 100x si 1000x miza. Lozuri clasice: premii pana la 500x.
              Lozuri cu jackpot progresiv: premii nelimitate. Verifica tabela de plati (paytable)
              pentru structura exacta a fiecarui joc.
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
