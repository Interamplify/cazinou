import { Star, Crown, Award, Gift, Zap, Trophy } from 'lucide-react';
import Image from 'next/image';

const vipLevels = [
  { level: 1, name: 'Entry', points: '0', limit: '2.500 RON' },
  { level: 2, name: 'Bronze', points: '1.000', limit: '5.000 RON' },
  { level: 3, name: 'Silver', points: '5.000', limit: '10.000 RON' },
  { level: 4, name: 'Gold', points: '25.000', limit: '25.000 RON' },
  { level: 5, name: 'Platinum', points: '100.000', limit: '50.000 RON' },
  { level: 6, name: 'Diamond', points: '500.000', limit: 'Nelimitat' },
];

const vipBenefits = [
  { icon: Gift, text: 'Limite de retragere crescute cu fiecare nivel' },
  { icon: Trophy, text: 'Acces la turnee exclusive VIP' },
  { icon: Zap, text: 'Bonusuri și promoții personalizate' },
  { icon: Crown, text: 'Magazin VIP pentru conversie puncte' },
  { icon: Star, text: 'Puncte la fiecare 50 RON pariați' },
  { icon: Award, text: 'Avansare automată în niveluri' },
];

export function VIPProgramSection() {
  return (
    <section id="program-vip" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Program VIP GratoWin — 6 Niveluri cu Beneficii Exclusive
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            La fiecare 50 RON pariați, primești 1 punct. Punctele pot fi folosite în magazinul VIP
            pentru bonusuri în bani. Limitele de retragere cresc cu fiecare nivel.
          </p>
        </div>

        {/* VIP image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/gratowin-vip-program.webp"
            alt="GratoWin VIP Program"
            width={1365}
            height={722}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* VIP Levels Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-10">
          {vipLevels.map((level) => (
            <div
              key={level.level}
              className="rounded-xl border border-gray-200 bg-white p-4 text-center hover:shadow-md hover:border-orange-300 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 mx-auto mb-2">
                <span className="text-sm font-bold text-orange-600">{level.level}</span>
              </div>
              <p className="font-mono font-bold text-gray-900 text-sm mb-1">{level.name}</p>
              <p className="text-xs text-gray-500 mb-2">{level.points} puncte</p>
              <p className="text-sm font-extrabold text-green-600 font-mono">{level.limit}/lună</p>
            </div>
          ))}
        </div>

        {/* Tournaments */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Trophy className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="font-mono font-bold text-gray-900 text-lg">Turnee GratoWin</h3>
          </div>

          <div className="mb-4">
            <Image
              src="/images/gratowin-turnee.webp"
              alt="GratoWin Turnee"
              width={1337}
              height={692}
              className="rounded-xl w-full h-auto"
            />
          </div>

          <p className="text-sm text-gray-600">
            Turnee active precum Spinomania, Treasure Island Madness și Drops & Win,
            plus turnee exclusive pentru membrii VIP.
          </p>
        </div>

        {/* VIP Benefits */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 lg:p-8 shadow-sm mb-6">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-mono font-bold text-purple-900 text-lg">
              Beneficii Program VIP GratoWin
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vipBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <benefit.icon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Cum avansezi?</strong> Nivelul tău VIP crește automat
            în funcție de punctele acumulate prin pariuri. Cu cât joci mai mult, cu atât mai rapid avansezi
            și beneficiezi de limite de retragere mai mari.
          </p>
        </div>
      </div>
    </section>
  );
}
