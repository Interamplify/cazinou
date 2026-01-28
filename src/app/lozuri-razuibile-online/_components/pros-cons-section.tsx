import { ThumbsUp, ThumbsDown } from 'lucide-react';

const pros = [
  'RTP mai mare dec&#226;t lozurile fizice (90-95% vs 50-70%)',
  'Rezultate instant — nu trebuie s&#259; a&#537;tep&#539;i extrageri',
  'Mod demo gratuit pentru a testa f&#259;r&#259; risc',
  'Bonusuri &#537;i promo&#539;ii de la cazinouri online',
  'Acces 24/7 de pe orice dispozitiv (mobil, desktop, tablet&#259;)',
  'Mize flexibile de la 0.10 EUR p&#226;n&#259; la 100 EUR+',
  'Func&#539;ii avansate: auto-scratch, multiplicatori, runde bonus',
];

const cons = [
  'Risc de dependen&#539;&#259; — mai u&#537;or de jucat excesiv online',
  'Nu exist&#259; "strategie" — rezultatul e predeterminat de RNG',
  'Premii maxime mai mici dec&#226;t la sloturi (de obicei 500x vs 50000x)',
  'Necesit&#259; verificare KYC pentru retrageri',
  'Unele jocuri au RTP sub 90% (mai ales la furnizori necunoscu&#539;i)',
];

export function ProsConsSection() {
  return (
    <section id="avantaje" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Avantaje &#537;i Dezavantaje ale Lozurilor Online
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Analiz&#259; obiectiv&#259; a beneficiilor &#537;i limit&#259;rilor jocurilor de lozuri razuibile digitale
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

        {/* Verdict */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Verdictul nostru:</strong> Lozurile razuibile online
            sunt ideale pentru sesiuni scurte de joc relaxant. RTP-ul superior fa&#539;&#259; de lozurile
            fizice &#537;i posibilitatea de a juca gratuit &#238;n modul demo fac din acestea o op&#539;iune mai
            bun&#259; dec&#226;t variantele tradi&#539;ionale. Important: stabile&#537;te un buget &#537;i nu &#238;ncerca s&#259;
            recuperezi pierderile.
          </p>
        </div>
      </div>
    </section>
  );
}
