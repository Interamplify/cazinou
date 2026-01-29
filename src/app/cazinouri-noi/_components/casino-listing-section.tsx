import { getCasinosBySlugs } from '@/lib/data-helpers';
import { cazinouriNoiSlugs } from '@/data/cazinouri-noi';
import { PremiumCasinoTable } from '@/components/casino/premium-casino-table';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(cazinouriNoiSlugs);

  return (
    <PremiumCasinoTable
      casinos={casinos}
      title="Tabel comparativ — Top 20 Cazinouri Noi Internaționale"
      subtitle="Am analizat cele mai noi platforme de cazino internaționale lansate între 2023-2026 și am selectat cele mai sigure și atractive opțiuni accesibile din România."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
