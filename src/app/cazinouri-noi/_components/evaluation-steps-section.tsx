import { evaluationSteps } from '@/data/cazinouri-noi';

export function EvaluationStepsSection() {
  return (
    <section id="cum-alegi" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cum Alegi un Cazinou Nou
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Urmează acești 6 pași pentru a evalua corect un cazinou nou și a evita capcanele
          </p>
        </div>

        <div className="space-y-4">
          {evaluationSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-orange-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
                  <span className="text-lg font-bold font-mono text-orange-600">{step.number}</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold font-mono text-gray-900 mb-1">{step.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  <p className="text-sm font-semibold text-orange-700 mt-2">
                    {step.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
