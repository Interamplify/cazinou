'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { formatCurrency } from '@/lib/format';

export function BonusCalculatorSection() {
  const [deposit, setDeposit] = useState(500);
  const [bonusPercent, setBonusPercent] = useState(100);
  const [wagering, setWagering] = useState(30);

  const bonusAmount = (deposit * bonusPercent) / 100;
  const totalWithBonus = deposit + bonusAmount;
  const wageringTotal = bonusAmount * wagering;

  return (
    <section id="calculator-bonus" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Calculator Bonus Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Calculează valoarea reală a bonusului și suma de rulaj necesară.
          </p>
        </div>

        {/* SEO: editorial explanation */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <p className="text-base text-gray-600 leading-relaxed">
            Înainte de a accepta un bonus de cazinou, este esențial să înțelegi cât de mult trebuie să pariezi pentru a putea retrage câștigurile. Cerința de rulaj (wagering requirement) este multiplicatorul aplicat sumei bonusului — de exemplu, un bonus de 1.000 RON cu rulaj x35 înseamnă că trebuie să pariezi 35.000 RON înainte de a solicita o retragere.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Folosește calculatorul de mai jos pentru a simula orice combinație de depozit, procent bonus și cerință de rulaj. Astfel poți compara ofertele reale ale cazinourilor din clasamentul nostru și poți lua o decizie informată.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <Calculator className="h-5 w-5 text-orange-500" />
              <span className="text-base font-bold font-mono text-gray-900">Introdu datele</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Suma Depozitului (RON)
                </label>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base font-mono text-gray-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Procentul Bonusului (%)
                </label>
                <input
                  type="number"
                  value={bonusPercent}
                  onChange={(e) => setBonusPercent(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base font-mono text-gray-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cerință de Rulaj (x)
                </label>
                <input
                  type="number"
                  value={wagering}
                  onChange={(e) => setWagering(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base font-mono text-gray-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-orange-50 border border-orange-100 p-5 text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-orange-600 mb-2">
                  Suma Bonusului
                </p>
                <p className="text-2xl font-bold font-mono text-gray-900">
                  {formatCurrency(bonusAmount)}
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 border border-orange-100 p-5 text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-orange-600 mb-2">
                  Total cu Bonus
                </p>
                <p className="text-2xl font-bold font-mono text-gray-900">
                  {formatCurrency(totalWithBonus)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-100 border border-gray-200 p-5 text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Rulaj Necesar
                </p>
                <p className="text-2xl font-bold font-mono text-gray-900">
                  {formatCurrency(wageringTotal)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
