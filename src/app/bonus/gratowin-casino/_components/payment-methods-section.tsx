import { CreditCard, Wallet, ArrowUpCircle, ArrowDownCircle, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const paymentMethods = [
  'Visa', 'Mastercard', 'Skrill', 'Neteller', 'ecoPayz', 'MuchBetter', 'Jeton', 'Perfect Money'
];

export function PaymentMethodsSection() {
  return (
    <section id="plati" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată GratoWin Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            GratoWin acceptă carduri bancare și portofele electronice,
            cu plata cu cardul disponibilă pentru jucătorii români.
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

            <div className="flex flex-wrap gap-2 mb-5">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <ArrowDownCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700"><strong>Depunere minimă:</strong> 50 RON (100 RON cu card)</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700"><strong>Procesare:</strong> Instant</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700"><strong>Comisioane:</strong> 0%</span>
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

        {/* Withdrawal times */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Timpi de Procesare Retrageri
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">Carduri</p>
              <p className="text-sm font-bold text-gray-900 font-mono">2-8 zile</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">E-Wallets</p>
              <p className="text-sm font-bold text-gray-900 font-mono">până la 48h</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500 uppercase mb-1">Transfer Bancar</p>
              <p className="text-sm font-bold text-gray-900 font-mono">până la 5 zile</p>
            </div>
          </div>
        </div>

        {/* Important warning */}
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
