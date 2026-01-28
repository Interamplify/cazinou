import { Trophy, Flame, Target, Clock, Users, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tournament {
  name: string;
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  bgGradient: string;
  prize: string;
  target: string;
  duration: string;
  requirements: string;
  winners: string;
  accentColor: string;
}

const tournaments: Tournament[] = [
  {
    name: 'Rookie Rumble',
    Icon: Trophy,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    borderColor: 'border-green-300',
    bgGradient: 'from-green-50/50 to-emerald-50/30',
    prize: '2.500€ Zilnic',
    target: 'Jucători Noi',
    duration: '24 ore',
    requirements: 'Pariază pe sloturi selectate',
    winners: 'Top 50 jucători',
    accentColor: 'text-green-700',
  },
  {
    name: 'Live Tournament',
    Icon: Flame,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    borderColor: 'border-orange-300',
    bgGradient: 'from-orange-50/50 to-red-50/30',
    prize: '10.000€ la 3 Zile',
    target: 'Toți Jucătorii',
    duration: '72 ore',
    requirements: 'Pariază pe jocuri live',
    winners: 'Top 100 jucători',
    accentColor: 'text-orange-700',
  },
];

const tournamentDetails = [
  {
    Icon: Target,
    title: 'Participare Automată',
    desc: 'Nu trebuie să te înscrii manual — joci pe jocurile eligibile și intri automat în clasament.',
  },
  {
    Icon: Clock,
    title: 'Actualizare în Timp Real',
    desc: 'Clasamentul se actualizează live. Poți vedea progresul tău oricând din secțiunea Turnee.',
  },
  {
    Icon: Users,
    title: 'Premii pentru Toată Lumea',
    desc: 'Rookie Rumble recompensează primii 50, iar Live Tournament primii 100 jucători.',
  },
];

export function TournamentsSection() {
  return (
    <section id="turnee" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Turnee Permanente — Premii de 10.000€ la Fiecare 3 Zile
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Billionairespin organizează două turnee permanente cu prize pool garantat. Participarea
            este automată — doar joacă pe jocurile eligibile și concurează pentru premii cash fără
            condiții de rulaj.
          </p>
        </div>

        {/* Tournament Cards */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          {tournaments.map((tournament) => (
            <article
              key={tournament.name}
              className={`group relative overflow-hidden rounded-2xl border-2 ${tournament.borderColor} bg-gradient-to-br ${tournament.bgGradient} p-6 lg:p-8 transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${tournament.iconBg} shadow-sm transition-transform group-hover:scale-110`}
                >
                  <tournament.Icon className={`h-7 w-7 ${tournament.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="font-mono font-bold text-gray-900 text-xl">{tournament.name}</h3>
              </div>

              {/* Prize */}
              <div className="mb-5 text-center py-4 rounded-xl bg-white/60 border border-gray-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Premii totale</p>
                <p className={`text-3xl font-extrabold ${tournament.accentColor}`}>
                  {tournament.prize}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Destinat</p>
                    <p className="text-sm text-gray-700">{tournament.target}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Durată</p>
                    <p className="text-sm text-gray-700">{tournament.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Cerințe</p>
                    <p className="text-sm text-gray-700">{tournament.requirements}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Câștigători</p>
                    <p className="text-sm text-gray-700">{tournament.winners}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* How It Works */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-5">
            Cum Funcționează Turneele?
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {tournamentDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <detail.Icon className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{detail.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-orange-700">Notă Importantă:</strong> Participarea este
            automată. Verifică clasamentul în secțiunea „Turnee" din contul tău pentru a-ți vedea
            poziția și premiul potențial. Premiile se acordă automat după încheierea turneului, fără
            cerințe de rulaj.
          </p>
        </div>
      </div>
    </section>
  );
}
