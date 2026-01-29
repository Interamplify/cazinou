import { Sparkles, CheckCircle2 } from 'lucide-react';

const freeSpinsSlots = [
  {
    deposit: 1,
    slot: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    spins: 200,
    features: ['Scatter Pays', 'Tumble Feature', 'Multipliers până la 100x'],
    color: 'orange',
  },
  {
    deposit: 2,
    slot: 'Sugar Rush',
    provider: 'Pragmatic Play',
    spins: 100,
    features: ['Cluster Pays', 'Multiplicatori crescători', 'Volatilitate mare'],
    color: 'pink',
  },
  {
    deposit: 3,
    slot: 'The Dog House',
    provider: 'Pragmatic Play',
    spins: 100,
    features: ['Sticky Wilds', 'Free Spins cu multiplicatori', '20 linii de plată'],
    color: 'blue',
  },
  {
    deposit: 4,
    slot: 'Big Bass Bonanza',
    provider: 'Pragmatic Play',
    spins: 150,
    features: ['Fish Collect Feature', 'Free Spins cu Money Symbols', 'Pescarul Wild'],
    color: 'green',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-500' },
  pink: { border: 'border-pink-300', bg: 'bg-pink-50', text: 'text-pink-700', badge: 'bg-pink-500' },
  blue: { border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-500' },
  green: { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-500' },
};

export function FreeSpinsSection() {
  return (
    <section id="rotiri-gratuite" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            550 Rotiri Gratuite pe Sloturi Pragmatic Play
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Fiecare depunere îți aduce rotiri gratuite pe unul dintre cele mai populare sloturi
            Pragmatic Play. Toate sloturile au volatilitate mare și potențial de câștig de peste 5000x.
          </p>
        </div>

        {/* Slots Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {freeSpinsSlots.map((slot) => {
            const colors = colorClasses[slot.color];
            return (
              <article
                key={slot.deposit}
                className={`group relative overflow-hidden rounded-2xl border-2 ${colors.border} bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`h-2 ${colors.badge}`} />
                <div className="p-5 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${colors.bg} px-3 py-1 text-xs font-bold ${colors.text}`}>
                      Depunere {slot.deposit}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.bg}`}>
                      <Sparkles className={`h-5 w-5 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Slot name */}
                  <div>
                    <h3 className="font-mono font-bold text-gray-900 text-lg">{slot.slot}</h3>
                    <p className="text-xs text-gray-500">{slot.provider}</p>
                  </div>

                  {/* Spins count */}
                  <div className={`rounded-xl ${colors.bg} p-3 text-center`}>
                    <p className={`text-3xl font-extrabold ${colors.text}`}>{slot.spins}</p>
                    <p className="text-xs text-gray-600 font-medium">Rotiri Gratuite</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {slot.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Total summary */}
        <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-6 text-center">
          <p className="text-xs font-mono text-gray-500 uppercase mb-2">Total Rotiri Gratuite</p>
          <p className="text-3xl font-extrabold font-mono text-purple-700">550 Rotiri</p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            Pe 4 sloturi Pragmatic Play populare • Rulaj 35x pe câștiguri
          </p>
        </div>
      </div>
    </section>
  );
}
