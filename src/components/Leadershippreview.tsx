import { NavLink } from 'react-router-dom';
import { SectionHeading } from './Sectionheading';

export function LeadershipPreview() {
  return (
    <section className="bg-ink text-concrete-100">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
        <div>
          <SectionHeading
            eyebrow="Leadership"
            title="Led by licensed engineers."
            variant="dark"
          />
          <p className="mt-4 max-w-xl font-body text-body text-steel-200">
            [Placeholder] Our leadership team combines decades of on-site
            engineering experience with formal certification across civil and
            structural disciplines.
          </p>
        </div>
        <NavLink
          to="/team"
          className="inline-block shrink-0 rounded-md border border-steel-200 px-6 py-3 font-body text-sm font-medium text-concrete-100 transition-colors duration-150 hover:border-signal-amber hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
        >
          Meet the Team →
        </NavLink>
      </div>
    </section>
  );
}