import { Gamepad2, LayoutGrid, Video, Rocket, Trophy } from 'lucide-react';
import { gameTypes } from '@/data/cazinouri-germania';

const iconMap: Record<string, React.ReactNode> = {
  'Sloturi Video': <Gamepad2 className="h-5 w-5" />,
  'Jocuri de Masă': <LayoutGrid className="h-5 w-5" />,
  'Casino Live': <Video className="h-5 w-5" />,
  'Jocuri Crash': <Rocket className="h-5 w-5" />,
  'Pariuri Sportive': <Trophy className="h-5 w-5" />,
};

export function GameTypesSection() {
  return (
    <section id="tipuri-jocuri" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Tipuri de jocuri la cazinouri online Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            De la sloturi video până la casino live — explorează categoriile de jocuri
            disponibile la cazinourile germane și offshore.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gameTypes.map((game, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  {iconMap[game.title] || <Gamepad2 className="h-5 w-5" />}
                </div>
                <h3 className="text-base font-bold font-mono text-gray-900">{game.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{game.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {game.popular.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center text-xs text-gray-600 bg-gray-50 rounded-full px-2.5 py-1 border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
