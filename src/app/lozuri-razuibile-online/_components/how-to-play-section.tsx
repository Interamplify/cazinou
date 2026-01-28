import { Shield, UserPlus, CreditCard, Dices, Sparkles } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Alege Cazinoul',
    desc: 'Selecteaza un cazinou din lista noastra verificata. Verifica licenta, metodele de plata si bonusurile disponibile.',
    Icon: Shield,
  },
  {
    step: 2,
    title: 'Inregistreaza-te',
    desc: 'Creeaza cont cu email si parola. Completeaza verificarea KYC (buletin + dovada adresa) pentru retrageri rapide.',
    Icon: UserPlus,
  },
  {
    step: 3,
    title: 'Depune Fonduri',
    desc: 'Alege metoda (card, e-wallet, crypto). Depunere minima 10€. Profita de bonusul de bun venit daca aplica.',
    Icon: CreditCard,
  },
  {
    step: 4,
    title: 'Alege Lozul',
    desc: 'Cauta sectiunea Scratch Cards sau Instant Games. Testeaza in modul demo gratuit inainte de a paria bani reali.',
    Icon: Dices,
  },
  {
    step: 5,
    title: 'Razuieste si Castiga',
    desc: 'Stabileste miza (0.10€ - 100€), razuieste manual sau foloseste "Scratch All". Castigurile se crediteaza instant in sold.',
    Icon: Sparkles,
  },
];

export function HowToPlaySection() {
  return (
    <section id="cum-joci" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-mono">
            Cum Joci Lozuri Razuibile Online
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
            Ghid pas cu pas pentru incepatori — de la alegerea jocului pana la retragerea
            castigurilor
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <article
              key={item.step}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-orange-200 hover:-translate-y-1"
            >
              <div className="p-5 space-y-4">
                {/* Step Number Badge */}
                <div className="flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-mono font-bold text-sm">
                    {item.step}
                  </div>
                </div>

                {/* Icon Badge */}
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-50">
                    <item.Icon
                      className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center font-mono font-bold text-gray-900 text-sm">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
