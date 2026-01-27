interface CasinoFeatureListProps {
  features: string[];
}

export function CasinoFeatureList({ features }: CasinoFeatureListProps) {
  return (
    <ul className="space-y-1.5 text-sm text-gray-700">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-orange-500 flex-shrink-0">&#10003;</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
