import { SectionHeading } from '../Sectionheading';

// TODO: placeholder milestones — replace with real founding year and history.
const MILESTONES = [
  { year: '[Year]', label: 'Company founded' },
  { year: '[Year]', label: 'First major infrastructure contract' },
  { year: '[Year]', label: 'COREN certification achieved' },
  { year: '[Year]', label: 'Expanded into telecom infrastructure' },
] as const;

export function HistorySection() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto grid grid-cols-4 gap-8 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="col-span-4 lg:col-span-6">
          <SectionHeading eyebrow="Our Story" title="A history of getting it built." />
          <p className="mt-4 font-body text-body text-steel">
            [Placeholder] Johphem Associates was founded to bring engineering
            discipline to Nigeria&apos;s construction sector pairing
            technical rigor with accountability on every site we manage.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <ul className="flex flex-col gap-6 border-l border-steel-200 pl-6">
            {MILESTONES.map((m) => (
              <li key={m.label} className="relative">
                <span
                  className="absolute -left-[27px] top-1 h-2 w-2 rounded-full bg-signal-amber"
                  aria-hidden="true"
                />
                <p className="font-mono text-caption uppercase tracking-wide text-rebar-rust">
                  {m.year}
                </p>
                <p className="mt-1 font-body text-body text-ink">{m.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}