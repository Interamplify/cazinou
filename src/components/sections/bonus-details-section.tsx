import { bonusDetails } from '@/data/content';

export function BonusDetailsSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Ghid Detaliat: Tipuri de Bonusuri
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Tot ce trebuie să știi despre fiecare tip de bonus și cum să profiți la maxim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bonusDetails.map((bonus) => (
            <div
              key={bonus.slug}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-200 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold font-mono text-gray-900 mb-3">
                {bonus.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {bonus.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
