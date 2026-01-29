import { CalendarDays, Shield, MapPin, Wifi } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-1.5 text-sm font-mono text-gray-400">
            <li><a href="/" className="hover:text-orange-600 transition-colors">Acasă</a></li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Cazinouri Online Germania</li>
          </ol>
        </nav>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
          <CalendarDays className="h-4 w-4 text-orange-400" />
          <span>Actualizat: Ianuarie 2026</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1] max-w-4xl mx-auto">
          Cele Mai Bune Cazinouri Online <span className="text-orange-500">Germania</span> 2026
        </h1>

        {/* Intro paragraph */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Ești jucător român stabilit în Germania și cauți cazinouri online fără restricțiile
          impuse de licența GGL? Ai ajuns unde trebuie. Acest ghid îți prezintă cele mai bune
          cazinouri accesibile cu VPN, bonusurile disponibile, tipurile de jocuri și metodele
          de plată — totul explicat pentru comunitatea română din Germania.
        </p>

        {/* Quick stats pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">15 cazinouri testate</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Accesibile din Germania</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Wifi className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">VPN friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
