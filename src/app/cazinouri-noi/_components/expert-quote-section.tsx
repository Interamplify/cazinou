import { expertQuote } from '@/data/cazinouri-noi';

export function ExpertQuoteSection() {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-orange-50/50 border border-orange-100 p-6 lg:p-8 font-mono">
          <div className="flex items-start gap-4">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xl">
                {expertQuote.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-3">
                <p className="font-bold text-lg text-gray-900">{expertQuote.name}</p>
                <p className="text-sm text-gray-600">{expertQuote.role}</p>
              </div>
              <blockquote className="relative">
                <svg
                  className="absolute -left-1 -top-2 w-8 h-8 text-orange-200 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-gray-700 leading-relaxed pl-6 italic">{expertQuote.quote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
