import { CalendarDays } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { rotiriGratuiteSlugs } from '@/data/rotiri-gratuite';
import { HeroTop3 } from '@/components/casino/hero-top3';

export function HeroSection() {
  const casinos = getCasinosBySlugs(rotiriGratuiteSlugs);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/30" />

      <div className="relative container mx-auto max-w-7xl pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb + Date */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 mb-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><a href="/" className="hover:text-orange-600 transition-colors">Acasă</a></li>
              <li>/</li>
              <li><a href="/bonus/" className="hover:text-orange-600 transition-colors">Bonus</a></li>
              <li>/</li>
              <li className="text-gray-600 font-medium">Rotiri Gratuite</li>
            </ol>
          </nav>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-orange-400" />
            <span>Ianuarie 2026</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15]">
          Top Cazinouri cu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Rotiri Gratuite</span> 2026
        </h1>

        {/* Intro */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
          Cele mai bune oferte de free spins de la 50 până la 5.000 rotiri.
          Fiecare cazino testat pe rulaj, furnizori și viteză de retragere.
        </p>

        {/* TOP 3 PODIUM */}
        <div className="mb-8">
          <HeroTop3 casinos={casinos} />
        </div>

        {/* CTA */}
        <a
          href="#top-cazinouri"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
        >
          Vezi Top 20 Complet
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
