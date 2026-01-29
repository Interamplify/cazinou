import { Bitcoin, Shield, Eye, EyeOff } from 'lucide-react';
import { privacyCoins } from '@/data/cazinouri-anonime';

export function CryptoSection() {
  return (
    <section id="crypto" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ce Monede Să Utilizezi la Cazinouri Anonime?
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Pentru a-ți spori anonimitatea, alege criptomonede renumite pentru
            protecția datelor.
          </p>
        </div>

        {/* Privacy coins */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {privacyCoins.map((coin) => (
            <article
              key={coin.name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <Bitcoin className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="font-mono font-bold text-gray-900">{coin.name}</h3>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    coin.privacy === 'Foarte ridicat'
                      ? 'bg-green-100 text-green-700'
                      : coin.privacy === 'Ridicat'
                        ? 'bg-blue-100 text-blue-700'
                        : coin.privacy === 'Mediu-Ridicat'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {coin.privacy}
                </span>
              </div>
              <p className="text-sm text-gray-600">{coin.description}</p>
            </article>
          ))}
        </div>

        {/* Privacy comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
              Comparație Nivel de Confidențialitate
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* High privacy */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <EyeOff className="h-5 w-5 text-green-600" />
                  <span className="font-mono font-semibold text-green-800">Confidențialitate Maximă</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span><strong>Monero (XMR)</strong> — Tranzacții complet private</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span><strong>Zcash (ZEC)</strong> — Date criptate complet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span><strong>Dash</strong> — Opțiune PrivateSend</span>
                  </li>
                </ul>
              </div>

              {/* Standard privacy */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="font-mono font-semibold text-blue-800">Confidențialitate Standard</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Bitcoin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Bitcoin (BTC)</strong> — Cel mai acceptat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bitcoin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Ethereum (ETH)</strong> — Tranzacții rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bitcoin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span><strong>USDT</strong> — Evită volatilitatea</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Toate criptomonedele oferă un grad mai mare de anonimat decât metodele
              standard de plată (carduri Visa/Mastercard).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
