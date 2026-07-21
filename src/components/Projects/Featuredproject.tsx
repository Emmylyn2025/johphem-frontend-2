import { NavLink } from 'react-router-dom';
import { ProjectCard } from './Projectscard';

// TODO: replace with live data via a useProjects() TanStack Query hook
// once hooks/ and lib/api-client.ts are built (PRD §4, §7.6). Kept in sync
// with the fuller placeholder set in components/projects/projects-data.ts.
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}