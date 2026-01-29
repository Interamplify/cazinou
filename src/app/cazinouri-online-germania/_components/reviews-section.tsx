import { getCasinosBySlugs } from '@/lib/data-helpers';
import { CasinoReviews } from '@/components/shared/casino-reviews';
import { cazinouriGermaniaSlugs } from '@/data/cazinouri-germania';

export function ReviewsSection() {
  // Get top 5 casinos for detailed reviews
  const topCasinos = getCasinosBySlugs(cazinouriGermaniaSlugs.slice(0, 5));

  return (
    <section id="recenzii" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recenzii Detaliate — Top 5 Cazinouri Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Analiză completă a celor mai bune cazinouri accesibile din Germania cu VPN.
          </p>
        </div>

        <CasinoReviews casinos={topCasinos} rankPrefix="TOP GERMANIA" />
      </div>
    </section>
  );
}
