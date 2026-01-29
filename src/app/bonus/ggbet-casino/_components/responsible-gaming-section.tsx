import { Shield, Mail, Phone, Globe } from 'lucide-react';
import Image from 'next/image';

export function ResponsibleGamingSection() {
  return (
    <section className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="font-mono font-bold text-gray-900 text-xl">Joc Responsabil</h2>
            </div>

            {/* License image */}
            <div className="mb-6">
              <Image
                src="/images/ggbet-licenta.webp"
                alt="GGBet Licență"
                width={469}
                height={252}
                className="rounded-xl w-full h-auto"
              />
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50/50 p-5 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-green-700">Suport disponibil:</strong> GGBet oferă suport
                  clienți 24/7 prin email și telefon. Platforma este optimizată pentru mobil și
                  disponibilă în limba română.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Jocurile de noroc pot cauza dependență. Joacă responsabil și nu încerca să recuperezi
              pierderile. Stabilește-ți un buget înainte de a începe și respectă-l. Dacă simți că
              jocurile de noroc devin o problemă, solicită ajutor.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Mail className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Email Suport</p>
                  <p className="text-sm font-medium text-gray-900">support@gg.bet</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Phone className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Telefon</p>
                  <p className="text-sm font-medium text-gray-900">+44 203 769 1962</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Globe className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Limba</p>
                  <p className="text-sm font-medium text-gray-900">Română disponibilă</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Jocurile de noroc sunt interzise persoanelor sub 18 ani. GGBet Casino este
                operat de River Entertainment B.V. sub licența din Curaçao (8048/Jaz2021-184).
                Site-ul nu are licență ONJN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
