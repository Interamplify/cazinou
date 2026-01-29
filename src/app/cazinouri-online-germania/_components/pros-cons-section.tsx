import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { prosConsGermania } from '@/data/cazinouri-germania';

export function ProsConsSection() {
  return (
    <section id="avantaje-dezavantaje" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Avantaje și dezavantaje: Cazinouri online din Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Ce câștigi și ce riscuri ai când joci la cazinouri offshore din Germania folosind VPN.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Pros */}
          <div className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-white p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <ThumbsUp className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Avantaje</h3>
            </div>
            <div className="space-y-4">
              {prosConsGermania.pros.map((pro, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{pro.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{pro.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-white p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <ThumbsDown className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-900">Dezavantaje</h3>
            </div>
            <div className="space-y-4">
              {prosConsGermania.cons.map((con, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    ✗
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{con.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{con.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
