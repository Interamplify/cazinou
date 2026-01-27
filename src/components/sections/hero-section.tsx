import { authorInfo, introContent } from '@/data/content';
import { CalendarDays, UserCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Author line */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-8">
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
        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-mono leading-[1.1]">
          Top Cazinouri Online{' '}
          <span className="text-orange-500">Internaționale</span> 2026
        </h1>

        {/* Compact intro — single paragraph merging subtitle + editorial */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
          {introContent.paragraphs[0]} {introContent.paragraphs[1]}
        </p>
      </div>
    </section>
  );
}
