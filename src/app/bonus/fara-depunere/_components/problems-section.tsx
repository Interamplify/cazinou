import { MessageCircle, FileSearch, Scale, Camera } from 'lucide-react';

const steps = [
  {
    Icon: MessageCircle,
    title: 'Contactează Suportul',
    desc: 'Prima opțiune este întotdeauna echipa de suport a cazinoului. Folosește chat live (cel mai rapid), email sau telefon. Descrie problema clar și păstrează o copie a conversației.',
    color: 'border-blue-200 bg-blue-50/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    Icon: FileSearch,
    title: 'Verifică T&C',
    desc: 'Multe dispute apar din neînțelegerea termenilor. Recitește condițiile bonusului – cerințe de rulaj, jocuri eligibile, plafon de retragere – pentru a te asigura că nu ai încălcat vreo regulă.',
    color: 'border-amber-200 bg-amber-50/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    Icon: Scale,
    title: 'Reclamație Oficială',
    desc: 'Dacă suportul nu rezolvă problema, depune reclamație la: autoritatea de licențiere (Malta Gaming Authority, Curaçao), platforme de mediere (AskGamblers, CasinoMeister) sau ANPC pentru operatori UE.',
    color: 'border-orange-200 bg-orange-50/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    Icon: Camera,
    title: 'Documentează Totul',
    desc: 'Păstrează capturi de ecran cu: termenii bonusului la momentul înregistrării, conversațiile cu suportul, istoricul tranzacțiilor și orice comunicare relevantă.',
    color: 'border-red-200 bg-red-50/30',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
];

export function ProblemsSection() {
  return (
    <section id="probleme" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ce Faci Dacă Întâmpini Probleme?
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Întârzieri la retragere, bonus neacordat sau cont blocat – iată cum procedezi pas cu pas
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((item, idx) => (
            <div
              key={item.title}
              className={`rounded-2xl border-2 p-6 lg:p-8 ${item.color} transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconBg}`}>
                  <item.Icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                    Pasul {idx + 1}
                  </span>
                  <h3 className="font-mono font-bold text-gray-900">{item.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
