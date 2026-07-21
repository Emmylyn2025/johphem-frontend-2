import { NavLink } from 'react-router-dom';

export function Hero() {
  return (
    <section className="bg-ink text-concrete-100">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-24 lg:px-12 lg:py-32">
        <p className="font-mono text-caption text-signal-amber">
          Civil Engineering &middot; Structural Design &middot; Construction
        </p>
        <h1 className="max-w-3xl font-display text-display-lg uppercase tracking-tight lg:text-display-xl">
          Precision engineering, built to last.
        </h1>
        <p className="max-w-xl font-body text-body-lg text-steel-200">
          Johphem Associates delivers civil engineering, structural design, and
          construction supervision for developers and procurement teams across
          Nigeria — from first drawing to final inspection.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <NavLink
            to="/projects"
            className="rounded-md bg-signal-amber px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-150 hover:bg-rebar-rust hover:text-concrete-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            View Our Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-md border border-steel-200 px-6 py-3 font-body text-sm font-medium text-concrete-100 transition-colors duration-150 hover:border-signal-amber hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            Request a Quote
          </NavLink>
        </div>
      </div>
    </section>
  );
}