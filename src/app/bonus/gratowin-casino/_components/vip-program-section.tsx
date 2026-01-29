import { Crown, Gift, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

const vipLevels = [
  { level: 'Entry', points: '0', withdrawalLimit: '2.500 RON/lună' },
  { level: 'Bronze', points: '1.000', withdrawalLimit: '5.000 RON/lună' },
  { level: 'Silver', points: '5.000', withdrawalLimit: '10.000 RON/lună' },
  { level: 'Gold', points: '25.000', withdrawalLimit: '25.000 RON/lună' },
  { level: 'Platinum', points: '100.000', withdrawalLimit: '50.000 RON/lună' },
  { level: 'Diamond', points: '500.000', withdrawalLimit: 'Nelimitat' },
];

export function VIPProgramSection() {
  return (
    <section id="program-vip" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Program VIP GratoWin — 6 Niveluri
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            La fiecare 50 RON pariați, primești 1 punct. Punctele pot fi folosite în magazinul VIP
            pentru bonusuri în bani.
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
          {vipLevels.map((level, index) => (
            <div
              key={level.level}
              className={`rounded-xl border p-4 text-center transition-all hover:shadow-md ${
                index === 5
                  ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-white'
                  : index >= 3
                    ? 'border-purple-200 bg-gradient-to-br from-purple-50/50 to-white'
                    : 'border-gray-200 bg-white'
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full mx-auto mb-2 ${
                  index === 5
                    ? 'bg-amber-100'
                    : index >= 3
                      ? 'bg-purple-100'
                      : 'bg-gray-100'
                }`}
              >
                <Crown
                  className={`h-5 w-5 ${
                    index === 5
                      ? 'text-amber-600'
                      : index >= 3
                        ? 'text-purple-600'
                        : 'text-gray-600'
                  }`}
                />
              </div>
              <p className="font-mono font-bold text-gray-900 text-sm mb-1">{level.level}</p>
              <p className="text-xs text-gray-500 mb-2">{level.points} puncte</p>
              <p className="text-xs font-semibold text-purple-600">{level.withdrawalLimit}</p>
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

        {/* Note */}
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-purple-700">Cum avansezi?</strong> Pe măsură ce acumulezi puncte
            prin pariuri, avansezi automat în nivelurile VIP și beneficiezi de limite de retragere
            mai mari și promoții exclusive.
          </p>
        </div>
      </div>
    </section>
  );
}
