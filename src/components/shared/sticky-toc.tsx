'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

export function StickyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Cuprins"
      className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center gap-1 overflow-x-auto py-2.5 scrollbar-hide -mx-1 px-1">
          {items.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <button
                onClick={() => handleClick(item.id)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
                  activeId === item.id
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
