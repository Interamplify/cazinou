import { CheckCircle2, XCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const pros = [
  {
    title: 'Confidențialitate sporită',
    description: 'Nu este necesară partajarea documentelor personale, protejând împotriva breșelor de date și furtului de identitate.',
  },
  {
    title: 'Accesibilitate globală',
    description: 'Prin utilizarea unui VPN, poți accesa aceste platforme de oriunde, ocolind restricțiile regionale.',
  },
  {
    title: 'Bonusuri generoase',
    description: 'Multe site-uri au bonusuri de bun venit atractive, uneori depășind ofertele cazinourilor tradiționale.',
  },
  {
    title: 'Depozite și retrageri rapide',
    description: 'Tranzacțiile crypto sunt procesate rapid (10-15 minute vs 3-10 zile pentru metode bancare). Comisioane reduse sau inexistente.',
  },
  {
    title: 'Înregistrare simplificată',
    description: 'Procesul durează sub un minut, necesitând adesea doar o adresă de e-mail sau conectarea unui portofel crypto.',
  },
];

const cons = [
  {
    title: 'Riscuri de reglementare',
    description: 'Licențe offshore (Curaçao, Anjouan) nu oferă același nivel de protecție. În caz de litigiu, opțiunile de recurs sunt limitate.',
  },
  {
    title: 'Corectitudine incertă',
    description: 'Fără reglementări stricte, corectitudinea jocurilor poate fi pusă sub semnul întrebării, cu excepția celor Provably Fair.',
  },
  {
    title: 'Suport limitat',
    description: 'Serviciile de asistență pot fi deficitare, făcând dificilă rezolvarea problemelor.',
  },
  {
    title: 'Ireversibilitatea tranzacțiilor',
    description: 'Orice plată efectuată greșit nu poate fi recuperată, crescând riscul de pierderi financiare.',
  },
  {
    title: 'Cerințe de rulaj ridicate',
    description: 'Bonusurile generoase vin adesea cu cerințe de rulaj foarte mari (40x-80x), dificil de convertit în bani reali.',
  },
];

export function ProsConsSection() {
  return (
    <section id="avantaje-dezavantaje" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Avantaje și Dezavantaje ale Cazinourilor Fără KYC
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Pros */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50/30 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <ThumbsUp className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-mono font-bold text-green-800 text-lg">Avantaje</h3>
            </div>
            <ul className="space-y-4">
              {pros.map((pro) => (
                <li key={pro.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{pro.title}</p>
                    <p className="text-sm text-gray-600">{pro.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <ThumbsDown className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-mono font-bold text-red-800 text-lg">Dezavantaje</h3>
            </div>
            <ul className="space-y-4">
              {cons.map((con) => (
                <li key={con.title} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{con.title}</p>
                    <p className="text-sm text-gray-600">{con.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary note */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-amber-700">Concluzie:</strong> Cazinourile fără verificare
            prezintă caracteristici unice privind anonimitatea. Chiar dacă acestea pot părea
            foarte avantajoase, nu lăsa garda jos și prioritizează securitatea și corectitudinea
            atunci când vrei să alegi un site nou de gambling. Joacă mereu responsabil!
          </p>
        </div>
      </div>
    </section>
  );
}
