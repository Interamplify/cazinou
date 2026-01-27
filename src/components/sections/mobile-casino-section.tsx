import {
  Smartphone,
  TabletSmartphone,
  Globe,
  Check,
  X,
  Wifi,
  Zap,
  Shield,
} from 'lucide-react';
import { mobileCasinoData } from '@/data/content';

const optionConfig: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
  apple: {
    icon: <Smartphone className="h-6 w-6" />,
    color: 'text-gray-800',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
  },
  android: {
    icon: <TabletSmartphone className="h-6 w-6" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  browser: {
    icon: <Globe className="h-6 w-6" />,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
};

const tips = [
  {
    icon: <Wifi className="h-5 w-5 text-sky-500" />,
    title: 'Conexiune stabilă',
    text: 'Folosește Wi-Fi pentru casino live și jocuri cu grafică avansată. Datele mobile (4G/5G) sunt suficiente pentru sloturi.',
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    title: 'Baterie și performanță',
    text: 'Închide aplicațiile din fundal pentru o experiență mai fluidă. Casino live consumă mai multă baterie.',
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-500" />,
    title: 'Securitate pe mobil',
    text: 'Activează autentificarea biometrică (Face ID / amprenta) și nu salva datele de plată pe dispozitive partajate.',
  },
];

export function MobileCasinoSection() {
  return (
    <section id="casino-mobil" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Casino Online de pe Mobil
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Toate cazinourile din clasamentul nostru sunt optimizate pentru mobil. Alege metoda care ți se potrivește cel mai bine.
          </p>
        </div>

        {/* 3 option cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {mobileCasinoData.map((opt) => {
            const cfg = optionConfig[opt.icon] ?? optionConfig.browser;
            return (
              <div
                key={opt.option}
                className={`rounded-2xl border ${cfg.border} bg-white p-5 hover:shadow-md transition-all group`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg} border ${cfg.border} ${cfg.color} group-hover:shadow-sm transition-shadow`}>
                    {cfg.icon}
                  </div>
                  <h3 className="text-base font-bold font-mono text-gray-900">{opt.option}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{opt.howItWorks}</p>

                {/* Pros */}
                <ul className="space-y-1.5 mb-3">
                  {opt.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                      <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>

                {/* Cons */}
                <ul className="space-y-1.5">
                  {opt.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                      <X className="h-3.5 w-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tips row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-gray-200 bg-gray-50/50 p-5">
              <div className="flex items-center gap-2.5 mb-2">
                {tip.icon}
                <h4 className="text-sm font-bold font-mono text-gray-900">{tip.title}</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
