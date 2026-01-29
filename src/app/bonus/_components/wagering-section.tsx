import { Calculator, BarChart3, Gamepad2, Lightbulb, AlertTriangle } from 'lucide-react';

const wageringTiers = [
  {
    range: 'Sub 30x',
    label: 'Excelent',
    color: 'bg-green-500',
    width: 'w-[95%]',
    note: 'Rar întâlnit; merită valorificat imediat',
  },
  {
    range: '30x – 40x',
    label: 'Bun',
    color: 'bg-emerald-500',
    width: 'w-[75%]',
    note: 'Standard pentru oferte solide',
  },
  {
    range: '40x – 50x',
    label: 'Acceptabil',
    color: 'bg-amber-500',
    width: 'w-[55%]',
    note: 'Necesită mai mult joc, dar realizabil',
  },
  {
    range: '50x – 60x',
    label: 'Dificil',
    color: 'bg-orange-500',
    width: 'w-[35%]',
    note: 'Probabilitate redusă de profit',
  },
  {
    range: 'Peste 60x',
    label: 'De evitat',
    color: 'bg-red-500',
    width: 'w-[15%]',
    note: 'Aproape imposibil de îndeplinit cu câștig',
  },
];

const gameContributions = [
  { game: 'Sloturi / Păcănele', contrib: '100%', bar: 'w-full', color: 'bg-green-500' },
  { game: 'Video Poker', contrib: '10–25%', bar: 'w-[25%]', color: 'bg-amber-500' },
  {
    game: 'Jocuri de masă (ruletă, blackjack)',
    contrib: '10–20%',
    bar: 'w-[20%]',
    color: 'bg-amber-500',
  },
  {
    game: 'Cazinou Live (Evolution, Pragmatic Live)',
    contrib: '5–10%',
    bar: 'w-[10%]',
    color: 'bg-orange-500',
  },
  {
    game: 'Jackpoturi progresive',
    contrib: 'Frecvent excluse',
    bar: 'w-[3%]',
    color: 'bg-red-500',
  },
];

const mistakes = [
  {
    title: 'Ignorarea T&C',
    desc: 'Citește regulile bonusului: rulaj, jocuri eligibile, plafon retragere, termen.',
  },
  {
    title: 'Conturi multiple',
    desc: 'Strict interzis — blocarea contului și confiscarea câștigurilor.',
  },
  {
    title: 'Jocuri neeligibile',
    desc: 'Cazinou live și jackpoturi progresive nu contribuie la rulaj.',
  },
  {
    title: 'Depășirea termenului',
    desc: 'La expirare (7–30 zile) bonusul și câștigurile se anulează automat.',
  },
  {
    title: 'KYC amânat',
    desc: 'Trimite documentele imediat — nu aștepta momentul retragerii.',
  },
];

export function WageringSection() {
  return (
    <section id="rulaj" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Condiții de Rulaj Explicate
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Condițiile de rulaj sunt aspectul principal al oricărui bonus. Înțelege-le înainte de a
            accepta o ofertă.
          </p>
        </div>

        {/* Explanation cards */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Calculator className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-mono font-bold text-lg text-gray-900">Ce Înseamnă Rulaj?</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Rulajul indică de câte ori trebuie să pariezi valoarea bonusului pentru a putea retrage
              câștigurile. Se exprimă ca multiplicator: <strong>35x</strong>,{' '}
              <strong>40x</strong>, <strong>50x</strong> etc.
            </p>
            <div className="rounded-xl bg-orange-50 border border-orange-100 p-4">
              <p className="text-sm font-mono font-bold text-orange-800 mb-2">Formula de Calcul</p>
              <p className="text-sm text-gray-700">
                <strong>Suma de pariat = Valoare bonus × Rulaj</strong>
              </p>
              <div className="mt-2 text-sm text-gray-600 space-y-0.5">
                <p>Bonus primit: 10€</p>
                <p>Rulaj cerut: 35x</p>
                <p>
                  Total de pariat: 10€ × 35 = <strong className="text-orange-700">350€</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-mono font-bold text-lg text-gray-900">Clasificare Condiții</h3>
            </div>
            <div className="space-y-3">
              {wageringTiers.map((tier) => (
                <div key={tier.range}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-mono font-semibold text-gray-700">
                      {tier.range}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{tier.label}</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-100">
                    <div className={`h-2.5 rounded-full ${tier.color} ${tier.width}`} />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{tier.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game contributions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Gamepad2 className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-mono font-bold text-lg text-gray-900">
              Contribuția Jocurilor la Rulaj
            </h3>
          </div>
          <div className="space-y-4">
            {gameContributions.map((item) => (
              <div key={item.game} className="flex items-center gap-4">
                <div className="w-56 sm:w-72 flex-shrink-0">
                  <p className="text-sm font-mono text-gray-700">{item.game}</p>
                </div>
                <div className="flex-1 h-3 rounded-full bg-gray-100">
                  <div className={`h-3 rounded-full ${item.color} ${item.bar}`} />
                </div>
                <span className="text-sm font-mono font-bold text-gray-700 w-28 text-right flex-shrink-0">
                  {item.contrib}
                </span>
              </div>
            ))}
          </div>

          <aside className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
            <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-green-800">Recomandare:</strong> Pentru îndeplinirea eficientă
              a rulajului, joacă sloturi de la furnizori precum Pragmatic Play, NetEnt sau Play&apos;n
              GO – acestea contribuie 100% la cerințele de pariere.
            </p>
          </aside>
        </div>

        {/* Mistakes callout */}
        <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="font-mono font-bold text-lg text-red-900">Greșeli de Evitat</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mistakes.map((m) => (
              <div key={m.title} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold flex-shrink-0 mt-0.5">
                  !
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900 font-mono">{m.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
