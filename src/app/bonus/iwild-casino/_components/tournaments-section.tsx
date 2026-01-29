import { Trophy, Target, Clock, Users, CheckCircle2 } from 'lucide-react';

export function TournamentsSection() {
  return (
    <section id="turnee" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Turnee iWild Casino — Premii în Monede iWild
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Participă la turnee regulate cu premii în monede iWild pe care le poți folosi
            în Magazinul cazinoului pentru rotiri gratuite și alte recompense.
          </p>
        </div>

        {/* Tournament Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <article className="group overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/50 to-orange-50/30 p-6 lg:p-8 shadow-sm transition-all hover:shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 shadow-sm transition-transform group-hover:scale-110">
                <Trophy className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-gray-900 text-xl">Turneu iWild Activ</h3>
                <p className="text-sm text-gray-600">Premii în monede iWild</p>
              </div>
            </div>

            {/* Prize */}
            <div className="mb-6 text-center py-5 rounded-xl bg-white/60 border border-amber-200">
              <p className="text-xs text-gray-600 font-medium mb-1">Premii totale</p>
              <p className="text-4xl font-extrabold text-amber-600 font-mono">33,350 Monede</p>
            </div>

            {/* Details Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Cum participi</p>
                  <p className="text-sm text-gray-700">Joacă pe sloturile selectate pentru a acumula puncte</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Sloturi eligibile</p>
                  <p className="text-sm text-gray-700">Mirror Joker, Angel vs Sinner, Punk Roker și altele</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Clasament live</p>
                  <p className="text-sm text-gray-700">Poziția ta se actualizează în timp real</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Premiare</p>
                  <p className="text-sm text-gray-700">Monedele se creditează automat după turneu</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* How it works */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-5 text-center">
            Cum Funcționează Turneele?
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                <Target className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Participare Automată</p>
                <p className="text-sm text-gray-600 leading-relaxed">Joci pe sloturile eligibile și intri automat în clasament</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Durată Limitată</p>
                <p className="text-sm text-gray-600 leading-relaxed">Fiecare turneu are o perioadă fixă de desfășurare</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Premii pentru Top Jucători</p>
                <p className="text-sm text-gray-600 leading-relaxed">Cei mai buni jucători primesc monede iWild</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Notă:</strong> Monedele iWild câștigate la turnee pot fi folosite
            în Magazinul cazinoului pentru a cumpăra rotiri gratuite și alte recompense. Verifică secțiunea
            Turnee din contul tău pentru competițiile active.
          </p>
        </div>
      </div>
    </section>
  );
}
