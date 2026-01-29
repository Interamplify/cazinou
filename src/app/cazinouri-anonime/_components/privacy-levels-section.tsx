import { Shield, ShieldOff, UserX, CheckCircle2, AlertTriangle } from 'lucide-react';

const privacyLevels = [
  {
    title: 'Cazinouri Licențiate',
    icon: Shield,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    borderColor: 'border-green-200',
    description:
      'Operează sub autorități acreditate (MGA, UKGC, Curacao). Permit înregistrarea fără verificare, dar solicită KYC la retrageri mari (2.000-5.000$) sau comportament neregulat.',
    pros: ['Securitate ridicată', 'Jocuri auditate', 'Protecție juridică'],
    cons: ['KYC la retrageri mari', 'Anonimat limitat pe termen lung'],
    anonymityLevel: 'Mediu',
  },
  {
    title: 'Cazinouri Nelicențiate',
    icon: ShieldOff,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    borderColor: 'border-amber-200',
    description:
      'Funcționează fără licență oficială. Pot cere nume, email și telefon, dar adesea nu există verificare KYC. Anonimat mai mare, dar și riscuri crescute.',
    pros: ['Anonimat ridicat', 'Fără documente necesare'],
    cons: ['Corectitudine incertă', 'Securitate fonduri redusă', 'Fără recurs legal'],
    anonymityLevel: 'Ridicat',
  },
  {
    title: 'Cazinouri Fără Înregistrare',
    icon: UserX,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    borderColor: 'border-purple-200',
    description:
      'Pur anonime. Poți trece direct la depunere și joc fără cont, prin conectarea cu un portofel crypto. Tranzacții anonime și rapide.',
    pros: ['Anonimat complet', 'Acces instant', 'Fără date personale'],
    cons: ['Suport dificil', 'Fonduri nerrecuperabile dacă pierzi acces'],
    anonymityLevel: 'Maxim',
  },
];

export function PrivacyLevelsSection() {
  return (
    <section id="tipuri-confidentialitate" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-gradient-to-r from-green-500 via-amber-500 to-purple-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Nivelul de Confidențialitate la Cazinouri Anonime
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Nivelul de confidențialitate depinde de tipul de licență pe care îl deține cazinoul.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {privacyLevels.map((level) => (
            <article
              key={level.title}
              className={`rounded-2xl border-2 ${level.borderColor} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${level.iconBg}`}>
                  <level.icon className={`h-6 w-6 ${level.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900">{level.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${level.iconBg} ${level.iconColor}`}>
                    Anonimat: {level.anonymityLevel}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{level.description}</p>

              {/* Pros */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-green-700 uppercase mb-2">Avantaje</p>
                <ul className="space-y-1.5">
                  {level.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div>
                <p className="text-xs font-semibold text-red-700 uppercase mb-2">Dezavantaje</p>
                <ul className="space-y-1.5">
                  {level.cons.map((con) => (
                    <li key={con} className="flex items-center gap-2 text-sm text-gray-700">
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
