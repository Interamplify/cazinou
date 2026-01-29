import { getCasinosBySlugs } from '@/lib/data-helpers';
import { rotiriGratuiteSlugs } from '@/data/rotiri-gratuite';
import { PremiumCasinoTable } from '@/components/casino/premium-casino-table';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(rotiriGratuiteSlugs);

  return (
    <PremiumCasinoTable
      casinos={casinos}
      title="Tabel Comparativ — Top 20 Cazinouri cu Rotiri Gratuite"
      subtitle="Am analizat ofertele a peste 50 de cazinouri internaționale și am selectat platformele cu cele mai bune pachete de rotiri gratuite."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
