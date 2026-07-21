import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Use 'dark' when the section sits on a bg-ink surface. */
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  variant = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p
        className={cn(
          'font-mono text-caption uppercase tracking-wide',
          variant === 'dark' ? 'text-steel-200' : 'text-steel'
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-2 font-display text-display-md',
          variant === 'dark' ? 'text-concrete-100' : 'text-ink'
        )}
      >
        {title}
      </h2>
    </div>
  );
}