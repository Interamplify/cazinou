import {
  Dice5,
  Tv,
  Video,
  Hash,
  Ticket,
  CircleDot,
  Triangle,
  Dices,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { getGameCategories } from '@/lib/data-helpers';
import { slotGuideContent } from '@/data/content';

const categoryConfig: Record<
  string,
  { icon: LucideIcon; color: string; bg: string; border: string; badge: string }
> = {
  pacanele: {
    icon: Dice5,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
  },
  'casino-live': {
    icon: Tv,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
  },
  'poker-ca-la-aparate': {
    icon: Video,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  'loto-keno': {
    icon: Hash,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
  },
  'lozuri-razuibile': {
    icon: Ticket,
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
  },
  bingo: {
    icon: CircleDot,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
  },
  plinko: {
    icon: Triangle,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  'sic-bo': {
    icon: Dices,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    badge: 'bg-teal-100 text-teal-700',
  },
};

const defaultConfig = {
  icon: Dice5,
  color: 'text-gray-500',
  bg: 'bg-gray-50',
  border: 'border-gray-200',
  badge: 'bg-gray-100 text-gray-700',
};

export function GameCategoriesSection() {
  const categories = getGameCategories();

  // First two (Slots + Live) are featured, rest are in a grid
  const featured = categories.slice(0, 2);
  const rest = categories.slice(2);

  return (
    <section id="categorii-jocuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Jocuri Populare în Cazinourile Online Internaționale
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Peste 5.000 de sloturi, casino live cu dealeri reali, crash games, video poker și multe altele — de la furnizori precum Pragmatic Play, Evolution și NetEnt.
          </p>
        </div>

        {/* Featured: Slots + Casino Live — larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featured.map((cat) => {
            const cfg = categoryConfig[cat.category] ?? defaultConfig;
            const Icon = cfg.icon;
            return (
              <div
                key={cat.category}
                className={`rounded-2xl border ${cfg.border} bg-white p-6 hover:shadow-md transition-all group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg} border ${cfg.border} group-hover:shadow-sm transition-shadow`}>
                    <Icon className={`h-6 w-6 ${cfg.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-lg font-bold font-mono text-gray-900">{cat.name}</h3>
                      <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${cfg.badge}`}>
                        {cat.count.toLocaleString('ro-RO')}+ jocuri
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                  </div>
                </div>
                {/* Popular games */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide mr-1 py-1">Populare:</span>
                  {cat.popularGames.map((game) => (
                    <span
                      key={game}
                      className="text-[11px] font-mono text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rest: smaller categories in 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {rest.map((cat) => {
            const cfg = categoryConfig[cat.category] ?? defaultConfig;
            const Icon = cfg.icon;
            return (
              <div
                key={cat.category}
                className={`rounded-2xl border ${cfg.border} bg-white p-5 hover:shadow-md transition-all group`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg} border ${cfg.border} group-hover:shadow-sm transition-shadow`}>
                    <Icon className={`h-5 w-5 ${cfg.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-base font-bold font-mono text-gray-900">{cat.name}</h3>
                      <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${cfg.badge}`}>
                        {cat.count}+
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{cat.description}</p>
                {/* Popular games */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {cat.popularGames.map((game) => (
                    <span
                      key={game}
                      className="text-[10px] font-mono text-gray-500 bg-gray-50 border border-gray-100 rounded px-2 py-0.5"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Slot guide tip */}
        <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 border border-orange-200">
              <Sparkles className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-base font-bold font-mono text-gray-900 pt-2">
              {slotGuideContent.heading}
            </h3>
          </div>
          <div className="space-y-2 pl-[52px]">
            {slotGuideContent.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
