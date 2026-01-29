import Image from 'next/image';
import { ExternalLink, Star, Wifi, Shield } from 'lucide-react';
import { getCasinosBySlugs } from '@/lib/data-helpers';
import { vpnCasinoSlugs } from '@/data/cazinouri-germania';

export function VpnCasinoSection() {
  const casinos = getCasinosBySlugs(vpnCasinoSlugs);

  return (
    <section id="vpn-casinos" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Cazinouri Online Accesibile cu VPN din Germania
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Platforme internaționale accesibile din Germania prin VPN, fără restricțiile GGL.
            Acces la jocuri de masă, casino live și bonusuri generoase.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {casinos.map((casino, index) => (
            <div
              key={casino.slug}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-lg hover:border-orange-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-600 font-mono">
                  <Wifi className="h-3 w-3" />
                  VPN OK
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-gray-100 bg-white flex-shrink-0">
                  <Image
                    src={casino.logo}
                    alt={`${casino.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold font-mono text-gray-900 truncate">{casino.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-mono text-gray-600">{casino.overallRating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-orange-600 font-mono mb-3 line-clamp-2">
                {casino.bonusTitle}
              </p>

              <div className="flex items-center gap-1.5 mb-3">
                <Shield className="h-3 w-3 text-gray-400" />
                <span className="text-[10px] text-gray-500 font-mono uppercase">{casino.license}</span>
              </div>

              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-2 text-xs font-bold font-mono transition-colors"
              >
                Joacă <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
