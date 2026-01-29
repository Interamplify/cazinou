import { CalendarDays, Shield, Clock, Award } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { cazinouriNoiSlugs } from '@/data/cazinouri-noi';
import { HeroTop3 } from '@/components/casino/hero-top3';

export function HeroSection() {
  const casinos = getCasinosBySlugs(cazinouriNoiSlugs);

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
            <li className="text-gray-900 font-semibold">Cazinouri Noi</li>
          </ol>
        </nav>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
          <CalendarDays className="h-4 w-4 text-orange-400" />
          <span>Actualizat: Ianuarie 2026</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1]">
          Cazinouri <span className="text-orange-500">Noi</span> Internaționale 2026
        </h1>

        {/* Intro paragraphs */}
        <div className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 space-y-4 text-left">
          <p>
            Descoperă o selecție atent aleasă de cazinouri noi internaționale, recent lansate, care vin cu
            bonusuri atractive pentru jucători din România. Printre acestea se regăsesc atât cazinouri cu
            bonus fără depunere, ideale pentru testare fără riscuri, cât și platforme cu pachete la depunere
            extrem de generoase.
          </p>
          <p className="text-gray-500">
            Înainte de a explora lista, este esențial să înțelegi contextul: tipurile de licență, reputația
            operatorilor, termenii bonusurilor, cerințele de rulaj și metodele de plată disponibile. Mai jos
            găsești recomandările noastre și un ghid complet pentru verificarea fiecărei platforme.
          </p>
        </div>

        {/* Quick stats pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">20 cazinouri testate</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Clock className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Lansate 2023-2026</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Award className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-xs font-mono font-semibold text-gray-700">Licențe verificate</span>
          </div>
        </div>

        {/* TOP 3 COMPACTO */}
        <div className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">🏆 Top 3 Cazinouri Noi</p>
          <HeroTop3 casinos={casinos} />
        </div>

        {/* CTA */}
        <a
          href="#top-cazinouri"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
        >
          Vezi Clasamentul Complet
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
