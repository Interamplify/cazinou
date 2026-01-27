import {
  ShieldCheck,
  BadgeCheck,
  Scale,
  Eye,
  Ban,
  Timer,
  Wallet,
  UserX,
  FileWarning,
  CircleDollarSign,
  Fingerprint,
  Globe,
  Check,
} from 'lucide-react';

const licenseData = [
  {
    name: 'Curacao (eGaming)',
    description: 'Cea mai comună licență pentru cazinouri internaționale. Oferă reglementare de bază, dar cu cerințe mai flexibile pentru operatori. Majoritatea cazinourilor din topul nostru operează sub această licență.',
    trust: 'Medie-Bună',
    trustColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    name: 'Malta (MGA)',
    description: 'Considerată una dintre cele mai stricte și respectate licențe din industrie. Malta Gaming Authority impune standarde ridicate de protecție a jucătorilor, audituri financiare și jocuri echitabile certificate.',
    trust: 'Foarte Bună',
    trustColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    name: 'Gibraltar',
    description: 'Jurisdicție prestigioasă cu reglementări stricte și supravegherea Comisiei de Jocuri din Gibraltar. Utilizată de operatori mari și bine stabiliți.',
    trust: 'Foarte Bună',
    trustColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    name: 'Fără licență / N/A',
    description: 'Unele cazinouri crypto operează fără licență tradițională, bazându-se pe transparența blockchain și jocuri Provably Fair. Risc mai mare — recomandăm prudență suplimentară.',
    trust: 'Risc Crescut',
    trustColor: 'text-red-600 bg-red-50 border-red-200',
  },
];

const verifyChecklist = [
  { icon: Globe, text: 'Verifică licența în footer-ul site-ului (număr de licență + jurisdicție)' },
  { icon: Fingerprint, text: 'Caută certificări SSL (https://) și audituri eCOGRA sau iTech Labs' },
  { icon: Eye, text: 'Citește recenzii pe Casino Guru, Trustpilot și AskGamblers' },
  { icon: CircleDollarSign, text: 'Testează cu o depunere mică înainte de a investi sume mari' },
];

const responsibleTools = [
  {
    icon: Wallet,
    title: 'Limite de Depunere',
    description: 'Configurează limite zilnice, săptămânale sau lunare pentru suma maximă pe care o poți depune. Disponibil în setările contului la toate cazinourile de calitate.',
  },
  {
    icon: Timer,
    title: 'Limite de Timp și Pierdere',
    description: 'Setează alerte sau restricții pentru durata sesiunilor de joc și suma maximă pe care ești dispus să o pierzi într-o perioadă dată.',
  },
  {
    icon: Ban,
    title: 'Auto-Excludere',
    description: 'Blochează-ți accesul temporar (24h, 7 zile, 30 zile) sau permanent dacă simți că jocul a scăpat de sub control. Ireversibilă pe durata aleasă.',
  },
  {
    icon: UserX,
    title: 'Cooling-Off Period',
    description: 'O pauză voluntară de la joc (1-6 luni) în care contul este dezactivat dar nu șters. Ideal pentru a-ți recăpăta perspectiva.',
  },
];

const mistakesToAvoid = [
  {
    icon: FileWarning,
    title: 'Date false la înregistrare',
    description: 'Nu folosi niciodată date false. Nu vei putea trece verificarea KYC și nu vei putea retrage câștigurile. Contul poate fi blocat permanent.',
  },
  {
    icon: CircleDollarSign,
    title: 'Ignorarea cerințelor de rulaj',
    description: 'Nu accepta un bonus fără să citești termenii. Un rulaj de x40 pe un bonus de 1.000 RON înseamnă că trebuie să pariezi 40.000 RON înainte de a retrage.',
  },
  {
    icon: Ban,
    title: 'Joc fără limite setate',
    description: 'Setează întotdeauna limite de depunere și pierdere ÎNAINTE de a începe să joci. Fără limite, riscul de a depăși bugetul crește semnificativ.',
  },
];

export function SafePlaySection() {
  return (
    <section id="siguranta" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Joacă în Siguranță: Ghid Complet
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Tot ce trebuie să știi pentru a juca responsabil la cazinouri online internaționale — licențe, verificări, limite și greșeli de evitat.
          </p>
        </div>

        {/* Licenses */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200">
              <BadgeCheck className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Licențe pentru Cazinouri Internaționale</h3>
              <p className="text-sm text-gray-500">Ce garantează fiecare jurisdicție</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {licenseData.map((lic) => (
              <div key={lic.name} className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h4 className="text-base font-bold font-mono text-gray-900">{lic.name}</h4>
                  <span className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded-lg border ${lic.trustColor} whitespace-nowrap`}>
                    {lic.trust}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{lic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to verify */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Cum Verifici că un Cazinou Este Sigur</h3>
              <p className="text-sm text-gray-500">4 pași esențiali înainte de a te înregistra</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifyChecklist.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5 flex items-start gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold font-mono">
                    {i + 1}
                  </span>
                  <div className="flex items-start gap-2.5">
                    <Icon className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsible Gaming Tools */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 border border-violet-200">
              <Scale className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Joc Responsabil — Instrumente de Protecție</h3>
              <p className="text-sm text-gray-500">Jocul trebuie să fie divertisment, nu o sursă de venit</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibleTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-violet-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 border border-violet-100">
                      <Icon className="h-4 w-4 text-violet-500" />
                    </div>
                    <h4 className="text-sm font-bold font-mono text-gray-900">{tool.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mistakes to avoid */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 border border-red-200">
              <FileWarning className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Greșeli de Evitat</h3>
              <p className="text-sm text-gray-500">Nu cădea în aceste capcane frecvente</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mistakesToAvoid.map((mistake) => {
              const Icon = mistake.icon;
              return (
                <div key={mistake.title} className="rounded-2xl border border-red-100 bg-red-50/30 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <h4 className="text-sm font-bold font-mono text-red-800">{mistake.title}</h4>
                  </div>
                  <p className="text-sm text-red-700/80 leading-relaxed">{mistake.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
