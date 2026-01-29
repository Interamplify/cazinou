import { Shield, AlertTriangle } from 'lucide-react';

export function ResponsibleGamingSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="font-mono font-bold text-gray-900 text-xl">Joc Responsabil</h2>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-amber-700">Atenție:</strong> Cazinourile anonime oferă
                  adesea opțiuni limitate de joc responsabil comparativ cu platformele licențiate.
                  Instrumentele de auto-excludere și limitele de depunere pot fi mai greu de accesat
                  sau inexistente.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Jocurile de noroc pot cauza dependență. Joacă responsabil și nu încerca să recuperezi
              pierderile. Stabilește-ți un buget înainte de a începe și respectă-l. Dacă simți că
              jocurile de noroc devin o problemă, solicită ajutor imediat.
            </p>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-700 mb-3">Resurse utile pentru joc responsabil:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Gambling Therapy:</strong>{' '}
                  <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                    gamblingtherapy.org
                  </a>
                </li>
                <li>
                  <strong>BeGambleAware:</strong>{' '}
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                    begambleaware.org
                  </a>
                </li>
                <li>
                  <strong>GamCare:</strong>{' '}
                  <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                    gamcare.org.uk
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Jocurile de noroc sunt interzise persoanelor sub 18 ani. Cazinourile anonime
                operează de obicei sub licențe offshore (Curaçao, Anjouan) care oferă protecție
                limitată consumatorilor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
