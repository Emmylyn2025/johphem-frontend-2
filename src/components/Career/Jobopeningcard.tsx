import { MapPin } from 'lucide-react';
import { JobTypeBadge } from './Jobtypebadge';
import type { JobOpening } from '../../types/Jobapplication';

interface JobOpeningCardProps {
  job: JobOpening;
}

export function JobOpeningCard({ job }: JobOpeningCardProps) {
  return (
    <div className="col-span-4 border border-steel-200 bg-concrete-100 p-5 lg:col-span-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-ink">
          {job.title}
        </h3>
        <JobTypeBadge type={job.type} />
      </div>
      <p className="mt-2 inline-flex items-center gap-1 font-body text-body text-steel">
        <MapPin size={14} /> {job.location}
      </p>
      <p className="mt-3 font-body text-body text-steel">{job.description}</p>
      <a
        href="#apply"
        className="mt-4 inline-block font-mono text-caption uppercase tracking-wide text-rebar-rust hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
      >
        Apply for This Role →
      </a>
    </div>
  );
}