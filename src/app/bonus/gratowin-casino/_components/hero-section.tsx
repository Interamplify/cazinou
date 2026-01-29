import { CalendarDays, TrendingUp, Award, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-1.5 text-sm font-mono text-gray-400">
            <li>
              <a href="/" className="hover:text-orange-600 transition-colors">
                Acasă
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/bonus/" className="hover:text-orange-600 transition-colors">
                Bonus
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">GratoWin Casino Bonus</li>
          </ol>
        </nav>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
          <CalendarDays className="h-4 w-4 text-orange-400" />
          <span>Actualizat: Ianuarie 2026</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1] max-w-4xl mx-auto">
          Bonus <span className="text-orange-500">GratoWin Casino</span> 2026
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-8">
          GratoWin Casino oferă 50 de rotiri gratuite fără depunere la înregistrare și un pachet
          de bun venit generos de până la 15.000 RON pe primele 3 depuneri. Program VIP cu 6
          niveluri și peste 400 jocuri de la furnizori precum Pragmatic Play și Evolution.
        </p>

        {/* Quick stats pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">50 Rotiri Fără Depunere</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <TrendingUp className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">300% Bonus</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Award className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">6 Niveluri VIP</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/go/gratowin-casino"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold font-mono text-white hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Revendică Bonusul
          </a>
        </div>
      </div>
    </section>
  );
}
