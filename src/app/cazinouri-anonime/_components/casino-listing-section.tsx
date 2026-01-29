import { anonymousCasinos } from '@/data/cazinouri-anonime';
import { PremiumAnonymousTable } from '@/components/casino/premium-anonymous-table';

export function CasinoListingSection() {
  return (
    <PremiumAnonymousTable
      casinos={anonymousCasinos}
      title="Top Cazinouri Anonime Fără Verificare"
      subtitle="Cele mai bune cazinouri crypto unde poți juca fără KYC, cu bonusuri generoase și retrageri rapide."
      initialCount={10}
      showMoreEnabled={true}
    />
  );
}
