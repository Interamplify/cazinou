import { Shield, AlertTriangle, Check, Info } from 'lucide-react';
import { legalAspects } from '@/data/cazinouri-germania';

export function LegalSection() {
  return (
    <section id="legalitate" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Este legal să joci la cazinouri online Germania?
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            {legalAspects.intro}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* GGL Licensed */}
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">{legalAspects.gglLicensed.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{legalAspects.gglLicensed.description}</p>
            <div className="space-y-2">
              {legalAspects.gglLicensed.restrictions.map((restriction, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{restriction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VPN Alternative */}
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">{legalAspects.vpnAlternative.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{legalAspects.vpnAlternative.description}</p>
            <div className="space-y-2">
              {legalAspects.vpnAlternative.advantages.map((advantage, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VPN Note */}
        <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800">{legalAspects.vpnNote}</p>
        </div>
      </div>
    </section>
  );
}
