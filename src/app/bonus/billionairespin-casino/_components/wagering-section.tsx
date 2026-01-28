import { BarChart3, Gamepad2, Clock, AlertTriangle } from 'lucide-react';

const requirements = [
  {
    id: 'wagering',
    title: 'Rulaj 35x',
    desc: 'Trebuie să pariezi bonusul + depunerea de 35 ori pentru a putea retrage câ&#537;tigurile.',
    example: 'Depunere 100 RON + Bonus 100 RON = Rulaj total 7.000 RON',
    Icon: BarChart3,
    color: 'border-orange-200 bg-orange-50/50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    id: 'contribution',
    title: 'Contribu&#539;ie 100%',
    desc: 'Sloturile contribuie 100% la îndeplinirea rulajului, fiind cele mai eficiente pentru completare.',
    example: 'Ruleta &#537;i blackjack contribuie doar 10-20%',
    Icon: Gamepad2,
    color: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 'deadline',
    title: '30 Zile Termen',
    desc: 'Ai la dispozi&#539;ie 30 zile de la activarea bonusului pentru a îndeplini cerințele de rulaj.',
    example: 'După expirare, bonusul &#537;i câ&#537;tigurile se anulează automat',
    Icon: Clock,
    color: 'border-amber-200 bg-amber-50/50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export function WageringSection() {
  return (
    <section id="rulaj" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cerințe de Rulaj — Cum Îndepline&#537;ti Condi&#539;iile
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Bonusul Billionaire Spin vine cu cerin&#539;e de rulaj de 35x, care se aplică asupra sumei
            depunerii plus bonusul primit. Înțelege cum func&#539;ionează pentru a maximiza
            &#537;ansele de retragere.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {requirements.map((req) => (
            <div
              key={req.id}
              className={`rounded-2xl border-2 p-6 ${req.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${req.iconBg}`}>
                  <req.Icon className={`h-5 w-5 ${req.iconColor}`} />
                </div>
                <h3 className="font-mono font-bold text-gray-900">{req.title}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{req.desc}</p>
              <div className="rounded-lg bg-white/80 border border-gray-200 p-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Exemplu:</strong> {req.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        <aside className="flex items-start gap-3 rounded-xl bg-red-50 border-2 border-red-200 p-5">
          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-red-800">Aten&#539;ie:</strong> Retragerea înainte de
            îndeplinirea rulajului anulează bonusul &#537;i toate câ&#537;tigurile ob&#539;inute din
            acesta. Asigură-te că îndepline&#537;ti condi&#539;iile înainte de a solicita o
            retragere.
          </p>
        </aside>
      </div>
    </section>
  );
}
