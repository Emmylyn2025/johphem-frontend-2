import { NavLink } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function SafetyCultureBand() {
  return (
    <section className="border-y border-steel-200 bg-concrete-100">
      <div className="container mx-auto flex flex-col items-start gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-start gap-4">
          <ShieldCheck size={32} className="mt-1 shrink-0 text-safety-green" />
          <div>
            <p className="font-mono text-caption uppercase tracking-wide text-safety-green">
              Zero Harm
            </p>
            <p className="mt-2 max-w-xl font-body text-body text-steel">
              [Placeholder] Safety culture isn&apos;t a policy document at
              Johphem it&apos;s the first thing reviewed on every site,
              every day.
            </p>
          </div>
        </div>
        <NavLink
          to="/health-safety"
          className="inline-block shrink-0 font-mono text-caption uppercase tracking-wide text-rebar-rust hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
        >
          View Our Safety Policy →
        </NavLink>
      </div>
    </section>
  );
}