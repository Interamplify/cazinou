import { UserPlus, Gift, CreditCard, Gamepad2, Bell } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    step: 1,
    title: 'Accesează GGBet',
    desc: 'Dă click pe butonul de mai jos pentru a ajunge pe site-ul oficial GGBet Casino',
    Icon: UserPlus,
  },
  {
    step: 2,
    title: 'Creează Cont',
    desc: 'Completează formularul cu email, parolă și informații personale (nume, dată naștere, telefon)',
    Icon: Gift,
  },
  {
    step: 3,
    title: 'Acceptă Rotirile',
    desc: 'Primești notificare în cont pentru cele 50 rotiri fără depunere - acceptă oferta',
    Icon: Bell,
  },
  {
    step: 4,
    title: 'Depune și Joacă',
    desc: 'Depune minim 50 RON pentru a activa bonusul de bun venit pe primele 7 depuneri',
    Icon: CreditCard,
  },
  {
    step: 5,
    title: 'Îndeplinește Rulajul',
    desc: 'Îndeplinește cerința de rulaj 40x pentru bonus și câștigurile din rotiri',
    Icon: Gamepad2,
  },
];

export function ActivationGuideSection() {
  return (
    <section id="cum-activezi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Activezi Bonusul la GGBet Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Urmează acești 5 pași simpli pentru a obține bonusul complet de bun venit
          </p>
        </div>

        {/* Register image */}
        <div className="mb-10 max-w-md mx-auto">
          <Image
            src="/images/ggbet-register.webp"
            alt="Înregistrare GGBet Casino"
            width={631}
            height={820}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <article
              key={item.step}
              className="group relative overflow-hidden rounded-2xl border-2 border-orange-200 hover:border-orange-300 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 to-orange-100/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-5 space-y-4">
                {/* Step badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold font-mono text-sm">
                    {item.step}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 transition-transform group-hover:scale-110">
                    <item.Icon className="h-5 w-5 text-orange-600" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 font-mono leading-tight">{item.title}</h3>

                {/* Description */}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-10 text-center">
          <a
            href="/go/ggbet-casino"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold font-mono text-white hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Activează Bonusul Acum
          </a>
        </div>
      </div>
    </section>
  );
}
