import Link from 'next/link';
import Image from 'next/image';
import { Gift, ArrowRight } from 'lucide-react';
import { casinoBonuses } from '@/data/bonus-hub';

export function CasinoBonusesSection() {
  return (
    <section id="bonusuri-casino" className="py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Bonusuri pe Casino
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Analize detaliate ale pachetelor de bonus de la cazinouri specifice
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
          {casinoBonuses.map((casino) => (
            <Link
              key={casino.href}
              href={casino.href}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
            >
              {/* Bonus badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-[11px] font-mono font-bold text-white shadow-md">
                  <Gift className="h-3 w-3" />
                  {casino.bonus}
                </span>
              </div>

              {/* Casino Logo */}
              <div className="relative h-14 mt-4 mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={casino.logo}
                  alt={`${casino.name} logo`}
                  width={100}
                  height={50}
                  className="object-contain max-h-14 w-auto rounded"
                />
              </div>

              {/* Casino Name */}
              <h3 className="text-center font-mono font-bold text-gray-900 mb-3">
                {casino.name}
              </h3>

              {/* Max Amount - Prominent */}
              <div className="text-center mb-4">
                <p className="text-xs text-gray-500 mb-0.5">Până la</p>
                <p className="text-xl font-mono font-extrabold text-gray-900">{casino.maxAmount}</p>
              </div>

              {/* CTA Button */}
              <div className="rounded-lg bg-orange-500 group-hover:bg-orange-600 py-2.5 text-center transition-colors">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold font-mono text-white">
                  Vezi Detalii <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
