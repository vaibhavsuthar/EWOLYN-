"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  startVisible?: boolean;
  threshold?: number;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = 600,
  startVisible = false,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(startVisible);

  useEffect(() => {
    if (startVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startVisible, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
