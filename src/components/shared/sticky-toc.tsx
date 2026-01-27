'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface TocItem {
  id: string;
  label: string;
}

export function StickyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setButtonRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      if (el) {
        buttonRefs.current.set(id, el);
      } else {
        buttonRefs.current.delete(id);
      }
    },
    [],
  );

  // Observe sections to track active ID
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  // Auto-scroll the TOC bar to keep active button visible
  useEffect(() => {
    if (!activeId) return;
    const btn = buttonRefs.current.get(activeId);
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeId]);

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
                ref={setButtonRef(item.id)}
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
