import { getCasinosBySlugs } from '@/lib/data-helpers';
import { TopList } from '@/components/shared/top-list';
import { cazinouriGermaniaSlugs } from '@/data/cazinouri-germania';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(cazinouriGermaniaSlugs);

  return (
    <section id="top-cazinouri" className="py-8 lg:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Top 15 Cazinouri Online Germania pentru Jucători Români
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Selecția noastră de cazinouri accesibile cu VPN din Germania — verificate, testate și recomandate pentru comunitatea română.
          </p>
        </div>
        <TopList casinos={casinos} trackingSource="cazinouri-online-germania" />
      </div>
    </section>
  );
}
