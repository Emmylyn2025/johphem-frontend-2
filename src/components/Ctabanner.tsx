import { NavLink } from 'react-router-dom';

export function CtaBanner() {
  return (
    <section className="bg-ink text-concrete-100">
      <div className="container mx-auto flex flex-col items-start gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
        <h2 className="max-w-lg font-display text-display-md">
          Have a project that needs to be built right?
        </h2>
        <NavLink
          to="/contact"
          className="rounded-md bg-signal-amber px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-150 hover:bg-rebar-rust hover:text-concrete-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
        >
          Talk to Our Team
        </NavLink>
      </div>
    </section>
  );
}