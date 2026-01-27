import {
  PartyPopper,
  Banknote,
  RotateCw,
  Undo2,
  Crown,
  Cake,
  CircleDot,
  type LucideIcon,
} from 'lucide-react';
import { bonusDetails } from '@/data/content';
import { getAllBonusTypes } from '@/lib/data-helpers';

const iconMap: Record<string, LucideIcon> = {
  'party-popper': PartyPopper,
  banknote: Banknote,
  'rotate-cw': RotateCw,
  'undo-2': Undo2,
  crown: Crown,
  cake: Cake,
  'circle-dot': CircleDot,
};

const accentColors: Record<
  string,
  { bg: string; border: string; icon: string; badge: string; badgeText: string }
> = {
  'bonus-de-bun-venit': {
    bg: 'bg-orange-50/60',
    border: 'border-orange-200',
    icon: 'text-orange-500',
    badge: 'bg-orange-100 border-orange-200',
    badgeText: 'text-orange-700',
  },
  'bonus-fara-depunere': {
    bg: 'bg-emerald-50/60',
    border: 'border-emerald-200',
    icon: 'text-emerald-500',
    badge: 'bg-emerald-100 border-emerald-200',
    badgeText: 'text-emerald-700',
  },
  'rotiri-gratuite': {
    bg: 'bg-violet-50/60',
    border: 'border-violet-200',
    icon: 'text-violet-500',
    badge: 'bg-violet-100 border-violet-200',
    badgeText: 'text-violet-700',
  },
  cashback: {
    bg: 'bg-sky-50/60',
    border: 'border-sky-200',
    icon: 'text-sky-500',
    badge: 'bg-sky-100 border-sky-200',
    badgeText: 'text-sky-700',
  },
  'program-vip': {
    bg: 'bg-amber-50/60',
    border: 'border-amber-200',
    icon: 'text-amber-500',
    badge: 'bg-amber-100 border-amber-200',
    badgeText: 'text-amber-700',
  },
  'bonus-ziua-ta': {
    bg: 'bg-pink-50/60',
    border: 'border-pink-200',
    icon: 'text-pink-500',
    badge: 'bg-pink-100 border-pink-200',
    badgeText: 'text-pink-700',
  },
  'roata-norocului': {
    bg: 'bg-teal-50/60',
    border: 'border-teal-200',
    icon: 'text-teal-500',
    badge: 'bg-teal-100 border-teal-200',
    badgeText: 'text-teal-700',
  },
};

const defaultColors = {
  bg: 'bg-gray-50/60',
  border: 'border-gray-200',
  icon: 'text-gray-500',
  badge: 'bg-gray-100 border-gray-200',
  badgeText: 'text-gray-700',
};

export function BonusComparisonSection() {
  const bonusTypes = getAllBonusTypes();
  const detailMap = new Map(bonusDetails.map((d) => [d.slug, d.content]));

  return (
    <section id="bonusuri" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de Bonusuri la Cazinouri Online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Înțelege fiecare tip de bonus, cum funcționează și cum să profiți la maxim de ofertele disponibile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonusTypes.map((bonus) => (
            <BonusCard
              key={bonus.slug}
              bonus={bonus}
              detail={detailMap.get(bonus.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusCard({
  bonus,
  detail,
}: {
  bonus: { slug: string; name: string; description: string; icon: string; typicalValue: string; wageringRange: string };
  detail?: string;
}) {
  const Icon = iconMap[bonus.icon] ?? PartyPopper;
  const colors = accentColors[bonus.slug] ?? defaultColors;

  return (
    <div className={`rounded-2xl border ${colors.border} bg-white p-5 hover:shadow-md transition-all group`}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${colors.bg} border ${colors.border} group-hover:shadow-sm transition-shadow`}>
          <Icon className={`h-5 w-5 ${colors.icon}`} />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold font-mono text-gray-900 leading-tight">
            {bonus.name}
          </h3>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-[11px] font-bold font-mono px-2.5 py-1 rounded-lg border ${colors.badge} ${colors.badgeText}`}>
          {bonus.typicalValue}
        </span>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-500">
          Rulaj {bonus.wageringRange}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {detail ?? bonus.description}
      </p>
    </div>
  );
}
