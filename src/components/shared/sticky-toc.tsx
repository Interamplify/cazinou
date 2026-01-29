'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface TocItem {
  id: string;
  label: string;
}

export function StickyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');
  const isClickingRef = useRef(false);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
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

  // Observe sections to track active ID (only when not clicking)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return;

        // Find the topmost visible section
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by position in items array to get the topmost
          const sortedByOrder = visibleEntries.sort((a, b) => {
            const aIndex = items.findIndex((item) => item.id === a.target.id);
            const bIndex = items.findIndex((item) => item.id === b.target.id);
            return aIndex - bIndex;
          });
          setActiveId(sortedByOrder[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -50% 0px', threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  // Auto-scroll TOC bar to keep active button visible
  useEffect(() => {
    if (!activeId || !scrollContainerRef.current) return;
    const btn = buttonRefs.current.get(activeId);
    if (!btn) return;

    const container = scrollContainerRef.current;
    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate scroll position to center the button
    const scrollLeft =
      btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;

    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'auto' });
  }, [activeId]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Block observer updates during scroll
    isClickingRef.current = true;
    setActiveId(id);

    // Calculate offset for sticky header (64px) + sticky toc (~48px)
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });

    // Re-enable observer after scroll completes
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav
      aria-label="Cuprins"
      className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          ref={scrollContainerRef}
          className="flex justify-start md:justify-center gap-1 overflow-x-auto py-2.5 scrollbar-hide -mx-1 px-1"
        >
          {items.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <button
                ref={setButtonRef(item.id)}
                type="button"
                onClick={() => handleClick(item.id)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
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
