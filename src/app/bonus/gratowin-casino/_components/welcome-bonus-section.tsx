import { Gift, CheckCircle2, Tag, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const depositBonuses = [
  {
    deposit: 'Prima Depunere',
    bonus: '100%',
    maxAmount: '5.000 RON',
    code: 'GRATO100',
    color: 'purple',
  },
  {
    deposit: 'A Doua Depunere',
    bonus: '50%',
    maxAmount: '5.000 RON',
    code: 'GRATO50',
    color: 'blue',
  },
  {
    deposit: 'A Treia Depunere',
    bonus: '150%',
    maxAmount: '5.000 RON',
    code: 'GRATO150',
    color: 'green',
  },
];

export function WelcomeBonusSection() {
  return (
    <section id="bonus-bun-venit" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-purple-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonus de Bun Venit GratoWin Casino
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Pachet de bun venit de până la 15.000 RON (3.000 EUR) distribuit pe primele 3 depuneri.
          </p>
        </div>

        {/* Bonus image */}
        <div className="mb-10 max-w-3xl mx-auto">
          <Image
            src="/images/gratowin-bonus.webp"
            alt="GratoWin Casino Bonus de Bun Venit"
            width={800}
            height={500}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Deposit bonus cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {depositBonuses.map((bonus) => (
            <article
              key={bonus.deposit}
              className={`rounded-2xl border-2 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${
                bonus.color === 'purple'
                  ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-white'
                  : bonus.color === 'blue'
                    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white'
                    : 'border-green-200 bg-gradient-to-br from-green-50 to-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    bonus.color === 'purple'
                      ? 'bg-purple-100'
                      : bonus.color === 'blue'
                        ? 'bg-blue-100'
                        : 'bg-green-100'
                  }`}
                >
                  <Gift
                    className={`h-5 w-5 ${
                      bonus.color === 'purple'
                        ? 'text-purple-600'
                        : bonus.color === 'blue'
                          ? 'text-blue-600'
                          : 'text-green-600'
                    }`}
                  />
                </div>
                <h3 className="font-mono font-bold text-gray-900">{bonus.deposit}</h3>
              </div>

              <div className="text-center py-4 mb-4 rounded-xl bg-white/60 border border-gray-200">
                <p
                  className={`text-4xl font-extrabold font-mono ${
                    bonus.color === 'purple'
                      ? 'text-purple-600'
                      : bonus.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-green-600'
                  }`}
                >
                  {bonus.bonus}
                </p>
                <p className="text-sm text-gray-600 mt-1">până la {bonus.maxAmount}</p>
              </div>

              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-100">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-mono font-semibold text-gray-700">
                  Cod: {bonus.code}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Key conditions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="font-mono font-bold text-gray-900 text-lg mb-4">Condiții Importante</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Depunere minimă:</strong> 50 RON
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Rulaj:</strong> 35x suma bonus
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Valabilitate:</strong> 30 zile
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Total:</strong> până la 15.000 RON
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/go/gratowin-casino"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-purple-700 transition-colors"
          >
            Activează Bonusul de Bun Venit
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
