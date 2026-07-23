import { Briefcase, GraduationCap, HardHat, type LucideIcon } from 'lucide-react';
import type { JobOpening } from '../../types/Jobapplication';

const TYPE_CONFIG: Record<JobOpening['type'], { label: string; icon: LucideIcon }> = {
  full_time: { label: 'Full Time', icon: Briefcase },
  internship: { label: 'Internship', icon: GraduationCap },
  apprenticeship: { label: 'Apprenticeship', icon: HardHat },
};

interface JobTypeBadgeProps {
  type: JobOpening['type'];
}

export function JobTypeBadge({ type }: JobTypeBadgeProps) {
  const { label, icon: Icon } = TYPE_CONFIG[type];
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-steel-200 px-3 py-1 font-mono text-caption uppercase tracking-wide text-steel">
      <Icon size={14} />
      {label}
    </span>
  );
}