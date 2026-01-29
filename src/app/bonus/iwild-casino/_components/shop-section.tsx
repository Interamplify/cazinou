import { ShoppingBag, Coins, Sparkles, ArrowRight } from 'lucide-react';

export function ShopSection() {
  return (
    <section id="magazin" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Magazinul iWild Casino — Cumpără Rotiri cu Monede
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Magazinul iWild îți permite să schimbi monedele câștigate la turnee sau cumpărate
            direct pentru rotiri gratuite pe sloturile tale preferate.
          </p>
        </div>

        {/* Main Shop Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50/50 to-emerald-50/30 p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 shadow-sm">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-gray-900 text-xl">Cum funcționează Shop-ul</h3>
                <p className="text-sm text-gray-600">Schimbă monedele în rotiri gratuite</p>
              </div>
            </div>

            {/* How it works */}
            <div className="grid gap-6 md:grid-cols-3 mb-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white font-bold font-mono mx-auto mb-3">1</div>
                <h4 className="font-mono font-semibold text-gray-900 mb-1">Obții Monede</h4>
                <p className="text-sm text-gray-600">Câștigi la turnee sau cumperi direct</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-green-400" />
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white font-bold font-mono mx-auto mb-3">2</div>
                <h4 className="font-mono font-semibold text-gray-900 mb-1">Alegi Slotul</h4>
                <p className="text-sm text-gray-600">Selectezi jocul pentru rotiri</p>
              </div>
            </div>

            {/* Example */}
            <div className="rounded-xl bg-white border border-green-200 p-5 mb-6">
              <h4 className="font-mono font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Coins className="h-5 w-5 text-green-600" />
                Exemplu de Schimb
              </h4>
              <div className="grid gap-4 sm:grid-cols-3 text-center">
                <div className="rounded-lg bg-green-50 p-3">
                  <p className="text-xs text-gray-500 uppercase mb-1">Cumperi</p>
                  <p className="text-lg font-bold text-green-700 font-mono">5-10 EUR</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="text-xs text-gray-500 uppercase mb-1">Primești</p>
                  <p className="text-lg font-bold text-amber-700 font-mono">35 Monede</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-3">
                  <p className="text-xs text-gray-500 uppercase mb-1">Schimbi în</p>
                  <p className="text-lg font-bold text-purple-700 font-mono">20 Rotiri Dog House</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <Sparkles className="h-4 w-4" />
                Rotiri pe sloturi populare
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <Coins className="h-4 w-4" />
                Pariuri speciale 100 EUR
              </span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50/50 p-5 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-green-700">Tip:</strong> Participă regulat la turnee pentru a acumula
            monede gratuit. Verifică secțiunea Shop din contul tău pentru ofertele disponibile și
            ratele de schimb actualizate.
          </p>
        </div>
      </div>
    </section>
  );
}
