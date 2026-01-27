import { getCasinosBySlugs } from '@/lib/data-helpers';
import { faraDepunereSlugs } from '@/data/bonus-fara-depunere';
import { ExternalLink } from 'lucide-react';

const activationData: Record<
  string,
  { method: string; code: string; maxCashout: string; expiry: string }
> = {
  'spinch-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '14 zile' },
  'cosmic-slot-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '7 zile' },
  'rolletto-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '14 zile' },
  'national-casino': { method: 'Activare din cont', code: '—', maxCashout: '50€', expiry: '7 zile' },
  'iwild-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '14 zile' },
  'velobet-casino': { method: 'Verificare email', code: '—', maxCashout: '100€', expiry: '14 zile' },
  'billionairespin-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '14 zile' },
  'ggbet-casino': { method: 'Activare din cont', code: '—', maxCashout: '50€', expiry: '7 zile' },
  'vavada-casino': { method: 'Automat la înregistrare', code: '—', maxCashout: '100€', expiry: '30 zile' },
  'fairspin-casino': { method: 'Verificare email', code: '—', maxCashout: '100€', expiry: '14 zile' },
};

export function ActivationGuideSection() {
  const casinos = getCasinosBySlugs(faraDepunereSlugs);

  return (
    <section id="activare" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Activezi Bonusul la Fiecare Cazinou
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Detalii practice per cazinou: metodă de activare, cod, rulaj, câștig maxim și termen
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Casino', 'Bonus', 'Cod', 'Activare', 'Rulaj', 'Max Câștig', 'Expirare', ''].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {casinos.map((casino, i) => {
                const data = activationData[casino.slug];
                return (
                  <tr
                    key={casino.slug}
                    className={`transition-colors hover:bg-orange-50/40 ${i < 3 ? 'bg-orange-50/20' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <span className="text-[13px] font-bold font-mono text-gray-900 whitespace-nowrap">
                        {casino.name}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] font-semibold text-orange-600 font-mono whitespace-nowrap">
                        {casino.bonusTitle.split('+')[0].trim()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[12px] font-mono font-semibold ${
                          data?.code === '—' ? 'text-gray-400' : 'text-green-700 bg-green-50 px-2 py-0.5 rounded'
                        }`}
                      >
                        {data?.code ?? '—'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] text-gray-700 font-mono">{data?.method ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] font-bold font-mono text-gray-900">
                        x{casino.wageringRequirement}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] font-mono text-gray-700">{data?.maxCashout ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] font-mono text-gray-700">{data?.expiry ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 rounded-xl bg-orange-500 px-3 py-1.5 text-[11px] font-bold font-mono text-white hover:bg-orange-600 transition-colors whitespace-nowrap"
                      >
                        Activează <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-3">
          {casinos.map((casino, i) => {
            const data = activationData[casino.slug];
            return (
              <div
                key={casino.slug}
                className={`rounded-xl border p-4 ${
                  i < 3 ? 'border-orange-200 bg-orange-50/30' : 'border-gray-200 bg-white'
                }`}
              >
                <p className="text-sm font-bold font-mono text-gray-900 mb-2">{casino.name}</p>
                <p className="text-xs font-semibold text-orange-600 font-mono mb-3">
                  {casino.bonusTitle.split('+')[0].trim()}
                </p>
                <div className="grid grid-cols-2 gap-2 text-center mb-3">
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Rulaj</p>
                    <p className="text-xs font-bold font-mono text-gray-900">x{casino.wageringRequirement}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Max Câștig</p>
                    <p className="text-xs font-bold font-mono text-gray-900">{data?.maxCashout ?? '—'}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Activare</p>
                    <p className="text-xs font-bold font-mono text-gray-900">Automată</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Expirare</p>
                    <p className="text-xs font-bold font-mono text-gray-900">{data?.expiry ?? '—'}</p>
                  </div>
                </div>
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-2.5 text-xs font-bold font-mono transition-colors"
                >
                  Activează Bonusul <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
