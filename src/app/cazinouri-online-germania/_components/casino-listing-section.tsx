import { getCasinosBySlugs } from '@/lib/data-helpers';
import { cazinouriGermaniaSlugs } from '@/data/cazinouri-germania';
import { PremiumCasinoTable } from '@/components/casino/premium-casino-table';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(cazinouriGermaniaSlugs);

  return (
    <PremiumCasinoTable
      casinos={casinos}
      title="Top 15 Cazinouri Online Germania pentru Jucători Români"
      subtitle="Selecția noastră de cazinouri accesibile cu VPN din Germania — verificate, testate și recomandate pentru comunitatea română."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
