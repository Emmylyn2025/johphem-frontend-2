// TODO: placeholder figures — replace with real company numbers.
const STATS = [
  { value: '15+', label: 'Years in Operation' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '40+', label: 'Engineers & Staff' },
  { value: '0', label: 'Lost-Time Incidents' },
] as const;

export function StatsStrip() {
  return (
    <section className="bg-ink text-concrete-100">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-l border-steel px-4">
            <p className="font-display text-display-md text-signal-amber">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-caption uppercase tracking-wide text-steel-200">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}