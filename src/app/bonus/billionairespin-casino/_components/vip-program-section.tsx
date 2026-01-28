import { Star, Crown, Award, CheckCircle2, Gift, Zap, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface VIPLevel {
  name: string;
  level: number;
  points: string;
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  bgGradient: string;
  benefits: Array<{
    text: string;
    Icon: LucideIcon;
  }>;
}

const vipLevels: VIPLevel[] = [
  {
    name: 'Bronze',
    level: 1,
    points: '0 puncte',
    Icon: Star,
    iconColor: 'text-gray-600',
    iconBg: 'bg-gray-100',
    borderColor: 'border-gray-300',
    bgGradient: 'from-gray-50/50 to-gray-100/30',
    benefits: [
      { text: 'Cashback 10%', Icon: Gift },
      { text: 'Bonus Reload 25%', Icon: Zap },
      { text: 'Suport prioritar', Icon: Headphones },
    ],
  },
  {
    name: 'Silver',
    level: 2,
    points: '5.000 puncte',
    Icon: Star,
    iconColor: 'text-gray-500',
    iconBg: 'bg-gray-200',
    borderColor: 'border-gray-400',
    bgGradient: 'from-gray-100/50 to-gray-200/30',
    benefits: [
      { text: 'Cashback 15%', Icon: Gift },
      { text: 'Rakeback 10%', Icon: Zap },
      { text: 'Rotiri gratuite lunare', Icon: Award },
    ],
  },
  {
    name: 'Gold',
    level: 3,
    points: '25.000 puncte',
    Icon: Star,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    borderColor: 'border-amber-300',
    bgGradient: 'from-amber-50/50 to-orange-50/30',
    benefits: [
      { text: 'Cashback 20%', Icon: Gift },
      { text: 'Rakeback 15%', Icon: Zap },
      { text: 'Retrageri prioritare', Icon: CheckCircle2 },
    ],
  },
  {
    name: 'Platinum',
    level: 4,
    points: '100.000 puncte',
    Icon: Crown,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    borderColor: 'border-purple-300',
    bgGradient: 'from-purple-50/50 to-pink-50/30',
    benefits: [
      { text: 'Cashback 25%', Icon: Gift },
      { text: 'Rakeback 17%', Icon: Zap },
      { text: 'Manager personal', Icon: Headphones },
    ],
  },
];

export function VIPProgramSection() {
  return (
    <section id="program-vip" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Program VIP Billionairespin — 4 Niveluri cu Beneficii Exclusive
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Sistemul VIP este conceput să recompenseze loialitatea. Cu fiecare pariu, acumulezi
            puncte care îți cresc nivelul și deblocează beneficii din ce în ce mai generoase:
            cashback mai mare, rakeback, rotiri gratuite și suport VIP dedicat.
          </p>
        </div>

        {/* VIP Level Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {vipLevels.map((level) => (
            <article
              key={level.name}
              className={`group relative overflow-hidden rounded-2xl border-2 ${level.borderColor} bg-gradient-to-br ${level.bgGradient} p-6 transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${level.iconBg} shadow-sm transition-transform group-hover:scale-110`}
                >
                  <level.Icon className={`h-8 w-8 ${level.iconColor}`} aria-hidden="true" />
                </div>
              </div>

              {/* Name & Level */}
              <h3 className="text-center font-mono font-bold text-gray-900 text-xl mb-1">
                {level.name}
              </h3>
              <p className="text-center text-xs text-gray-600 font-medium mb-1">
                Nivel {level.level}
              </p>
              <p className="text-center text-sm text-gray-700 font-semibold mb-5">
                {level.points}
              </p>

              {/* Benefits */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                {level.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <benefit.Icon className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* How Points Work */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 lg:p-8 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
              <Award className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-purple-900 text-lg mb-2">
                Cum Acumulezi Puncte VIP?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Acumulezi <strong className="text-purple-700">1 punct</strong> pentru fiecare{' '}
                <strong className="text-purple-700">10 EUR pariați la sloturi</strong> sau{' '}
                <strong className="text-purple-700">20 EUR la jocuri de masă</strong>. Punctele se
                calculează automat și sunt vizibile în secțiunea „Program VIP" din contul tău.
                Nivelul tău crește automat când atingi pragul necesar.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Pro Tip:</strong> Odată ce ajungi la un nivel VIP,
            acesta rămâne activ pe parcursul lunii curente. La începutul fiecărei luni, nivelul se
            recalculează în funcție de activitatea din ultima lună.
          </p>
        </div>
      </div>
    </section>
  );
}
