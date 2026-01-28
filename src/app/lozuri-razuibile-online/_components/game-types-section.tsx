import { Grid3x3, Hash } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface GameType {
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  iconBg: string;
  iconColor: string;
  examples: string[];
}

const gameTypes: GameType[] = [
  {
    title: 'Lozuri Clasice',
    desc: 'Răzuiești pentru a descoperi 9 simboluri ascunse. Câștigi dacă potrivești 3 simboluri identice pe orice linie (orizontală, verticală sau diagonală). Valoarea simbolului se înmulțește cu miza ta. Exemple: Scratch Alpaca (BGaming), Platinum Scratch, Gold Scratch.',
    Icon: Grid3x3,
    color: 'border-orange-200 bg-orange-50/50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    examples: ['Scratch Alpaca', 'Platinum Scratch', 'Gold Scratch', 'Diamond Scratch'],
  },
  {
    title: 'Lozuri cu Numere (Scratch Match)',
    desc: 'Alegi câte numere dorești să joci (de obicei 10 sau 20). Sistemul generează numere câștigătoare aleatorii (între 0-100). Pentru fiecare număr potrivit, câștigi multiplicatorul aferent. Mai multe potriviri = premiu mai mare. Exemple: Scratch Match (Evoplay), Football Scratch, Perfect Scratch (Hacksaw).',
    Icon: Hash,
    color: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    examples: ['Scratch Match', 'Football Scratch', 'Perfect Scratch', 'Cash Scratch'],
  },
];

export function GameTypesSection() {
  return (
    <section id="tipuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de Lozuri Răzuibile Online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Există două categorii principale de scratch cards online, fiecare cu mecanici diferite:
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {gameTypes.map((type) => (
            <div
              key={type.title}
              className={`rounded-2xl border-2 p-5 lg:p-6 ${type.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full ${type.iconBg}`}>
                  <type.Icon className={`h-4 w-4 ${type.iconColor}`} />
                </div>
                <h3 className="font-mono font-bold text-gray-900">{type.title}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{type.desc}</p>
              <div className="text-sm">
                <span className="font-mono font-semibold text-gray-800">Exemple:</span>{' '}
                <span className="text-gray-600">{type.examples.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
