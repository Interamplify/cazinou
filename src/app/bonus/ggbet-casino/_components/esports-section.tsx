import { Gamepad2, Trophy, Tv, CheckCircle2, Award } from 'lucide-react';
import Image from 'next/image';

const esportsGames = [
  'Dota 2', 'CS:GO', 'Overwatch', 'Counter Strike 2', 'StarCraft 2',
  'FIFA', 'League of Legends', 'Valorant', 'PUBG', 'Battlegrounds'
];

const esportsFeatures = [
  { icon: Trophy, text: 'Cel mai bun operator eSports (EGR Awards 2023)' },
  { icon: Tv, text: 'Streaming live pentru evenimentele majore' },
  { icon: Award, text: 'Cote competitive special pentru eSports' },
  { icon: Gamepad2, text: 'Acoperire extinsă pentru toate jocurile populare' },
];

export function EsportsSection() {
  return (
    <section id="esports" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            GGBet — Lider în Pariuri eSports
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            GGBet nu este doar o platformă obișnuită - este lider de necontestat în pariurile
            eSports, câștigând premiul pentru Cel mai bun operator eSports la EGR Awards 2023.
          </p>
        </div>

        {/* eSports image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/ggbet-pariuri.webp"
            alt="GGBet eSports Pariuri"
            width={1001}
            height={798}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-10">
          {/* eSports Games */}
          <div className="rounded-2xl border-2 border-purple-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Gamepad2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Jocuri eSports Disponibile</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {esportsGames.map((game) => (
                <span
                  key={game}
                  className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 border border-purple-200"
                >
                  {game}
                </span>
              ))}
            </div>
          </div>

          {/* eSports Features */}
          <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">De Ce GGBet pentru eSports?</h3>
            </div>

            <div className="space-y-3">
              {esportsFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <feature.icon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sports betting bonus */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50/50 to-pink-50/30 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Award className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-mono font-bold text-gray-900 text-lg">Bonus Pariuri Sportive</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Pe lângă bonusul de casino, GGBet oferă și un pachet separat pentru pariuri sportive
            și eSports:
          </p>
          <div className="rounded-xl bg-white p-4 border border-purple-200">
            <p className="text-lg font-bold font-mono text-purple-600 text-center">
              Până la 3.800 RON + Free Bet 1.000 RON
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Distribuit pe primele 5 depuneri pentru pariuri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
