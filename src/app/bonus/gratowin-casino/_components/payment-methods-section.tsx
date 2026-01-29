import { CreditCard, ArrowUpCircle, ArrowDownCircle, Clock, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată GratoWin Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Varietate de metode de plată, inclusiv plata cu cardul pentru jucătorii români.
          </p>
        </div>

        {/* Payment methods image */}
        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="/images/gratowin-metode-de-plata.webp"
            alt="Metode de Plată GratoWin"
            width={1422}
            height={641}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Deposits */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <ArrowDownCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Depuneri</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Depunere minimă</span>
                <span className="font-mono font-bold text-gray-900">50 RON</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Minimă cu card</span>
                <span className="font-mono font-bold text-gray-900">100 RON</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Procesare</span>
                <span className="font-mono font-bold text-green-600">Instant</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Comisioane</span>
                <span className="font-mono font-bold text-green-600">0%</span>
              </div>
            </div>
          </div>

          {/* Withdrawals */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <ArrowUpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-mono font-bold text-gray-900 text-lg">Retrageri</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Retragere minimă</span>
                <span className="font-mono font-bold text-gray-900">250 RON</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Limită Entry</span>
                <span className="font-mono font-bold text-amber-600">2.500 RON/lună</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Timp așteptare</span>
                <span className="font-mono font-bold text-gray-900">până la 48h</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700">Procesare totală</span>
                <span className="font-mono font-bold text-gray-900">2-8 zile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal limits warning */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-mono font-bold text-amber-700">Limită de Retragere pentru Jucători Noi</span>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                Limita lunară de retragere pentru nivelul Entry este de doar <strong>500 EUR (2.500 RON)</strong>.
                Plățile mai mari vor trebui împărțite în tranșe. Limitele cresc odată cu avansarea în programul VIP.
              </p>
            </div>
          </div>
        </div>

        {/* KYC note */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Verificare KYC:</strong> Poți retrage sume mici (sub 200 EUR) fără verificare.
            Pentru retrageri mai mari, procesul KYC devine obligatoriu.
          </p>
        </div>
      </div>
    </section>
  );
}
