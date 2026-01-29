import { CreditCard, Wallet, Bitcoin, ArrowUpCircle, ArrowDownCircle, Info } from 'lucide-react';
import Image from 'next/image';

const depositMethods = [
  { name: 'Visa / Mastercard', type: 'card' },
  { name: 'Skrill', type: 'ewallet' },
  { name: 'Neteller', type: 'ewallet' },
  { name: 'PaySafeCard', type: 'ewallet' },
  { name: 'eZeeWallet', type: 'ewallet' },
  { name: 'MiFinity', type: 'ewallet' },
  { name: 'Apple Pay', type: 'wallet' },
  { name: 'Google Pay', type: 'wallet' },
  { name: 'Transfer bancar', type: 'bank' },
];

const cryptoMethods = [
  'Bitcoin (BTC)', 'Tron (TRX)', 'Litecoin (LTC)', 'Tether (USDT)', 'Ripple (XRP)', 'Ethereum (ETH)'
];

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată iWild Casino — 23 Opțiuni Disponibile
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            iWild acceptă 23 de metode de plată incluzând carduri, portofele electronice
            și o gamă largă de criptomonede pentru depuneri și retrageri rapide.
          </p>
        </div>

        {/* Bonus image */}
        <div className="mb-10 max-w-3xl mx-auto">
          <Image
            src="/images/bonusuri-iwild-casino.webp"
            alt="Bonusuri iWild Casino"
            width={800}
            height={400}
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
              {depositMethods.map((method) => (
                <span
                  key={method.name}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  {method.name}
                </span>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <ArrowDownCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> 20 EUR</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Timp procesare:</strong> Instant</span>
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
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> ~72 USD</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Timp procesare:</strong> 10-30 minute</span>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal limits */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm mb-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
              <Wallet className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-amber-900 text-lg mb-3">
                Limite de Retragere
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Per Tranzacție</p>
                  <p className="text-lg font-bold text-amber-700 font-mono">400 EUR</p>
                </div>
                <div className="rounded-lg bg-white p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Pe Zi</p>
                  <p className="text-lg font-bold text-amber-700 font-mono">1.200 EUR</p>
                </div>
                <div className="rounded-lg bg-white p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Pe Lună</p>
                  <p className="text-lg font-bold text-amber-700 font-mono">20.000 EUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important note */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Info className="h-5 w-5 text-red-600" />
            <span className="font-mono font-bold text-red-700">Notă Importantă KYC</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Verificarea KYC poate fi necesară înainte de prima retragere, în special pentru sume mai mari.
            Te recomandăm să efectuezi verificarea din timp pentru a evita întârzieri la retrageri.
          </p>
        </div>
      </div>
    </section>
  );
}
