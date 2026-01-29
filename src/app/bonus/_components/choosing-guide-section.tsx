const steps = [
  {
    number: '01',
    title: 'Verifică licența',
    desc: 'Asigură-te că platforma deține o licență validă (MGA, Curaçao, Gibraltar) și că aceasta este verificabilă pe site-ul autorității.',
  },
  {
    number: '02',
    title: 'Citește termenii',
    desc: 'Analizează cu atenție condițiile de bonus: rulaj, termen de valabilitate, jocuri eligibile și plafon maxim de retragere.',
  },
  {
    number: '03',
    title: 'Compară rulajul',
    desc: 'Un rulaj de 35x sau mai mic este considerat corect. Evită bonusurile cu rulaj peste 50x sau cu termene foarte scurte.',
  },
  {
    number: '04',
    title: 'Verifică plățile',
    desc: 'Confirmă că sunt disponibile metode de plată pe care le folosești (Visa, Skrill, crypto) și timpii de procesare a retragerilor.',
  },
  {
    number: '05',
    title: 'Testează suportul',
    desc: 'Înainte de a depune, testează răspunsul echipei de suport via chat live. Un răspuns rapid și competent este semn de seriozitate.',
  },
];

export function ChoosingGuideSection() {
  return (
    <section id="cum-alegi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Alegi Cel Mai Bun Bonus
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Urmează acești 5 pași pentru a alege bonusul potrivit și a evita capcanele
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-orange-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <span className="text-sm font-bold font-mono text-orange-600">{step.number}</span>
                </div>
                <p className="text-sm font-bold font-mono text-gray-900">{step.title}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
