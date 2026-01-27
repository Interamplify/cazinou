import { cn } from '@/lib/utils';

interface CasinoBadgeProps {
  label: string;
  variant?: 'default' | 'featured';
}

export function CasinoBadge({ label, variant = 'default' }: CasinoBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variant === 'featured'
          ? 'border-orange-200 bg-white/80 text-orange-600'
          : 'border-orange-100 bg-white/80 text-orange-500'
      )}
    >
      {label}
    </span>
  );
}
