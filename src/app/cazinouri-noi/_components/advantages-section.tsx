import { Gift, Gamepad2, CreditCard, Award, Wallet, Smartphone } from 'lucide-react';
import { advantages } from '@/data/cazinouri-noi';

const icons = [Gift, Gamepad2, CreditCard, Award, Wallet, Smartphone];

export function AdvantagesSection() {
  return (
    <section id="avantaje" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-green-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Avantajele Cazinourilor Noi
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            De ce să alegi un cazinou nou? Iată principalele beneficii față de platformele stabilite.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = icons[index] || Gift;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <Icon className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-sm font-bold font-mono text-gray-900">{item.title}</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                {item.example && (
                  <p className="mt-2 text-xs text-green-700 bg-green-50 px-2.5 py-1.5 rounded-md border border-green-100">
                    {item.example}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
