import { Shield, Mail, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';

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

            {/* Support image */}
            <div className="mb-6">
              <Image
                src="/images/gratowin-suport.webp"
                alt="GratoWin Suport"
                width={1357}
                height={495}
                className="rounded-xl w-full h-auto"
              />
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
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">support@gratowin.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <MessageCircle className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Live Chat</p>
                  <p className="text-sm font-medium text-gray-900">Pe site (program limitat)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Phone className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Telefon</p>
                  <p className="text-sm font-medium text-gray-900">+35722030935</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong className="text-amber-700">Notă:</strong> Suportul GratoWin este disponibil
                doar în limba engleză. Live chat-ul nu funcționează 24/7.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Jocurile de noroc sunt interzise persoanelor sub 18 ani. GratoWin Casino este
                operat de Unigad Trading N.V. sub licența din Curaçao (Antillephone N.V.
                8048/JAZ2017-072). Site-ul nu are licență ONJN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
