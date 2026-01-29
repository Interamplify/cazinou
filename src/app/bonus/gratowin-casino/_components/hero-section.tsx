import { CalendarDays, Star, Gift, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50/70 via-white to-white">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm font-mono text-gray-400">
            <li>
              <a href="/" className="hover:text-purple-600 transition-colors">
                Acasă
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/bonus/" className="hover:text-purple-600 transition-colors">
                Bonusuri
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">GratoWin Casino</li>
          </ol>
        </nav>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <CalendarDays className="h-4 w-4 text-purple-400" />
          <span>Actualizat: Ianuarie 2026</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            {/* Main heading - NO bonus amounts */}
            <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1]">
              Bonus <span className="text-purple-600">GratoWin Casino</span> 2026
            </h1>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              GratoWin Casino atrage cu 50 de rotiri gratuite fără depunere și un pachet de bun
              venit generos pe 3 depuneri. Descoperă toate detaliile despre bonusuri, coduri
              promoționale și cerințe de rulaj.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-amber-500 fill-amber-500/50'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-mono font-semibold text-gray-600">8.5/10</span>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-500">Licență Curaçao</span>
            </div>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                <Gift className="h-3.5 w-3.5" />
                50 Rotiri Fără Depunere
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-700">
                Pachet 15.000 RON
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700">
                Rulaj 35x
              </span>
            </div>

            {/* CTA */}
            <a
              href="/go/gratowin-casino"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-purple-700 transition-colors"
            >
              Ia Bonusul Acum
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Casino image */}
          <div className="relative">
            <Image
              src="/images/gratowin-recenzie.webp"
              alt="GratoWin Casino Bonus"
              width={500}
              height={300}
              className="rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
