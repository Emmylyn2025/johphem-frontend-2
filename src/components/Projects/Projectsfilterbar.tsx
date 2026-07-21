import { cn } from '../../lib/utils';
import { useProjectFilterStore } from '../../store/useProjectfilterstore';

interface ProjectFilterBarProps {
  categories: string[];
}

export function ProjectFilterBar({ categories }: ProjectFilterBarProps) {
  const activeCategory = useProjectFilterStore((s) => s.activeCategory);
  const setActiveCategory = useProjectFilterStore((s) => s.setActiveCategory);

  const chips = ['All', ...categories];

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      {chips.map((chip) => {
        const value = chip === 'All' ? null : chip;
        const isActive = activeCategory === value;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => setActiveCategory(value)}
            aria-pressed={isActive}
            className={cn(
              'rounded-full border px-4 py-1.5 font-mono text-caption uppercase tracking-wide transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber',
              isActive
                ? 'border-signal-amber bg-signal-amber text-ink'
                : 'border-steel-200 text-steel hover:border-signal-amber hover:text-ink'
            )}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}