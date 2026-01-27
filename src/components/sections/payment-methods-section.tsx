import {
  CreditCard,
  Wallet,
  Bitcoin,
  ShieldCheck,
  FileCheck,
  Clock,
  ArrowDownToLine,
  ArrowUpFromLine,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { getAllPaymentMethods } from '@/lib/data-helpers';
import { depositChecklist, kycContent } from '@/data/content';
import { formatCurrency } from '@/lib/format';

const methodIcons: Record<string, { icon: LucideIcon; color: string; bg: string }> = {
  'visa-mastercard': { icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50' },
  skrill: { icon: Wallet, color: 'text-purple-600', bg: 'bg-purple-50' },
  neteller: { icon: Wallet, color: 'text-green-600', bg: 'bg-green-50' },
  paysafecard: { icon: CreditCard, color: 'text-sky-600', bg: 'bg-sky-50' },
  bitcoin: { icon: Bitcoin, color: 'text-orange-500', bg: 'bg-orange-50' },
};

const defaultIcon = { icon: CreditCard, color: 'text-gray-500', bg: 'bg-gray-50' };

export function PaymentMethodsSection() {
  const methods = getAllPaymentMethods();

  return (
    <section id="metode-plata" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Metode de Plată la Cazinouri Online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Depuneri, retrageri, timpi de procesare și comisioane. Include crypto: Bitcoin, Ethereum, USDT.
          </p>
        </div>

        {/* Payment method cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {methods.map((m) => {
            const { icon: Icon, color, bg } = methodIcons[m.slug] ?? defaultIcon;
            const isDeposit = m.type === 'depunere' || m.type === 'ambele';
            const isWithdrawal = m.type === 'retragere' || m.type === 'ambele';

            return (
              <div
                key={m.slug}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-orange-200 transition-all group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${bg} group-hover:shadow-sm transition-shadow`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-mono text-gray-900">{m.name}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {isDeposit && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5 uppercase">
                          <ArrowDownToLine className="h-2.5 w-2.5" />
                          Dep.
                        </span>
                      )}
                      {isWithdrawal && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-violet-600 bg-violet-50 border border-violet-100 rounded px-1.5 py-0.5 uppercase">
                          <ArrowUpFromLine className="h-2.5 w-2.5" />
                          Ret.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {isDeposit && (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Zap className="h-3 w-3 text-emerald-500" />
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">Depunere</span>
                      </div>
                      <p className="text-sm font-bold font-mono text-gray-900">{m.depositProcessingTime}</p>
                      <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                        Min. {formatCurrency(m.minDeposit)}
                      </p>
                    </div>
                  )}
                  {isWithdrawal && m.minWithdrawal > 0 ? (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="h-3 w-3 text-violet-500" />
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">Retragere</span>
                      </div>
                      <p className="text-sm font-bold font-mono text-gray-900">{m.withdrawalProcessingTime}</p>
                      <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                        Min. {formatCurrency(m.minWithdrawal)}
                      </p>
                    </div>
                  ) : !isWithdrawal ? (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">Retragere</span>
                      </div>
                      <p className="text-sm font-bold font-mono text-gray-400">N/A</p>
                      <p className="text-[11px] text-gray-300 font-mono mt-0.5">Doar depunere</p>
                    </div>
                  ) : null}
                </div>

                {/* Footer: fees + currencies */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className={`text-xs font-semibold ${m.fees === 'Gratuit' ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {m.fees === 'Gratuit' ? 'Fără comision' : m.fees}
                  </span>
                  <div className="flex gap-1">
                    {m.currencies.map((c) => (
                      <span key={c} className="text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mt-3">{m.description}</p>
              </div>
            );
          })}
        </div>

        {/* Checklist + KYC */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-green-50">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-base font-bold font-mono text-gray-900">
                Checklist Înainte de Prima Depunere
              </h3>
            </div>
            <ul className="space-y-2.5">
              {depositChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold font-mono text-gray-900">
                {kycContent.heading}
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{kycContent.intro}</p>
            <ul className="space-y-2.5">
              {kycContent.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-gray-700">{doc.name}</span>
                    {' — '}
                    {doc.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-mono">
                Timp procesare: {kycContent.processingTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
