interface CasinoCtaButtonsProps {
  affiliateUrl: string;
}

export function CasinoCtaButtons({ affiliateUrl }: CasinoCtaButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:w-40">
      <a
        href={affiliateUrl}
        className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold font-mono transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-orange-500 hover:bg-orange-600 text-white focus-visible:ring-orange-500 shadow-sm"
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        Joaca Acum
      </a>
    </div>
  );
}
