import { Lightbulb, Bitcoin, Mail, Wifi, HardDrive, Search, AlertCircle } from 'lucide-react';

const tips = [
  {
    icon: Bitcoin,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    title: 'Folosește crypto în loc de plăți standard',
    description:
      'Cazinourile fără verificare oferă anonimat ridicat doar cu criptomonede. Pentru tranzacții instantanee, caută platforme cu Lightning Network. Monede precum Monero, Zcash sau Dash oferă confidențialitate maximă.',
  },
  {
    icon: Mail,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    title: 'Creează o adresă de e-mail dedicată',
    description:
      'Folosește o adresă de e-mail nouă, dedicată special site-ului de jocuri. Nu o lega de adresa ta personală sau numărul de telefon.',
  },
  {
    icon: Wifi,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    title: 'Folosește un VPN',
    description:
      'Un VPN îți maschează adresa IP, adăugând un strat suplimentar de protecție. Îți permite să ocolești restricțiile geografice și să accesezi platforme blocate în regiunea ta.',
  },
  {
    icon: HardDrive,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Securizează-ți portofelul crypto',
    description:
      'Folosește un hardware wallet pentru a-ți stoca criptomonedele. Stocarea pe un device extern evită riscul atacurilor cibernetice.',
  },
  {
    icon: Search,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'Verifică reputația cazinoului',
    description:
      'Chiar dacă prioritizezi anonimatul, joacă doar la cazinouri cu reputație bună. Verifică recenziile și feedback-ul altor jucători înainte de a depune.',
  },
  {
    icon: AlertCircle,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    title: 'Fii conștient de ireversibilitate',
    description:
      'Tranzacțiile crypto nu pot fi anulate. Odată trimise, fondurile sunt finale. Verifică de două ori adresele înainte de transfer.',
  },
];

export function TipsSection() {
  return (
    <section id="sfaturi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Sfaturi Pentru a Juca la Cazinouri Anonime
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Cum să joci cu adevărat anonim și în siguranță la cazinouri crypto.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <article
              key={tip.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tip.iconBg} transition-transform group-hover:scale-110`}>
                  <tip.icon className={`h-6 w-6 ${tip.iconColor}`} />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-mono font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
