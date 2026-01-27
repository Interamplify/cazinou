import { RatingDisplay } from '@/components/shared/rating-display';

interface CasinoRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

export function CasinoRating({ rating, size = 'md' }: CasinoRatingProps) {
  return <RatingDisplay rating={rating} showStars size={size} />;
}
