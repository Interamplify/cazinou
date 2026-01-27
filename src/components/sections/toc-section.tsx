'use client';

import { tocItems } from '@/data/content';

export function TocSection() {
  return (
    <nav className="hidden lg:block sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-none">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-shrink-0 px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-orange-600 hover:bg-orange-50/60 rounded-lg transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
