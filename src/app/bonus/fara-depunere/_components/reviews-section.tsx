import Image from 'next/image';
import { Star, Check, X, ExternalLink, Gamepad2, Gift, CreditCard } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { RATING_MAX } from '@/lib/constants';

const rankLabels = [
  'NR. 1 BONUS FĂRĂ DEPUNERE',
  'NR. 2 BONUS FĂRĂ DEPUNERE',
  'NR. 3 BONUS FĂRĂ DEPUNERE',
  'NR. 4 BONUS FĂRĂ DEPUNERE',
  'NR. 5 BONUS FĂRĂ DEPUNERE',
];

const reviewData: Record<
  string,
  {
    tagline: string;
    platform: string;
    bonuses: string;
    payments: string;
    bonusValidity: string;
  }
> = {
  'spinch-casino': {
    tagline: 'Cel mai echilibrat bonus fără depunere: 10€ gratis + 50 rotiri, rulaj 35x.',
    platform:
      'Spinch Casino găzduiește peste 7.000 de jocuri de la furnizori recunoscuți: Pragmatic Play, NetEnt, Evolution Gaming, Play\'n GO și Hacksaw Gaming. Catalogul include sloturi, jocuri de masă, cazinou live cu crupieri reali și mini-jocuri rapide. Interfața este tradusă în română, iar platforma funcționează fluid pe mobil fără aplicație dedicată.',
    bonuses:
      'La înregistrare primești 10€ gratis și 50 de rotiri gratuite, fără obligația unei depuneri. Rulajul de 35x este sub media pieței (40x–50x), ceea ce face oferta realist de îndeplinit. Plafonul de retragere din câștigurile bonusului este de 100€. Bonusul de bun venit cu depunere ajunge la 225% până la 30.000 RON + 250 rotiri.',
    payments:
      'Acceptă Visa, Mastercard, Skrill, Neteller, Bitcoin, Ethereum, Litecoin și USDT. Retrageri e-wallet și crypto în 0–24 ore. Suportul răspunde non-stop prin chat live și email.',
    bonusValidity: '14 zile',
  },
  'cosmic-slot-casino': {
    tagline: 'Interfață intuitivă și 9.000+ jocuri — ideal pentru primii pași.',
    platform:
      'Cosmic Slot dispune de peste 9.000 de jocuri de la Pragmatic Play, NetEnt, EGT, Playtech și alți furnizori de top. Catalogul acoperă sloturi, jocuri de masă, cazinou live Evolution și jocuri cu jackpot progresiv. Platforma este modernă, optimizată pentru mobil și nu necesită descărcarea unei aplicații.',
    bonuses:
      'Bonusul fără depunere constă în 5€ gratis și 20 de rotiri gratuite. Deși valoarea e mai modestă, procesul de activare este automat — primești bonusul imediat după crearea contului. Rulajul este de 45x, iar plafonul de retragere de 100€. Bonusul de bun venit cu depunere ajunge la 352% + 250 rotiri.',
    payments:
      'Plăți clasice (Visa, Mastercard, transfer SEPA) și criptomonede (Bitcoin, Ethereum). Verificarea identității nu e necesară la înregistrare, dar devine obligatorie la retragere. Timp de procesare: 0–24 ore e-wallet/crypto, 1–5 zile card.',
    bonusValidity: '7 zile',
  },
  'rolletto-casino': {
    tagline: 'Axat pe rotiri gratuite: 25 FS pe Book of Dead, fără depunere.',
    platform:
      'Rolletto are în portofoliu peste 6.000 de jocuri de la Play\'n GO, Pragmatic Play, NetEnt, Evolution și BGaming. Catalogul include sloturi clasice și video, cazinou live, jocuri de masă și o secțiune completă de pariuri sportive pe 30+ sporturi. Platforma suportă interfață multilingvă.',
    bonuses:
      'Oferta fără depunere: 25 de rotiri gratuite pe slotul Book of Dead (Play\'n GO). Câștigurile din rotiri intră în contul de bonus cu rulaj 35x. Limita maximă de retragere din bonus este 100€. Bonusul de bun venit cu depunere: 150% până la 2.500 RON + 200 rotiri.',
    payments:
      'Acceptă Visa, Mastercard, Skrill, Neteller, Paysafecard, Bitcoin, Ethereum și alte criptomonede. Retrageri crypto procesate în sub 24 ore. Fără comisioane la depuneri.',
    bonusValidity: '14 zile',
  },
  'national-casino': {
    tagline: 'Rulaj de doar 30x — printre cele mai accesibile condiții din clasament.',
    platform:
      'National Casino oferă peste 3.000 de jocuri de la Pragmatic Play, NetEnt, EGT și Playtech. Catalogul include sloturi, jocuri de masă, cazinou live și jocuri instant. Interfața este disponibilă în mai multe limbi, iar platforma funcționează bine pe dispozitive mobile fără aplicație dedicată.',
    bonuses:
      'Bonusul fără depunere vine cu un rulaj de doar 30x — cel mai mic din clasamentul nostru. Plafonul de retragere este de 50€. Deși valoarea bonusului este mai mică, condițiile realiste de îndeplinire compensează. Bonusul de bun venit cu depunere: 150% până la 1.500 RON + 150 rotiri.',
    payments:
      'Metode de plată variate: Visa, Mastercard, Skrill, Neteller, Paysafecard și Bitcoin. Retrageri e-wallet în 0–24 ore, card în 1–5 zile, transfer SEPA în 3–7 zile. Fără comisioane la tranzacții.',
    bonusValidity: '7 zile',
  },
  'iwild-casino': {
    tagline: 'Catalog masiv de 6.000+ jocuri și program VIP cu cashback zilnic.',
    platform:
      'iWild Casino pune la dispoziție peste 6.000 de titluri de la Pragmatic Play, NetEnt, EGT și alți furnizori premium. Catalogul acoperă sloturi, jocuri de masă, cazinou live cu Evolution Gaming și jocuri cu jackpot. Platforma este optimizată pentru mobil, cu navigare intuitivă și filtre avansate de căutare.',
    bonuses:
      'Bonusul fără depunere se activează automat la înregistrare. Rulajul este de 35x cu plafon de retragere de 100€. Bonusul de bun venit cu depunere este unul dintre cele mai mari: 550% până la 20.000 RON + 550 rotiri, distribuit pe mai multe depuneri. Cashback zilnic și săptămânal de 10%, program VIP cu 5 niveluri.',
    payments:
      'Acceptă Visa, Mastercard, Skrill, Neteller, Bitcoin și alte criptomonede. Retrageri procesate în 0–24 ore (e-wallet/crypto) sau 2–5 zile (card). Suport non-stop prin chat live și email. Licență Curaçao.',
    bonusValidity: '14 zile',
  },
};

