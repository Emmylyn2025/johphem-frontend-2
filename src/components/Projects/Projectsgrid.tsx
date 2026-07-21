import { useMemo } from 'react';
import { ProjectCard } from './Projectscard';
import { ProjectFilterBar } from './Projectsfilterbar';
import { PROJECTS } from '../../store/Projectdata';
import { useProjectFilterStore } from '../../store/useProjectfilterstore';


export function ProjectsGrid() {
  const activeCategory = useProjectFilterStore((s) => s.activeCategory);
 
  const categories = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.category))),
    []
  );
 
  const filtered = activeCategory
    ? PROJECTS.filter((p) => p.category === activeCategory)
    : PROJECTS;
 
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <ProjectFilterBar categories={categories} />
 
        {/* Empty state (PRD §7.6) — will also cover the loading/error
            states once this reads from a real useProjects() hook. */}
        {filtered.length === 0 ? (
          <p className="mt-10 font-body text-body text-steel">
            No projects match this filter yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-4 gap-6 lg:grid-cols-12">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}