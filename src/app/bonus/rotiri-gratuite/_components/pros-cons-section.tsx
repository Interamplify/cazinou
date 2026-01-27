import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  FileSearch,
  Scale,
  Camera,
} from 'lucide-react';

const pros = [
  'Joci mai mult fără investiție suplimentară',
  'Testezi sloturi noi pe bani reali, fără risc',
  'Câștiguri reale posibile din rotiri gratuite',
  'Evaluezi calitatea platformei și suportului',
  'Disponibile atât cu depunere, cât și fără',
];

const cons = [
  'Rotirile sunt limitate la anumite sloturi sau furnizori',
  'Condiții de rulaj pe câștiguri (25x–40x)',
  'Plafon maxim de câștig din rotiri (50–100€ frecvent)',
  'Termen de expirare scurt (7–30 zile)',
  'Verificare KYC necesară înainte de retragere',
];

const disputeSteps = [
  {
    Icon: MessageCircle,
    title: 'Chat Live',
    desc: 'Contactează suportul — cel mai rapid prin chat live.',
  },
  {
    Icon: FileSearch,
    title: 'Verifică T&C',
    desc: 'Recitește condițiile bonusului — multe dispute vin din neînțelegeri.',
  },
  {
    Icon: Scale,
    title: 'Reclamație',
    desc: 'MGA, Curaçao, AskGamblers sau ANPC pentru operatori UE.',
  },
  {
    Icon: Camera,
    title: 'Documentează',
    desc: 'Capturi de ecran: termeni, conversații suport, tranzacții.',
  },
];

export function ProsConsSection() {
  return (
    <section id="avantaje" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Avantaje, Dezavantaje și Rezolvarea Problemelor
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Sinteză echilibrată: beneficii reale, limite de care să ții cont și ce faci când ceva nu
            merge
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Pros */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <ThumbsUp className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="font-mono font-bold text-green-800">Avantaje</h3>
            </div>
            <ul className="space-y-2.5">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs flex-shrink-0 mt-0.5">
                    +
                  </span>
                  <span className="text-sm text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100">
                <ThumbsDown className="h-4 w-4 text-red-600" />
              </div>
              <h3 className="font-mono font-bold text-red-800">Dezavantaje</h3>
            </div>
            <ul className="space-y-2.5">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs flex-shrink-0 mt-0.5">
                    &minus;
                  </span>
                  <span className="text-sm text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dispute resolution — merged from standalone section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-mono font-bold text-gray-900 mb-4">
            Ce Faci Dacă Apare o Problemă?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disputeSteps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 flex-shrink-0 mt-0.5">
                  <step.Icon className="h-3.5 w-3.5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold font-mono text-gray-900">
                    {idx + 1}. {step.title}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-gray-900">Verdictul nostru:</strong> Rotirile gratuite sunt cel
            mai bun instrument pentru a testa sloturi noi fără risc. Folosește-le strategic: joacă pe
            jocuri cu RTP ridicat și volatilitate medie pentru cele mai bune șanse de a îndeplini
            rulajul.
          </p>
        </div>
      </div>
    </section>
  );
}