const reviewSlugs = [
  'spinch-casino',
  'cosmic-slot-casino',
  'rolletto-casino',
  'national-casino',
  'iwild-casino',
];

export function ReviewsSection() {
  const casinos = getCasinosBySlugs(reviewSlugs);

  const ratingLabels: Record<string, string> = {
    securitate: 'Securitate',
    catalogJocuri: 'Jocuri',
    bonusuri: 'Bonusuri',
    metodePlata: 'Plăți',
    experientaUtilizator: 'UX',
    licenta: 'Licență',
  };

  return (
    <section id="recenzii" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recenzii Individuale — Top 5 Bonus Fără Depunere
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Analiză detaliată a celor mai bune cazinouri internaționale cu bonus fără depunere accesibil din România.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {casinos.map((casino, index) => {
            const review = reviewData[casino.slug];

            return (
              <article
                key={casino.slug}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Header: Rank + Name + Score */}
                <div className="p-6 sm:p-8 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold font-mono text-white shadow-md">
                          {index + 1}
                        </span>
                      </div>
                      <a
                        href={casino.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
                      >
                        <Image src={casino.logo} alt={`${casino.name} logo`} fill className="object-contain p-2" sizes="80px" />
                      </a>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <span className="inline-block text-[10px] font-bold font-mono text-orange-600 bg-orange-50 rounded px-2 py-0.5 uppercase tracking-widest mb-2">
                            {rankLabels[index]}
                          </span>
                          <a
                            href={casino.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="block text-xl sm:text-2xl font-bold font-mono text-gray-900 hover:text-orange-600 transition-colors"
                          >
                            {casino.name}
                          </a>
                          {review && (
                            <p className="text-sm text-gray-500 mt-1">{review.tagline}</p>
                          )}
                        </div>

                        <div className="flex flex-col items-center bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 flex-shrink-0">
                          <span className="text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider">Punctuație</span>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Experți</span>
                          <div className="flex items-baseline gap-0.5 mt-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                            <span className="text-2xl font-bold font-mono text-gray-900">{casino.overallRating.toFixed(1)}</span>
                            <span className="text-xs text-gray-400 font-mono">/{RATING_MAX}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body: Structured review sections */}
                {review && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Gamepad2 className="h-4 w-4 text-orange-500" />
                        <h4 className="text-sm font-bold font-mono text-gray-900">Platformă și Jocuri</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.platform}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="h-4 w-4 text-orange-500" />
                        <h4 className="text-sm font-bold font-mono text-gray-900">Bonus Fără Depunere</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.bonuses}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-orange-500" />
                        <h4 className="text-sm font-bold font-mono text-gray-900">Plăți și Retragere</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.payments}</p>
                    </div>
                  </div>
                )}

                {/* Verdict: Pros & Cons + Ratings */}
                <div className="border-t border-gray-100 p-6 sm:p-8">
                  <h4 className="text-xs font-bold font-mono text-gray-900 uppercase tracking-wide mb-4">Verdictul Analistului</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                      <ul className="space-y-2">
                        {casino.pros.map((pro, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-green-700">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-2">
                        {casino.cons.map((con, ci) => (
                          <li key={ci} className="flex items-start gap-2 text-sm text-red-600">
                            <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      {Object.entries(casino.ratings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between gap-2">
                          <span className="text-xs text-gray-500">{ratingLabels[key]}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-orange-500 rounded-full" style={{ width: `${(value / 10) * 100}%` }} />
                            </div>
                            <span className="text-xs font-bold font-mono text-gray-700 w-7 text-right">{value.toFixed(1)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bonus banner */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 py-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold font-mono text-orange-200 uppercase tracking-widest">Ofertă Fără Depunere</span>
                      <p className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
                        {casino.bonusTitle}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-orange-100 font-mono">
                        <span>Rulaj x{casino.wageringRequirement}</span>
                        <span className="w-1 h-1 rounded-full bg-orange-300" />
                        <span>Validitate {review?.bonusValidity ?? '7 zile'}</span>
                        <span className="w-1 h-1 rounded-full bg-orange-300" />
                        <span>{casino.license}</span>
                      </div>
                    </div>
                    <a
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold font-mono text-orange-600 hover:bg-orange-50 transition-colors shadow-md flex-shrink-0"
                    >
                      Joacă Acum
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
