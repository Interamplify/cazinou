import { Gamepad2, Check } from 'lucide-react';
import { romanianGamesCasinos } from '@/data/cazinouri-germania';

export function RomanianGamesSection() {
  return (
    <section id="jocuri-romanesti" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cazinouri din Germania cu jocuri populare în România
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Platforme care oferă sloturi EGT, Amatic și alte jocuri preferate de
            jucătorii români — accesibile din Germania.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {romanianGamesCasinos.map((casino, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Gamepad2 className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-gray-900">{casino.name}</h3>
                  <p className="text-xs text-orange-600 font-mono">{casino.highlight}</p>
                </div>
              </div>

              <div className="space-y-2">
                {casino.games.map((game, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{game}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
