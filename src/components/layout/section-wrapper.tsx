import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
