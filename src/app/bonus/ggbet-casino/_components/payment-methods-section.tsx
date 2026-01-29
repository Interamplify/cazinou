import { CreditCard, Wallet, Bitcoin, ArrowUpCircle, ArrowDownCircle, AlertTriangle } from 'lucide-react';

const fiatMethods = [
  'Visa', 'Mastercard', 'Skrill', 'Neteller', 'MiFinity'
];

const cryptoMethods = [
  'Bitcoin (BTC)', 'Ethereum (ETH)', 'Tether (USDT)', 'Litecoin (LTC)'
];

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată GGBet Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            GGBet acceptă carduri bancare, portofele electronice și criptomonede
            pentru depuneri și retrageri.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* FIAT Methods */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Metode FIAT</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {fiatMethods.map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <ArrowDownCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> 50 RON (10 EUR)</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Depunere maximă:</strong> 9.000 EUR</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700"><strong>Retragere max:</strong> 50.000 USD/tranșă</span>
              </div>
            </div>
          </div>

          {/* Crypto Methods */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Bitcoin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Criptomonede</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {cryptoMethods.map((crypto) => (
                <span
                  key={crypto}
                  className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700"
                >
                  {crypto}
                </span>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <ArrowDownCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700"><strong>Depunere:</strong> Instant</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Retragere:</strong> Procesare rapidă</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700"><strong>Comisioane:</strong> Verifică la depunere</span>
              </div>
            </div>
          </div>
        </div>

        {/* KYC Info */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Verificare KYC și Retrageri
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 text-center">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Verificare KYC</p>
              <p className="text-sm font-bold text-gray-900 font-mono">La cerere (sume mari)</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs text-gray-500 uppercase mb-1">Retragere Max/Tranșă</p>
              <p className="text-sm font-bold text-gray-900 font-mono">50.000 USD</p>
            </div>
          </div>
        </div>

        {/* Important warning - 2x Fee */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-mono font-bold text-red-700">Taxă 20% Fonduri Nerulate</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Se aplică o taxă de <strong>20%</strong> la retragere dacă fondurile depuse nu au fost
            rulate de cel puțin <strong>2x</strong>. Această cerință este separată de rulajul bonusurilor.
            Exemplu: depui 1.000 RON, pariezi minim 2.000 RON pentru a evita taxa.
          </p>
        </div>
      </div>
    </section>
  );
}
