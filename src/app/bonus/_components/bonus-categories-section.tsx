import Link from 'next/link';
import { Gift, RotateCcw, ArrowRight } from 'lucide-react';

const bonusPages = [
  {
    title: 'Bonus Fără Depunere',
    href: '/bonus/fara-depunere/',
    desc: 'Top 10 cazinouri cu bonus fără depunere — primești bani gratis la înregistrare, fără a depune.',
    stats: ['10 cazinouri', 'Bonusuri 5€–10€', 'Rulaj de la 30x'],
    Icon: Gift,
    color: 'border-green-200 bg-green-50/30 hover:border-green-300',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    badge: 'Fără Depunere',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Rotiri Gratuite',
    href: '/bonus/rotiri-gratuite/',
    desc: 'Top 20 cazinouri cu rotiri gratuite — de la 50 la 5.000 free spins pe sloturi populare.',
    stats: ['20 cazinouri', 'Până la 5.000 FS', 'Rulaj de la 10x'],
    Icon: RotateCcw,
    color: 'border-orange-200 bg-orange-50/30 hover:border-orange-300',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badge: 'Free Spins',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
];

export function BonusCategoriesSection() {
  return (
    <section id="tipuri-bonusuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de Bonusuri Disponibile
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Alege categoria care te interesează pentru clasamente detaliate, recenzii și ghiduri de
            activare.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {bonusPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`group rounded-2xl border-2 p-6 lg:p-8 transition-all hover:shadow-lg ${page.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${page.iconBg}`}
                >
                  <page.Icon className={`h-5 w-5 ${page.iconColor}`} />
                </div>
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${page.badgeColor}`}
                  >
                    {page.badge}
                  </span>
                  <h3 className="text-xl font-bold font-mono text-gray-900 mt-1">
                    {page.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-5">{page.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {page.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs font-mono font-semibold text-gray-600 bg-white/80 border border-gray-200 rounded-full px-2.5 py-1"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-bold font-mono text-orange-600 group-hover:gap-2.5 transition-all">
                Vezi Clasamentul <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
