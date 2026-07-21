import { NavLink } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Pick<Project, 'id' | 'title' | 'category' | 'location' | 'timeline'>;
}

/**
 * The blueprint corner-bracket signature (PRD §5.1/§5.4) lives here, and
 * only here — every project preview across the site (Home, Projects grid,
 * anywhere else) renders through this one component.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <NavLink
      to={`/projects/${project.id}`}
      className="group relative col-span-4 border border-steel-200 bg-concrete-100 p-5 transition-colors duration-150 hover:border-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
    >
      <span
        className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-signal-amber"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-signal-amber"
        aria-hidden="true"
      />

      <div className="flex h-32 items-center justify-center border border-dashed border-steel-200 font-mono text-caption uppercase tracking-wide text-steel">
        [Project Photo]
      </div>
      <p className="mt-4 font-mono text-caption uppercase tracking-wide text-rebar-rust">
        {project.category}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">
        {project.title}
      </h3>
      <div className="mt-3 flex flex-col gap-1 font-body text-body text-steel">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} /> {project.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={14} /> {project.timeline}
        </span>
      </div>
    </NavLink>
  );
}