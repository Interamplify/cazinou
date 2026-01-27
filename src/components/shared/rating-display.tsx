import { cn } from '@/lib/utils';
import { RATING_MAX } from '@/lib/constants';

interface RatingDisplayProps {
  rating: number;
  showStars?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating / 2);
  const hasHalf = (rating / 2) % 1 >= 0.3;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="text-amber-500" aria-hidden="true">
          ★
        </span>
      );
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block" aria-hidden="true">
          <span
            className="absolute inset-0 overflow-hidden text-amber-500"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            ★
          </span>
          <span className="text-gray-300">★</span>
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300" aria-hidden="true">
          ★
        </span>
      );
    }
  }

  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of ${RATING_MAX} rating`}
    >
      {stars}
    </span>
  );
}

export function RatingDisplay({
  rating,
  showStars = true,
  size = 'md',
  className,
}: RatingDisplayProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {showStars && <StarRating rating={rating} />}
      <span
        className={cn(
          'font-semibold font-mono text-gray-700',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base'
        )}
      >
        {rating.toFixed(1)}/{RATING_MAX}
      </span>
    </div>
  );
}
