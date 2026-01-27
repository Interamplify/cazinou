import { siteConfig } from '@/data/site-config';

export function ResponsibleGamingSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-orange-400 bg-orange-50/50 p-6 lg:p-8 font-mono">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl lg:text-2xl">
                18+
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-lg lg:text-xl font-bold text-gray-900">
                Joacă responsabil – Doar pentru persoane peste 18 ani
              </p>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {siteConfig.responsibleGaming.message} Setează limite de depunere, pierdere și timp.
                Jocurile de noroc nu garantează câștiguri. Joacă mereu cu măsură și stabilește-ți din
                timp limitele de timp și bani.
              </p>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Dacă simți că pierzi controlul sau jocul nu mai este o plăcere, cere ajutor. Poți apela gratuit
                la linia telefonică Joc Responsabil –{' '}
                <a
                  href={`tel:${siteConfig.responsibleGaming.hotline}`}
                  className="font-semibold text-orange-600 hover:underline"
                >
                  {siteConfig.responsibleGaming.hotline}
                </a>{' '}
                sau vizita{' '}
                <a
                  href={siteConfig.responsibleGaming.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-600 hover:underline"
                >
                  www.jocresponsabil.ro
                </a>{' '}
                pentru consiliere și sprijin.
              </p>
              <p className="text-sm lg:text-base font-bold text-gray-900 pt-2">
                Joacă informat. Joacă responsabil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
