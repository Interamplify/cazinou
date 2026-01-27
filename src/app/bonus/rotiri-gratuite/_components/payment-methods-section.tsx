import { Wallet, Zap, Clock, ShieldCheck } from 'lucide-react';

const methods = [
  {
    category: 'E-Wallets',
    items: ['Skrill', 'Neteller', 'ecoPayz'],
    depositTime: 'Instant',
    withdrawTime: '0–24 ore',
    minDeposit: '10€',
    highlight: 'Cele mai rapide retrageri',
    color: 'border-green-200 bg-green-50/30',
    badge: 'bg-green-100 text-green-700',
  },
  {
    category: 'Criptomonede',
    items: ['Bitcoin', 'Ethereum', 'USDT', 'Litecoin'],
    depositTime: 'Instant',
    withdrawTime: '0–24 ore',
    minDeposit: '20€ echivalent',
    highlight: 'Fără limită maximă la unele cazinouri',
    color: 'border-orange-200 bg-orange-50/30',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    category: 'Carduri Bancare',
    items: ['Visa', 'Mastercard'],
    depositTime: 'Instant',
    withdrawTime: '1–5 zile',
    minDeposit: '20€',
    highlight: 'Acceptate universal',
    color: 'border-blue-200 bg-blue-50/30',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Transfer Bancar',
    items: ['SEPA', 'Transfer clasic'],
    depositTime: '1–3 zile',
    withdrawTime: '3–7 zile',
    minDeposit: '50€',
    highlight: 'Limite mari de retragere',
    color: 'border-gray-200 bg-gray-50/30',
    badge: 'bg-gray-100 text-gray-700',
  },
  {
    category: 'Vouchere',
    items: ['Paysafecard', 'CashtoCode'],
    depositTime: 'Instant',
    withdrawTime: 'Nu permite retrageri',
    minDeposit: '10€',
    highlight: 'Doar depuneri — anonim, fără date bancare',
    color: 'border-amber-200 bg-amber-50/30',
    badge: 'bg-amber-100 text-amber-700',
  },
];

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată la Cazinourile cu Rotiri Gratuite
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Opțiuni disponibile pentru depuneri și retrageri — inclusiv criptomonede
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <Zap className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="text-lg font-bold font-mono text-gray-900">0–24h</p>
            <p className="text-xs text-gray-500 font-mono">Retragere e-wallet</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                <Wallet className="h-4 w-4 text-orange-600" />
              </div>
            </div>
            <p className="text-lg font-bold font-mono text-gray-900">5+</p>
            <p className="text-xs text-gray-500 font-mono">Categorii de plată</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <p className="text-lg font-bold font-mono text-gray-900">SSL</p>
            <p className="text-xs text-gray-500 font-mono">Tranzacții criptate</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                <Clock className="h-4 w-4 text-amber-600" />
              </div>
            </div>
            <p className="text-lg font-bold font-mono text-gray-900">Instant</p>
            <p className="text-xs text-gray-500 font-mono">Depuneri crypto</p>
          </div>
        </div>

        {/* Method cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m) => (
            <div
              key={m.category}
              className={`rounded-2xl border-2 p-5 lg:p-6 ${m.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono font-bold text-gray-900">{m.category}</h3>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${m.badge}`}>
                  {m.items.length === 1 ? '1 opțiune' : `${m.items.length} opțiuni`}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono bg-white/80 border border-gray-200 rounded-full px-2.5 py-1 text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">Depunere:</span>
                  <span className="font-semibold text-gray-900 font-mono">{m.depositTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">Retragere:</span>
                  <span className="font-semibold text-gray-900 font-mono">{m.withdrawTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">Minim:</span>
                  <span className="font-semibold text-gray-900 font-mono">{m.minDeposit}</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-600 font-mono border-t border-gray-200/50 pt-3">
                {m.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
