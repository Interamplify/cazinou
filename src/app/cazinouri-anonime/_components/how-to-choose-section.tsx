import { CheckCircle2, Shield, MessageCircle, Lock, Star } from 'lucide-react';

const criteria = [
  {
    icon: Shield,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Tehnologia Provably Fair',
    description:
      'Alege cazinouri ce folosesc RNG și Provably Fair pentru a verifica corectitudinea jocurilor. Acest sistem utilizează hashing criptografic și blockchain.',
  },
  {
    icon: Star,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'Feedback și recenzii',
    description:
      'Verifică recenziile de pe site-uri de experți și feedback-ul de la alți jucători. Opinia celorlalți contează enorm.',
  },
  {
    icon: MessageCircle,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    title: 'Opțiuni de suport',
    description:
      'Asigură-te că ai găsit un cazino cu multiple căi de contact: live chat, e-mail sau telefon. Testează serviciul înainte de a depune.',
  },
  {
    icon: Lock,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    title: 'Metode de securitate',
    description:
      'Prioritizează securitatea. Verifică criptarea SSL, opțiuni securizate pentru portofel și autentificarea în doi pași (2FA).',
  },
];

export function HowToChooseSection() {
  return (
    <section id="cum-alegi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Să Alegi Cazinouri Fără KYC?
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Criterii importante de luat în considerare atunci când alegi un cazino anonim.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} transition-transform group-hover:scale-110`}>
                  <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-mono font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Quick checklist */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm max-w-2xl mx-auto">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4 text-center">
            Checklist Rapid
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Licență verificabilă</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Provably Fair disponibil</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Recenzii pozitive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Suport 24/7 activ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">SSL encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Retrageri verificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
