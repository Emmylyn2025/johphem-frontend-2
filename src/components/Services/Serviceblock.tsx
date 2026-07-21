import { NavLink } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { Service } from '../../store/Servicedata';

interface ServiceBlockProps {
  service: Service;
  /** Flips the illustration/copy sides on large screens for visual rhythm. */
  reversed?: boolean;
}

export function ServiceBlock({ service, reversed = false }: ServiceBlockProps) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        'flex flex-col gap-8 border-b border-steel-200 py-16 last:border-b-0 lg:flex-row lg:items-start lg:gap-12 lg:py-20',
        reversed && 'lg:flex-row-reverse'
      )}
    >
      <div className="shrink-0 lg:w-2/5">
        <div className="flex h-40 items-center justify-center border border-dashed border-steel-200 bg-concrete-100 font-mono text-caption uppercase tracking-wide text-steel lg:h-64">
          [Service Illustration]
        </div>
      </div>

      <div className="lg:w-3/5">
        <Icon size={28} className="text-signal-amber" />
        <h3 className="mt-4 font-display text-display-md text-ink">
          {service.title}
        </h3>
        <p className="mt-3 font-body text-body text-steel">{service.description}</p>

        <ul className="mt-6 flex flex-col gap-2">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 font-body text-body text-ink"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-safety-green" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="font-mono text-caption uppercase tracking-wide text-steel">
            Industries Served
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-steel-200 px-3 py-1 font-mono text-caption uppercase tracking-wide text-steel"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {service.relatedProjects.length > 0 && (
          <div className="mt-6">
            <p className="font-mono text-caption uppercase tracking-wide text-steel">
              Related Projects
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              {service.relatedProjects.map((project) => (
                <li key={project.id}>
                  <NavLink
                    to={`/projects/${project.id}`}
                    className="font-body text-body text-rebar-rust hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
                  >
                    {project.title} →
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}