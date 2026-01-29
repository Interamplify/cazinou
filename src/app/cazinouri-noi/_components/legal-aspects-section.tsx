import { Check, AlertTriangle } from 'lucide-react';
import { legalAspects } from '@/data/cazinouri-noi';

export function LegalAspectsSection() {
  return (
    <section id="legal" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Aspecte Legale
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-3xl mx-auto">{legalAspects.intro}</p>
        </div>

        {/* Two columns comparison */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* ONJN Protection column */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">
                {legalAspects.onjnProtection.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {legalAspects.onjnProtection.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Offshore Reality column */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">
                {legalAspects.offshoreReality.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {legalAspects.offshoreReality.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fiscal Note Warning Callout */}
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 flex-shrink-0">
              <AlertTriangle className="h-4 w-4 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-bold font-mono text-amber-800 mb-1">
                Notă Fiscală Importantă
              </p>
              <p className="text-sm text-amber-800">{legalAspects.fiscalNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
