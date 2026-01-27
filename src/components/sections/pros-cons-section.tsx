import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { prosConsData, verdictContent } from '@/data/content';

export function ProsConsSection() {
  return (
    <section id="pro-contra" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Pro și Contra Cazinouri Online Internaționale
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Cazinourile online internaționale oferă avantaje semnificative jucătorilor români — bonusuri mai generoase, cataloage vaste de jocuri și metode de plată moderne inclusiv crypto. Cu toate acestea, există și riscuri pe care trebuie să le cunoști înainte de a te înregistra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-green-200 bg-green-50/40 p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-green-100 text-green-600">
                <ThumbsUp className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold font-mono text-green-800">Avantaje</span>
            </div>
            <ul className="space-y-3">
              {prosConsData.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-green-800">
                  <span className="text-green-500 flex-shrink-0 mt-1 font-bold">+</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50/40 p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-red-100 text-red-600">
                <ThumbsDown className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold font-mono text-red-800">Dezavantaje</span>
            </div>
            <ul className="space-y-3">
              {prosConsData.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-red-800">
                  <span className="text-red-500 flex-shrink-0 mt-1 font-bold">&minus;</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict / Conclusion — editorial summary for SEO */}
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          <h3 className="text-lg font-bold font-mono text-gray-900">{verdictContent.heading}</h3>
          {verdictContent.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
