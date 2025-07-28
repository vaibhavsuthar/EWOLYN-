import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl font-extrabold text-center relative mb-4 font-headline',
        'after:content-[\'\'] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-accent after:rounded-full',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-center text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-8 mb-4',
        className
      )}
    >
      {children}
    </p>
  );
}
