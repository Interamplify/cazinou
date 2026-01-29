import { CreditCard, Wallet, Bitcoin, ArrowUpCircle, ArrowDownCircle, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const fiatMethods = [
  'Visa', 'Mastercard', 'Maestro', 'Skrill', 'Neteller', 'ecoPayz', 'Jeton Wallet', 'Perfect Money', 'ePay'
];

const cryptoMethods = [
  'Bitcoin', 'Ethereum', 'Litecoin', 'Dogecoin', 'Dash', 'Monero', 'Zcash', 'TRON', 'Ripple', 'USD Coin'
];

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată Megapari Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Megapari acceptă o gamă largă de metode de plată, de la carduri bancare
            și portofele electronice până la numeroase criptomonede.
          </p>
        </div>

        {/* Payment methods image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/megapari-metode-de-plata.webp"
            alt="Metode de Plată Megapari"
            width={2200}
            height={1340}
            className="rounded-xl shadow-lg w-full h-auto"
          />
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
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> 5 RON</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Retragere:</strong> 10 RON - 100.000 RON</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700"><strong>Timp:</strong> Instant - 7 zile</span>
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
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> 5 RON</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Retragere:</strong> ~1.5 - 10.000 EUR echivalent</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700"><strong>Timp:</strong> Până la 1 oră (cea mai rapidă)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal times */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Timpi de Procesare Retrageri
          </h3>
          <div className="grid gap-4 sm:grid-cols-4 text-center">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">Carduri</p>
              <p className="text-sm font-bold text-gray-900 font-mono">1-7 zile</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">E-Wallets</p>
              <p className="text-sm font-bold text-gray-900 font-mono">până la 48h</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">Transfer Bancar</p>
              <p className="text-sm font-bold text-gray-900 font-mono">până la 5 zile</p>
            </div>
            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">Crypto</p>
              <p className="text-sm font-bold text-green-600 font-mono">până la 1h</p>
            </div>
          </div>
        </div>

        {/* Important warning */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-mono font-bold text-red-700">Atenție pentru Bonusuri</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Depunerile cu <strong>criptomonede NU sunt eligibile</strong> pentru bonusurile de bun venit.
            Folosește carduri sau portofele electronice dacă vrei să activezi bonusul.
            Verificarea KYC poate fi necesară pentru retrageri mai mari.
          </p>
        </div>
      </div>
    </section>
  );
}
