import { Star, Crown, Award, CheckCircle2, Gift, Zap, Headphones, Diamond } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface VIPLevel {
  name: string;
  level: number;
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
    Icon: Star,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    borderColor: 'border-amber-300',
    bgGradient: 'from-amber-50/50 to-orange-50/30',
    benefits: [
      { text: 'Cashback de bază', Icon: Gift },
      { text: 'Acces la turnee', Icon: Award },
    ],
  },
  {
    name: 'Silver',
    level: 2,
    Icon: Star,
    iconColor: 'text-gray-500',
    iconBg: 'bg-gray-200',
    borderColor: 'border-gray-400',
    bgGradient: 'from-gray-100/50 to-gray-200/30',
    benefits: [
      { text: 'Cashback îmbunătățit', Icon: Gift },
      { text: 'Bonus suplimentare', Icon: Zap },
    ],
  },
  {
    name: 'Gold',
    level: 3,
    Icon: Star,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    bgGradient: 'from-yellow-50/50 to-amber-50/30',
    benefits: [
      { text: 'Cashback crescut', Icon: Gift },
      { text: 'Promoții exclusive', Icon: Award },
    ],
  },
  {
    name: 'Diamond',
    level: 4,
    Icon: Diamond,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    borderColor: 'border-blue-300',
    bgGradient: 'from-blue-50/50 to-cyan-50/30',
    benefits: [
      { text: 'Cashback premium', Icon: Gift },
      { text: 'Limite extinse', Icon: Zap },
    ],
  },
  {
    name: 'Joker',
    level: 5,
    Icon: Crown,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    borderColor: 'border-purple-300',
    bgGradient: 'from-purple-50/50 to-pink-50/30',
    benefits: [
      { text: 'Cashback 15%', Icon: Gift },
      { text: 'Manager personal', Icon: Headphones },
    ],
  },
];

export function VIPProgramSection() {
  return (
    <section id="program-vip" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Program VIP iWild Casino — 5 Niveluri cu Beneficii Exclusive
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Sistemul VIP iWild îți oferă recompense din ce în ce mai generoase pe măsură ce avansezi
            prin cele 5 niveluri: Bronze, Silver, Gold, Diamond și Joker.
          </p>
        </div>

        {/* VIP Level Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-10">
          {vipLevels.map((level) => (
            <article
              key={level.name}
              className={`group relative overflow-hidden rounded-2xl border-2 ${level.borderColor} bg-gradient-to-br ${level.bgGradient} p-5 transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-3">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${level.iconBg} shadow-sm transition-transform group-hover:scale-110`}
                >
                  <level.Icon className={`h-7 w-7 ${level.iconColor}`} aria-hidden="true" />
                </div>
              </div>

              {/* Name & Level */}
              <h3 className="text-center font-mono font-bold text-gray-900 text-lg mb-1">
                {level.name}
              </h3>
              <p className="text-center text-xs text-gray-600 font-medium mb-4">
                Nivel {level.level}
              </p>

              {/* Benefits */}
              <div className="space-y-2 border-t border-gray-200 pt-3">
                {level.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <benefit.Icon className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* VIP Benefits summary */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 lg:p-8 shadow-sm mb-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-purple-900 text-lg mb-2">
                Beneficii Program VIP iWild
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Cashback până la 15% din pierderi</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Bonusuri de suplimentare 7% la depuneri</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Prioritate la suport și retrageri</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Manager personal pentru nivelele top</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Posibilitatea de a extinde limitele</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Promoții și bonusuri exclusive VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Cum avansezi?</strong> Nivelul tău VIP crește automat
            pe măsură ce ești activ pe platformă. Cu cât joci mai mult, cu atât mai rapid avansezi
            și beneficiezi de recompense mai mari.
          </p>
        </div>
      </div>
    </section>
  );
}
