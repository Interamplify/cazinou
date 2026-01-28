import { Shield, PlayCircle, DollarSign, Ban, BarChart, Heart } from 'lucide-react';

const tips = [
  {
    title: 'Verifica RTP-ul',
    desc: 'Joaca doar lozuri cu RTP > 94%. Evita jocurile cu RTP sub 90% — pierzi prea mult pe termen lung.',
    Icon: Shield,
    color: 'border-green-200 bg-green-50/30',
  },
  {
    title: 'Testeaza in Demo',
    desc: 'Foloseste modul gratuit pentru a intelege mecanica jocului si a verifica tabela de plati inainte de a paria bani reali.',
    Icon: PlayCircle,
    color: 'border-blue-200 bg-blue-50/30',
  },
  {
    title: 'Stabileste Limite',
    desc: 'Seteaza un buget lunar fix pentru lozuri. Foloseste functiile de limita de depunere si auto-excludere din cont.',
    Icon: DollarSign,
    color: 'border-amber-200 bg-amber-50/30',
  },
  {
    title: 'Evita Recuperarea',
    desc: 'Nu incerca niciodata sa recuperezi pierderile jucand mai mult. Pierderea face parte din joc — accept-o si opreste-te.',
    Icon: Ban,
    color: 'border-red-200 bg-red-50/30',
  },
  {
    title: 'Alege Volatilitate Potrivita',
    desc: 'Buget mic? Alege volatilitate scazuta pentru sesiuni mai lungi. Risc mare? Volatilitate ridicata pentru premii mari.',
    Icon: BarChart,
    color: 'border-purple-200 bg-purple-50/30',
  },
  {
    title: 'Joaca Responsabil',
    desc: 'Lozurile sunt divertisment, nu sursa de venit. Joaca doar cand esti relaxat si cu bani pe care iti permiti sa-i pierzi.',
    Icon: Heart,
    color: 'border-orange-200 bg-orange-50/30',
  },
];

export function TipsStrategySection() {
  return (
    <section id="strategii" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Sfaturi si Strategii pentru a Juca in Avantaj
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Desi rezultatul e aleatoriu, aceste tactici te ajuta sa maximizezi placerea si sa
            gestionezi bugetul eficient
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className={`rounded-xl border-2 p-4 ${tip.color}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                  <tip.Icon className="h-4 w-4 text-gray-700" />
                </div>
                <h3 className="font-mono font-bold text-gray-900">{tip.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
