import { CheckCircle, FileText, Wallet, Clock, AlertTriangle } from 'lucide-react';

const paymentMethods = [
  { method: 'Skrill / Neteller', time: '0–24 ore', min: '10€', max: '5.000€', speed: 'fast' },
  { method: 'Bitcoin / Crypto', time: '0–24 ore', min: '20€', max: '10.000€', speed: 'fast' },
  { method: 'Visa / Mastercard', time: '1–5 zile', min: '20€', max: '5.000€', speed: 'medium' },
  { method: 'Transfer SEPA', time: '3–7 zile', min: '50€', max: '10.000€', speed: 'slow' },
  { method: 'Paysafecard', time: 'Nu permite retrageri', min: '–', max: '–', speed: 'none' },
];

const steps = [
  {
    step: 1,
    title: 'Verifică Rulajul',
    desc: 'Confirmă că ai completat 100% din rulaj pe câștigurile din rotiri, nu ai depășit plafonul de câștig și bonusul nu a expirat.',
    Icon: CheckCircle,
  },
  {
    step: 2,
    title: 'Completează KYC',
    desc: 'Trimite: buletin/pașaport (ambele fețe), factură de utilități recentă (sub 3 luni), dovadă card/e-wallet.',
    Icon: FileText,
  },
  {
    step: 3,
    title: 'Solicită Retragerea',
    desc: 'Accesează secțiunea Casierie: selectează metoda (Skrill, Neteller, crypto sunt cele mai rapide), introdu suma, confirmă.',
    Icon: Wallet,
  },
  {
    step: 4,
    title: 'Primește Banii',
    desc: 'E-wallet/crypto: 0–24 ore. Card: 1–5 zile. Transfer SEPA: 3–7 zile.',
    Icon: Clock,
  },
];

export function WithdrawalSection() {
  return (
    <section id="retragere" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Retragi Câștigurile din Rotiri Gratuite
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Procesul complet de la îndeplinirea rulajului până la primirea banilor în cont
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                  <item.Icon className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Pasul {item.step}
                </span>
              </div>
              <h3 className="font-mono font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Payment methods table */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-mono font-bold text-lg text-gray-900">
              Timpii de Retragere pe Metodă de Plată
            </h3>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Metodă', 'Timp Procesare', 'Minim', 'Maxim'].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 font-mono"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paymentMethods.map((pm, idx) => (
                  <tr key={pm.method} className={idx % 2 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium font-mono">
                      {pm.method}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold ${
                          pm.speed === 'fast'
                            ? 'bg-green-50 text-green-700'
                            : pm.speed === 'medium'
                              ? 'bg-amber-50 text-amber-700'
                              : pm.speed === 'slow'
                                ? 'bg-orange-50 text-orange-700'
                                : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {pm.time}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{pm.min}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{pm.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden divide-y divide-gray-200">
            {paymentMethods.map((pm) => (
              <div key={pm.method} className="p-4 space-y-2">
                <p className="text-sm font-bold font-mono text-gray-900">{pm.method}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Timp</p>
                    <p className="text-xs font-semibold font-mono text-gray-700">{pm.time}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Min</p>
                    <p className="text-xs font-semibold font-mono text-gray-700">{pm.min}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 py-1.5 px-1">
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Max</p>
                    <p className="text-xs font-semibold font-mono text-gray-700">{pm.max}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <aside className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-800">Important:</strong> Câștigurile din rotirile gratuite
            au frecvent un <strong>plafon maxim de retragere</strong> (50–100€ pentru oferte fără
            depunere). Sumele care depășesc acest plafon sunt anulate automat.
          </p>
        </aside>
      </div>
    </section>
  );
}
