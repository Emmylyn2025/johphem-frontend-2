import { NavLink } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

// TODO: replace with live data via a useProjects() TanStack Query hook
// once hooks/ and lib/api-client.ts are built (PRD §4, §7.6). Using
// placeholder projects for now so the section has real layout to review.
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Lekki Commercial Complex',
    category: 'Commercial',
    location: 'Lekki, Lagos',
    timeline: '2023–2024',
  },
  {
    id: 2,
    title: 'Ikorodu Road Rehabilitation',
    category: 'Road Construction',
    location: 'Ikorodu, Lagos',
    timeline: '2022–2023',
  },
  {
    id: 3,
    title: 'Abuja Telecom Mast Network',
    category: 'Telecom',
    location: 'Abuja, FCT',
    timeline: '2021–2022',
  },
] as const;

export function FeaturedProjects() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-caption uppercase tracking-wide text-steel">
              Major Projects
            </p>
            <h2 className="mt-2 font-display text-display-md text-ink">
              Work that speaks for itself.
            </h2>
          </div>
          <NavLink
            to="/projects"
            className="hidden font-mono text-caption uppercase tracking-wide text-rebar-rust hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber lg:inline-block"
          >
            View All Projects →
          </NavLink>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-6 lg:grid-cols-12">
          {FEATURED_PROJECTS.map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative col-span-4 border border-steel-200 bg-concrete-100 p-5 transition-colors duration-150 hover:border-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
            >
              {/* Blueprint corner-bracket signature — PRD §5.1/§5.4.
                  Used here, on project cards, and nowhere else on the page. */}
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
          ))}
        </div>
      </div>
    </section>
  );
}