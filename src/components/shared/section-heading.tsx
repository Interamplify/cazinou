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
      <h2 className="text-2xl font-bold font-mono text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}
