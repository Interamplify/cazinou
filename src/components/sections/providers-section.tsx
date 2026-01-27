import { getAllProviders } from '@/lib/data-helpers';

export function ProvidersSection() {
  const providers = getAllProviders();

  return (
    <section id="furnizori" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Furnizori de Jocuri de Top
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Cele mai populare studiouri: Pragmatic Play, NetEnt, EGT, Novomatic, Playtech — cu sute de titluri inovatoare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {providers.map((provider) => (
            <div
              key={provider.slug}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-50 text-2xl font-bold font-mono text-orange-500">
                  {provider.name.charAt(0)}
                </span>
                <div>
                  <h3 className="text-base font-bold font-mono text-gray-900">{provider.name}</h3>
                  <p className="text-sm text-gray-400">
                    {provider.headquarters} &middot; {provider.foundedYear} &middot;{' '}
                    {provider.totalGames}+ jocuri
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {provider.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {provider.popularGames.map((game) => (
                  <span
                    key={game}
                    className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-1"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
