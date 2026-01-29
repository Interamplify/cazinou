import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('space-y-3', centered && 'text-center', className)}>
      {centered && (
        <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 mx-auto" />
      )}
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-500 leading-relaxed max-w-3xl mt-3">
          {subtitle}
        </p>
      )}
    </header>
  );
}
