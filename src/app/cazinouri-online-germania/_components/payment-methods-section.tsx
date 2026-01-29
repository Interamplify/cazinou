import { Landmark, CreditCard, Wallet, Bitcoin } from 'lucide-react';
import { paymentMethods } from '@/data/cazinouri-germania';

const iconMap: Record<string, React.ReactNode> = {
  'Transfer Bancar': <Landmark className="h-5 w-5" />,
  'Carduri (Visa/Mastercard)': <CreditCard className="h-5 w-5" />,
  'E-Wallets': <Wallet className="h-5 w-5" />,
  'Criptomonede': <Bitcoin className="h-5 w-5" />,
};

export function PaymentMethodsSection() {
  return (
    <section id="metode-plata" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de plată la casino online pe piața germană
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Opțiuni de depunere și retragere disponibile la cazinourile GGL și offshore.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 flex-shrink-0">
                  {iconMap[method.category] || <CreditCard className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold font-mono text-gray-900">{method.category}</h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                      method.availability === 'Doar Offshore'
                        ? 'bg-orange-100 text-orange-700'
                        : method.availability.includes('Limitat')
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {method.availability}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
