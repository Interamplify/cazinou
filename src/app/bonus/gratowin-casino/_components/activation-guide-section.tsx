import { MousePointer, UserPlus, Gift, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    number: 1,
    icon: MousePointer,
    title: 'Accesează GratoWin',
    description: 'Dă click pe butonul de mai jos pentru a ajunge pe site-ul oficial GratoWin Casino.',
  },
  {
    number: 2,
    icon: UserPlus,
    title: 'Creează Cont',
    description: 'Apasă butonul "Join" și completează formularul de înregistrare în 3 pași simpli.',
  },
  {
    number: 3,
    icon: Gift,
    title: 'Primești Rotirile',
    description: 'Cele 50 de rotiri gratuite sunt creditate automat în contul tău.',
  },
  {
    number: 4,
    icon: Gamepad2,
    title: 'Joacă și Depune',
    description: 'Pentru bonus depunere, folosește codurile GRATO100, GRATO50 sau GRATO150.',
  },
];

export function ActivationGuideSection() {
  return (
    <section id="activare" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Îți Activezi Bonusul GratoWin
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Urmează acești pași simpli pentru a-ți activa bonusul de bun venit.
          </p>
        </div>

        {/* Sign up image */}
        <div className="mb-10 max-w-md mx-auto">
          <Image
            src="/images/gratowin-sign-up.webp"
            alt="GratoWin Înregistrare"
            width={510}
            height={783}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm shadow">
                {step.number}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                <step.icon className="h-6 w-6 text-purple-600" />
              </div>

              <h3 className="font-mono font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>

        {/* Promo codes reminder */}
        <div className="mt-10 rounded-xl border border-purple-200 bg-purple-50/50 p-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-purple-700">Coduri Promoționale:</strong> GRATO100 pentru prima
            depunere (100%), GRATO50 pentru a doua (50%), GRATO150 pentru a treia (150%).
          </p>
        </div>
      </div>
    </section>
  );
}
