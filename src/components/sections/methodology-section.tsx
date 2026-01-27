import {
  ShieldCheck,
  Gamepad2,
  Gift,
  CreditCard,
  MonitorSmartphone,
  BadgeCheck,
} from 'lucide-react';
import { getAllEvaluationCriteria } from '@/lib/data-helpers';
import { methodologyWeights } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <ShieldCheck className="h-6 w-6" />,
  'gamepad-2': <Gamepad2 className="h-6 w-6" />,
  gift: <Gift className="h-6 w-6" />,
  'credit-card': <CreditCard className="h-6 w-6" />,
  'monitor-smartphone': <MonitorSmartphone className="h-6 w-6" />,
  'badge-check': <BadgeCheck className="h-6 w-6" />,
};

export function MethodologySection() {
  const criteria = getAllEvaluationCriteria();

  return (
    <section id="metodologie" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum evaluăm cazinourile online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Metodologia noastră de evaluare se bazează pe criterii esențiale, cu ponderi transparente.
          </p>
        </div>

        {/* Scoring weights bar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8 shadow-sm">
          <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wide">Model de scoring</p>
          <div className="flex flex-wrap gap-4">
            {methodologyWeights.map((w) => (
              <div key={w.criterion} className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5">
                <span className="text-orange-500">{iconMap[w.icon]}</span>
                <span className="text-sm font-medium text-gray-700">{w.criterion}</span>
                <span className="text-sm font-bold font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">{w.weight}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Criteria grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((criterion) => (
            <div
              key={criterion.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-orange-50 text-orange-500">
                  {iconMap[criterion.icon] || <ShieldCheck className="h-6 w-6" />}
                </span>
                <h3 className="text-base font-bold font-mono text-gray-900">
                  {criterion.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                {criterion.shortDescription}
              </p>
              <ul className="space-y-1.5">
                {criterion.checkpoints.map((cp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
