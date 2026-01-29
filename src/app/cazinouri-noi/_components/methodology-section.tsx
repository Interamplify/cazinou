import { Shield, CreditCard, Gamepad2, Gift, Smartphone, BadgeCheck, Scale, Eye } from 'lucide-react';

const criteria = [
  {
    title: 'Licență Validă',
    weight: '30%',
    Icon: Shield,
    desc: 'MGA, Curaçao sau Gibraltar — verificabilă, fără sancțiuni recente.',
  },
  {
    title: 'Metode de Plată',
    weight: '25%',
    Icon: CreditCard,
    desc: 'Visa, Skrill, Neteller, Bitcoin. Retrageri sub 24h pentru e-wallet/crypto.',
  },
  {
    title: 'Selecție Jocuri',
    weight: '20%',
    Icon: Gamepad2,
    desc: 'Pragmatic Play, NetEnt, Evolution. Minimum 3.000 titluri + cazinou live.',
  },
  {
    title: 'Termeni Bonus',
    weight: '15%',
    Icon: Gift,
    desc: 'Rulaj ≤50x, termen ≥7 zile, plafon retragere comunicat clar.',
  },
  {
    title: 'UX & Suport',
    weight: '10%',
    Icon: Smartphone,
    desc: 'Optimizat mobil, chat live non-stop, preferabil suport în română.',
  },
  {
    title: 'Joc Responsabil',
    weight: null,
    Icon: BadgeCheck,
    desc: 'Auto-excludere, limite depunere, link resurse ajutor — obligatoriu.',
  },
  {
    title: 'Reputație',
    weight: null,
    Icon: Scale,
    desc: 'Fără acuzații fraudă, recenzii pozitive, istoric plăți onorate.',
  },
  {
    title: 'Transparență',
    weight: null,
    Icon: Eye,
    desc: 'T&C clare, fără clauze ascunse, RTP-uri publice.',
  },
];

export function MethodologySection() {
  return (
    <section id="metodologie" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Selectăm Cazinourile
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Fiecare cazinou trece printr-un audit pe 8 criterii. Doar platformele care depășesc pragul
            minim la toate intră în clasament.
          </p>
        </div>

        {/* Scoring weights bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {criteria
            .filter((c) => c.weight)
            .map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/50 px-3 py-1.5"
              >
                <c.Icon className="h-3.5 w-3.5 text-orange-600" />
                <span className="text-xs font-mono font-semibold text-gray-700">{c.title}</span>
                <span className="text-[10px] font-mono font-bold text-orange-600 bg-white px-1.5 py-0.5 rounded-full">
                  {c.weight}
                </span>
              </div>
            ))}
        </div>

        {/* Compact criteria grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <item.Icon className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-bold font-mono text-gray-900">{item.title}</p>
                  {item.weight && (
                    <span className="text-[10px] font-mono font-bold text-orange-600">
                      {item.weight}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
