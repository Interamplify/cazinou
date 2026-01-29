import { Check } from 'lucide-react';
import { howToChooseSteps } from '@/data/cazinouri-germania';

export function HowToChooseSection() {
  return (
    <section id="cum-alegi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum să alegi un casino online Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Patru criterii esențiale pentru a găsi platforma potrivită nevoilor tale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {howToChooseSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md hover:border-orange-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold font-mono">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold font-mono text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="space-y-2 rounded-xl bg-gray-50 p-4">
                {step.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
