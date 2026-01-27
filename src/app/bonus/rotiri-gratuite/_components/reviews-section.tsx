import Image from 'next/image';
import { Star, Check, X, ExternalLink, Gamepad2, Gift, CreditCard } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { RATING_MAX } from '@/lib/constants';

const rankLabels = [
  'NR. 1 ROTIRI GRATUITE',
  'NR. 2 ROTIRI GRATUITE',
  'NR. 3 ROTIRI GRATUITE',
  'NR. 4 ROTIRI GRATUITE',
  'NR. 5 ROTIRI GRATUITE',
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
  'iwild-casino': {
    tagline: '550 rotiri gratuite distribuite pe 4 depuneri, VIP cu cashback zilnic.',
    platform:
      'iWild Casino pune la dispozi\u021Bie peste 6.000 de titluri de la 75+ furnizori: Pragmatic Play, NetEnt, Play\u2019n GO, Nolimit City \u0219i Push Gaming. Sec\u021Biunea de cazinou live include 174 de mese Evolution Gaming, iar platforma func\u021Bioneaz\u0103 fluid pe mobil f\u0103r\u0103 aplica\u021Bie dedicat\u0103.',
    bonuses:
      'Cele 550 de rotiri gratuite sunt distribuite pe primele 4 depuneri: 200 FS la prima, 100 la a doua, 100 la a treia \u0219i 150 la ultima. Rulajul este de 35x, standard pentru industrie. Programul VIP ofer\u0103 cashback zilnic de 10% \u0219i manager personal de cont la nivelurile superioare.',
    payments:
      'Accept\u0103 Visa, Mastercard, Skrill, Neteller, MiFinity \u0219i 6 criptomonede (BTC, ETH, LTC, USDT, XRP, DOGE). Retrageri e-wallet \u0219i crypto \u00EEn 0\u201324 ore. Suport non-stop prin chat live \u0219i email.',
    bonusValidity: '7 zile',
  },
  'velobet-casino': {
    tagline: 'Cazinou + pariuri sportive cu 70 rotiri gratuite \u0219i retrageri rapide.',
    platform:
      'VeloBet combin\u0103 peste 5.800 de titluri casino cu o sec\u021Biune de pariuri sportive pe 40+ sporturi \u0219i esports. Furnizorii includ Evolution, Pragmatic Play, Play\u2019n GO, Red Tiger \u0219i Yggdrasil. Platforma este modern\u0103, cu navigare intuitiv\u0103.',
    bonuses:
      'Pachetul de bun venit ofer\u0103 330% + 70 rotiri gratuite pe 3 depuneri, rulaj 30x. Exist\u0103 \u0219i un bonus crypto exclusiv de 160% la prima depunere cu criptomonede. Cashback VIP de 10% f\u0103r\u0103 rulaj. Turneul Velo Marathon pune la b\u0103taie 500.000 USD.',
    payments:
      '23 metode de plat\u0103: Visa, Mastercard, Skrill, Neteller, Revolut, AstroPay + 9 criptomonede. Limite generoase: 7.500\u20AC/s\u0103pt\u0103m\u00E2n\u0103, 15.000\u20AC/lun\u0103. Retrageri crypto \u00EEn 12 ore, e-wallet \u00EEn 24 ore. Zero comisioane.',
    bonusValidity: '14 zile',
  },
  'billionairespin-casino': {
    tagline: '250 rotiri gratuite, aplica\u021Bie nativ\u0103 iOS/Android \u0219i site complet \u00EEn rom\u00E2n\u0103.',
    platform:
      'Billionairespin ofer\u0103 6.000+ titluri de la 67 furnizori: NetEnt, Pragmatic Play, Evolution, Playson, BGaming \u0219i Wazdan. Catalogul cuprinde 2.600+ sloturi, 300+ jocuri live, video poker \u0219i crash games. Platform\u0103 complet \u00EEn limba rom\u00E2n\u0103.',
    bonuses:
      'Cele 250 de rotiri gratuite vin cu bonusul de bun venit de 255%, distribuit pe depuneri. Sloturile contribuie 100% la rulaj de 30x. Promo\u021Bii recurente \u0219i turnee de sloturi completeaz\u0103 oferta.',
    payments:
      'Visa, Mastercard, Skrill, Neteller, Apple Pay, Google Pay + crypto (BTC, ETH, LTC, DOGE, USDT). Retragere minim\u0103 50\u20AC. Limite: 1.000\u20AC/zi, 3.000\u20AC/s\u0103pt\u0103m\u00E2n\u0103. Aplica\u021Bii native iOS \u0219i Android.',
    bonusValidity: '7 zile',
  },
  'fortunejack-casino': {
    tagline: '5.000 de rotiri cu rulaj de doar 10x \u2014 cea mai mare ofert\u0103 din clasament.',
    platform:
      'FortuneJack este pionier crypto din 2014 cu peste 4.200 de jocuri \u0219i sec\u021Biune Provably Fair unde fiecare rezultat se verific\u0103 pe blockchain. Pragmatic Play, Evolution, NetEnt, Hacksaw Gaming \u0219i Betsoft. Sloturi, jocuri de mas\u0103, crash, Plinko \u0219i live dealer.',
    bonuses:
      'Pachetul de bun venit include 5.000 de rotiri gratuite pe 4 depuneri, cu rulaj de doar 10x \u2014 cel mai mic din industrie. La prima depunere: 110% + 250 FS. Programul Loyalty Garage ofer\u0103 cashback \u00EEntre 3% \u0219i 10%. Drops & Wins cu premii de 2M+ USD.',
    payments:
      '12 criptomonede (BTC, ETH, LTC, DOGE, ZCash, USDC) + Visa, Mastercard, Apple Pay, Skrill, Neteller. Nu exist\u0103 limite de retragere \u2014 po\u021Bi retrage orice c\u00E2\u0219tig integral. Tranzac\u021Bii crypto instant \u0219i gratuite.',
    bonusValidity: '30 zile',
  },
  'spinbetter-casino': {
    tagline: 'Cel mai bine evaluat din clasament (9.4/10) cu 150 rotiri gratuite.',
    platform:
      'SpinBetter reune\u0219te cazinou, cazinou live, pariuri sportive, esports \u0219i mini-jocuri \u00EEntr-o singur\u0103 platform\u0103. Peste 6.000 de titluri de la Playson, Endorphina, Wazdan, Evolution \u0219i Pragmatic Play. Aplica\u021Bii dedicate Android \u0219i iOS.',
    bonuses:
      '150 de rotiri gratuite distribuite pe 4 depuneri: 30 FS la prima, 35 la a doua, 40 la a treia \u0219i 45 la ultima. Bonusul monetar ajunge la 7.466 RON. Exist\u0103 \u0219i bonus separat pentru pariuri sportive. Rulaj 35x.',
    payments:
      'Visa, Mastercard, Skrill, Neteller, Paysafecard, eZeeWallet + 9 criptomonede (BTC, ETH, LTC, USDT, TRON, XRP, BNB, ADA, DOGE). Depunere minim\u0103 1 USD. Retrageri crypto procesate \u00EEn 10\u201315 minute. Suport non-stop.',
    bonusValidity: '7 zile',
  },
};

