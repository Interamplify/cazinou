import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import { footerNavItems } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/cazinou-logo.webp"
                alt="cazinou.io"
                width={140}
                height={38}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Portal independent de recenzii de cazinouri online internaționale.
              Analizăm și comparăm operatori pentru a recomanda cele mai bune opțiuni pentru jucătorii români.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
              Link-uri utile
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
              Joc Responsabil
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-50 text-red-500 text-xs font-bold">
                  18+
                </span>
                <span className="text-sm text-gray-500">Joacă responsabil</span>
              </div>
              <p className="text-sm text-gray-500">
                Linia de ajutor:{' '}
                <a
                  href={`tel:${siteConfig.responsibleGaming.hotline}`}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  {siteConfig.responsibleGaming.hotline}
                </a>
              </p>
              <a
                href={siteConfig.responsibleGaming.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:text-orange-700 underline inline-block"
              >
                www.jocresponsabil.ro
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-gray-100 py-5">
          <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-gray-500">Disclosure:</strong> Acest site conține link-uri de afiliere.
            Dacă te înregistrezi printr-un link de pe cazinou.io, putem primi un comision fără costuri suplimentare pentru tine.
            Acest lucru ne ajută să menținem site-ul gratuit și să oferim recenzii independente.
            Recomandările noastre nu sunt influențate de parteneriatele de afiliere.
          </p>
        </div>

        <div className="border-t border-gray-100 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Toate drepturile rezervate.
            <span className="mx-2">&middot;</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-orange-500 hover:text-orange-600"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
