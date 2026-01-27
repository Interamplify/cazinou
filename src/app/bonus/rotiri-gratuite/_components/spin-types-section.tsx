import { UserPlus, Wallet, Calendar, Tag, ShieldOff, Cake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SpinType {
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  iconBg: string;
  iconColor: string;
}

const spinTypes: SpinType[] = [
  {
    title: 'Rotiri la \u00CEnregistrare',
    desc: 'Prime\u0219ti rotiri gratuite doar pentru crearea contului, f\u0103r\u0103 depunere. Num\u0103r limitat (10\u201350 FS), rulaj 35x\u201350x, plafon de c\u00E2\u0219tig 50\u2013100\u20AC. Ideal pentru a testa platforma f\u0103r\u0103 risc.',
    Icon: UserPlus,
    color: 'border-green-200 bg-green-50/50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Rotiri la Depunere',
    desc: 'Cele mai populare: prime\u0219ti rotiri ca parte a bonusului de bun venit sau la fiecare depunere. Num\u0103r mare (100\u2013550 FS), rulaj 25x\u201335x. Valoarea cre\u0219te propor\u021Bional cu depunerea.',
    Icon: Wallet,
    color: 'border-orange-200 bg-orange-50/50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Promo\u021Bii S\u0103pt\u0103m\u00E2nale',
    desc: 'Rotiri oferite regulat juc\u0103torilor activi \u2014 luni, miercuri sau vineri. Frecvent pe sloturi noi sau populare. Disponibile prin sec\u021Biunea Promo\u021Bii din cont.',
    Icon: Calendar,
    color: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Coduri Bonus Rotiri',
    desc: 'Coduri promo\u021Bionale care deblocheaz\u0103 rotiri suplimentare. Se introduc la depunere sau \u00EEn sec\u021Biunea Bonus. Disponibile prin newsletter, campanii de loialitate sau parteneri.',
    Icon: Tag,
    color: 'border-purple-200 bg-purple-50/50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Rotiri F\u0103r\u0103 Verificare KYC',
    desc: 'Cazinouri care ofer\u0103 rotiri gratuite f\u0103r\u0103 a solicita verificarea identit\u0103\u021Bii. Ideal pentru confiden\u021Bialitate. Verificarea devine obligatorie la retragere.',
    Icon: ShieldOff,
    color: 'border-amber-200 bg-amber-50/50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Rotiri de Ziua Ta',
    desc: 'Unele cazinouri ofer\u0103 rotiri cadou cu ocazia zilei de na\u0219tere. Adesea f\u0103r\u0103 cerin\u021Be de rulaj sau cu rulaj redus. Necesit\u0103 cont verificat cu data na\u0219terii corect\u0103.',
    Icon: Cake,
    color: 'border-cyan-200 bg-cyan-50/50',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export function SpinTypesSection() {
  return (
    <section id="tipuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de Bonusuri cu Rotiri Gratuite
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Nu toate rotirile gratuite sunt la fel. Iat&#259; cele 6 categorii principale &#537;i ce presupune fiecare:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spinTypes.map((type) => (
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
              <p className="text-sm text-gray-700 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
