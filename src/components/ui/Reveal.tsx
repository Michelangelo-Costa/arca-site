import type { CSSProperties, ReactNode } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  threshold?: number;
  variant?: 'fade' | 'left' | 'right' | 'scale' | 'up';
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  stagger = false,
  threshold,
  variant = 'up',
}: RevealProps) {
  const { elementRef, isVisible } = useRevealOnScroll<HTMLDivElement>(threshold);
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      data-reveal-stagger={stagger ? 'true' : undefined}
      data-reveal-variant={variant}
      style={style}
    >
      {children}
    </div>
  );
}