const reviewSlugs = [
  'iwild-casino',
  'velobet-casino',
  'billionairespin-casino',
  'fortunejack-casino',
  'spinbetter-casino',
];

export function ReviewsSection() {
  const casinos = getCasinosBySlugs(reviewSlugs);

  const ratingLabels: Record<string, string> = {
    securitate: 'Securitate',
    catalogJocuri: 'Jocuri',
    bonusuri: 'Bonusuri',
    metodePlata: 'Pl\u0103\u021Bi',
    experientaUtilizator: 'UX',
    licenta: 'Licen\u021B\u0103',
  };

  return (
    <section id="recenzii" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Recenzii Individuale — Top 5 Rotiri Gratuite
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Analiz&#259; detaliat&#259; a celor mai bune cazinouri interna&#539;ionale cu oferte de rotiri gratuite accesibile din Rom&#226;nia.
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
                          <span className="text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider">Puncta&#539;ie</span>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Exper&#539;i</span>
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
                        <h4 className="text-sm font-bold font-mono text-gray-900">Platform&#259; &#537;i Jocuri</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.platform}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="h-4 w-4 text-orange-500" />
                        <h4 className="text-sm font-bold font-mono text-gray-900">Ofert&#259; Rotiri Gratuite</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.bonuses}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-orange-500" />
                        <h4 className="text-sm font-bold font-mono text-gray-900">Pl&#259;&#539;i &#537;i Retragere</h4>
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
                      <span className="text-[10px] font-bold font-mono text-orange-200 uppercase tracking-widest">Ofert&#259; Rotiri Gratuite</span>
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
                      Joac&#259; Acum
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
