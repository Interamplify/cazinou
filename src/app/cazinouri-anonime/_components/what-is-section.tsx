import { HelpCircle, Mail, Wallet, MessageCircle } from 'lucide-react';

export function WhatIsSection() {
  return (
    <section id="ce-este" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ce Este un Cazino Anonim?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-gray-900 text-lg mb-2">Definiție</h3>
                <p className="text-gray-600 leading-relaxed">
                  Termenul de cazino anonim se referă la platformele online care permit jucătorilor
                  să joace fără a fi nevoie să dezvăluie date personale în procesul de verificare.
                  Cu alte cuvinte, jucătorii pot să se înregistreze, să facă un depozit și să joace
                  oferind un minim de informații personale.
                </p>
              </div>
            </div>

            <h3 className="font-mono font-bold text-gray-900 text-lg mb-4">Metode de înregistrare la cazinouri anonime:</h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="font-mono font-semibold text-gray-900">Email</span>
                </div>
                <p className="text-sm text-gray-600">
                  O adresă de e-mail care nu trebuie să fie legată de datele tale reale.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="h-5 w-5 text-orange-600" />
                  <span className="font-mono font-semibold text-gray-900">Crypto Wallet</span>
                </div>
                <p className="text-sm text-gray-600">
                  Conectare directă cu un portofel crypto precum MetaMask.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  <span className="font-mono font-semibold text-gray-900">Telegram</span>
                </div>
                <p className="text-sm text-gray-600">
                  Unele platforme permit înregistrarea doar cu un cont de Telegram.
                </p>
              </div>
            </div>
          </div>

          {/* Legal notice */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-amber-700">Important:</strong> Jocul la cazinouri anonime este posibil,
              însă aceste platforme sunt internaționale și nu au licență locală. Majoritatea operează
              sub licențe offshore (Curaçao, Anjouan) care oferă protecție redusă consumatorilor.
              În România, legea prevede verificarea KYC la cazinouri. Acest articol este informativ
              și se referă la cazinouri internaționale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
