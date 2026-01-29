import { authorInfo, introContent } from '@/data/content';
import { CalendarDays, UserCircle, Shield, Star, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background con gradient y pattern sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/30" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto max-w-7xl py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
            Recenzii Independente
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            20+ Cazinouri Testate
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-orange-500" />
            Actualizat Lunar
          </span>
        </div>

        {/* Author line */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-6 animate-fade-in-up opacity-0 stagger-1">
          <div className="flex items-center gap-2">
            <UserCircle className="h-4 w-4 text-orange-400" />
            <span className="font-medium text-gray-600">{authorInfo.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-orange-400" />
            <span>{authorInfo.lastUpdated}</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] animate-fade-in-up opacity-0 stagger-2">
          Top Cazinouri Online{' '}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Internaționale</span>
          </span>{' '}
          2026
        </h1>

        {/* Compact intro */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto animate-fade-in-up opacity-0 stagger-3">
          {introContent.paragraphs[0]} {introContent.paragraphs[1]}
        </p>

        {/* CTA rápido */}
        <div className="mt-8 animate-fade-in-up opacity-0 stagger-4">
          <a
            href="#top-cazinouri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            Vezi Clasamentul
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
