import { Star, Crown, Award, CheckCircle2, Gift, Zap, Trophy } from 'lucide-react';
import Image from 'next/image';

const vipLevels = [
  { level: 1, name: 'Copper', cashback: '3%' },
  { level: 2, name: 'Bronze', cashback: '4%' },
  { level: 3, name: 'Silver', cashback: '5%' },
  { level: 4, name: 'Gold', cashback: '6%' },
  { level: 5, name: 'Ruby', cashback: '7%' },
  { level: 6, name: 'Sapphire', cashback: '8%' },
  { level: 7, name: 'Diamond', cashback: '10%' },
  { level: 8, name: 'VIP', cashback: '12%' },
];

const vipBenefits = [
  { icon: Gift, text: 'Cashback progresiv de la 3% până la 12%' },
  { icon: Trophy, text: 'Acces la turnee exclusive VIP' },
  { icon: Zap, text: 'Bonusuri personalizate' },
  { icon: Crown, text: 'Manager personal pentru nivelurile superioare' },
  { icon: Star, text: 'Retrageri prioritare' },
  { icon: Award, text: 'Limite de pariuri extinse' },
];

export function VIPProgramSection() {
  return (
    <section id="program-vip" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Program VIP Megapari — 8 Niveluri cu Beneficii Exclusive
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Sistemul VIP Megapari recompensează loialitatea cu cashback progresiv
            care poate ajunge până la 12% și acces la turnee exclusive.
          </p>
        </div>

        {/* VIP image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/megapari-vip-program.webp"
            alt="Megapari VIP Program"
            width={1024}
            height={554}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* VIP Levels Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 mb-10">
          {vipLevels.map((level) => (
            <div
              key={level.level}
              className="rounded-xl border border-gray-200 bg-white p-4 text-center hover:shadow-md hover:border-orange-300 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 mx-auto mb-2">
                <span className="text-sm font-bold text-orange-600">{level.level}</span>
              </div>
              <p className="font-mono font-bold text-gray-900 text-sm mb-1">{level.name}</p>
              <p className="text-lg font-extrabold text-green-600 font-mono">{level.cashback}</p>
            </div>
          ))}
        </div>

        {/* VIP Benefits */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-6 lg:p-8 shadow-sm mb-6">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-mono font-bold text-purple-900 text-lg">
              Beneficii Program VIP Megapari
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
            în funcție de activitatea ta pe platformă. Cu cât joci mai mult, cu atât mai rapid avansezi
            și beneficiezi de un procent mai mare de cashback.
          </p>
        </div>
      </div>
    </section>
  );
}
