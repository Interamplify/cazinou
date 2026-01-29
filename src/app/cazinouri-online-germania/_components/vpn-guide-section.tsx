import { Check, Lightbulb } from 'lucide-react';
import { vpnGuideSteps } from '@/data/cazinouri-germania';

export function VpnGuideSection() {
  return (
    <section id="ghid-vpn" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum să accesezi cazinourile online Germania cu VPN
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Ghid pas cu pas pentru a accesa platformele internaționale din Germania folosind un VPN.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {vpnGuideSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold font-mono flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold font-mono text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="space-y-1.5">
                    {item.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 max-w-3xl mx-auto rounded-xl bg-blue-50 border border-blue-100 p-4 flex items-start gap-3">
          <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Menține VPN-ul activ pe toată durata sesiunii de joc. Dacă conexiunea VPN se întrerupe, cazinoul poate detecta locația reală și restricționa accesul.
          </p>
        </div>
      </div>
    </section>
  );
}
