interface CasinoBonusTagProps {
  bonusTitle: string;
  featured?: boolean;
}

export function CasinoBonusTag({ bonusTitle, featured = false }: CasinoBonusTagProps) {
  return (
    <p
      className={`text-sm sm:text-base font-mono ${
        featured ? 'text-orange-600' : 'text-gray-700'
      }`}
    >
      {bonusTitle}
    </p>
  );
}
