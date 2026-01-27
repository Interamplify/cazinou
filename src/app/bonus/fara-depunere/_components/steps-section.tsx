import { Dice1, Settings, Gift, Gamepad2, ShieldCheck, Wallet } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Alege un Cazinou',
    desc: 'Selectează o platformă care oferă bonus fără depunere și acceptă jucători din România. Verifică licența (Malta Gaming Authority sau Curaçao Gaming Authority) și ofertele active din lista noastră.',
    Icon: Dice1,
  },
  {
    step: 2,
    title: 'Creează-ți Contul',
    desc: 'Completează formularul de înregistrare: nume complet (conform actului de identitate), adresă email validă, număr de telefon și codul promoțional (dacă este cazul).',
    Icon: Settings,
  },
  {
    step: 3,
    title: 'Primește Bonusul',
    desc: 'Bonusul se creditează automat sau prin activarea codului promoțional. Verifică secțiunea „Bonus" din profilul tău pentru a confirma creditarea.',
    Icon: Gift,
  },
  {
    step: 4,
    title: 'Joacă și Îndeplinește Rulajul',
    desc: 'Folosește bonusul pe jocurile eligibile – sloturile Pragmatic Play, NetEnt sau Play\'n GO contribuie de regulă 100% la rulaj. Progresul apare în contul tău.',
    Icon: Gamepad2,
  },
  {
    step: 5,
    title: 'Verificare KYC',
    desc: 'Trimite buletin/pașaport, dovadă adresă (factură utilități recentă) și dovada metodei de plată. Fă verificarea imediat după înregistrare pentru a evita întârzieri.',
    Icon: ShieldCheck,
  },
  {
    step: 6,
    title: 'Retrage Câștigurile',
    desc: 'După rulaj complet și KYC aprobat, retrage prin Skrill, Neteller (0–24h), Bitcoin (0–24h), Visa/Mastercard (1–5 zile) sau transfer SEPA (3–7 zile).',
    Icon: Wallet,
  },
];

export function StepsSection() {
  return (
    <section id="pas-cu-pas" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-mono">
            Cum Funcționează Bonusul Fără Depunere – Pas cu Pas
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
            Iată ce ai de făcut pentru a obține și utiliza un bonus fără depunere:
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.step}
              className="group relative overflow-hidden rounded-xl border-2 border-orange-200 hover:border-orange-300 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 min-h-[320px] flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 to-orange-100/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-8 space-y-5 flex flex-col flex-1">
                <div className="flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 sm:h-24 sm:w-24 transition-transform group-hover:scale-110">
                    <item.Icon className="h-10 w-10 text-orange-600 sm:h-12 sm:w-12" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center text-xl font-bold text-gray-900 font-mono leading-tight">
                  Pasul {item.step}
                </div>
                <p className="text-center text-base font-medium text-gray-700 leading-relaxed">
                  {item.title}
                </p>
                <div className="pt-3 border-t border-gray-100 flex-1">
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
