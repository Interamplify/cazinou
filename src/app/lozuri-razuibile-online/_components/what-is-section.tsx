import { Dices, Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    Icon: Dices,
    title: 'Joc Instant',
    desc: 'Răzuiești și vezi imediat dacă ai câștigat. Nu mai aștepți extrageri sau rezultate ulterioare.',
  },
  {
    Icon: Zap,
    title: 'Rezultat Predeterminat',
    desc: 'Câștigul e calculat de RNG în momentul achiziționării. Răzuirea e doar animație vizuală.',
  },
  {
    Icon: Shield,
    title: 'Licență și Echitate',
    desc: 'Toate lozurile online de la cazinouri licențiate folosesc RNG certificat și audit independent.',
  },
  {
    Icon: Smartphone,
    title: 'Acces Oriunde',
    desc: 'Joacă de pe mobil, tabletă sau desktop. Optimizat pentru toate dispozitivele.',
  },
];

export function WhatIsSection() {
  return (
    <section id="ce-este" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ce Este un Loz Răzuibil Online?
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Echivalentul digital al lozului fizic — joci instant din browser sau aplicație
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Un <strong className="text-gray-900">loz răzuibil online</strong> (sau{' '}
              <strong className="text-gray-900">scratch card</strong>) este un joc de noroc digital
              în care "răzuiești" zone ascunse de pe un card virtual pentru a descoperi simboluri.
              Dacă potrivești anumite combinații (de exemplu, 3 simboluri identice), câștigi premiul
              aferent.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Spre deosebire de lozurile fizice de la chioșc, variantele online au{' '}
              <strong className="text-gray-900">RTP mai mare</strong> (90-95% vs 50-70%), permit{' '}
              <strong className="text-gray-900">testare gratuită</strong> în modul demo, și oferă
              rezultate instant — fără a aștepta extrageri sau verificări manuale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                    <feature.Icon className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-mono font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
