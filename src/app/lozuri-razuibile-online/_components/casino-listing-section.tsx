import { getCasinosBySlugs } from '@/lib/data-helpers';
import { lozuriRazuibileSlugs } from '@/data/lozuri-razuibile';
import { PremiumCasinoTable } from '@/components/casino/premium-casino-table';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(lozuriRazuibileSlugs);

  return (
    <PremiumCasinoTable
      casinos={casinos}
      title="Top Cazinouri cu Jocuri de Lozuri Răzuibile"
      subtitle="Am selectat cele mai bune cazinouri internaționale care oferă lozuri răzuibile online de la furnizori premium."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
