import { getCasinosBySlugs } from '@/lib/data-helpers';
import { faraDepunereSlugs } from '@/data/bonus-fara-depunere';
import { PremiumCasinoTable } from '@/components/casino/premium-casino-table';

export function CasinoListingSection() {
  const casinos = getCasinosBySlugs(faraDepunereSlugs);

  return (
    <PremiumCasinoTable
      casinos={casinos}
      title="Tabel comparativ — Top 10 Cazinouri cu Bonus Fără Depunere"
      subtitle="Am analizat ofertele a peste 50 de cazinouri internaționale și am selectat platformele care oferă bonusuri fără depunere accesibile din România."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
