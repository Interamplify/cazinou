import { CalendarDays, Shield, EyeOff, Bitcoin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-1.5 text-sm font-mono text-gray-400">
            <li><a href="/" className="hover:text-orange-600 transition-colors">Acasă</a></li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Cazinouri Anonime</li>
          </ol>
        </nav>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
          <CalendarDays className="h-4 w-4 text-orange-400" />
          <span>Actualizat: Ianuarie 2026</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1] max-w-4xl mx-auto">
          Cazinouri Anonime <span className="text-orange-500">Fără Verificare</span> KYC
        </h1>

        {/* Intro paragraph */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Cauți cazinouri online unde poți juca fără să trimiți documente de identitate?
          Acest ghid îți prezintă cele mai bune cazinouri anonime, cum funcționează,
          ce criptomonede să folosești și cum să joci în siguranță la platforme fără KYC.
        </p>

        {/* Quick stats pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <EyeOff className="h-3.5 w-3.5 text-purple-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Fără verificare KYC</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Bitcoin className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Plăți Crypto</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Provably Fair</span>
          </div>
        </div>
      </div>
    </section>
  );
}
