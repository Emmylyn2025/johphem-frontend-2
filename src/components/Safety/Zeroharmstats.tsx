// TODO: placeholder figures — replace with real safety-record numbers.
const STATS = [
  { value: '0', label: 'Lost-Time Incidents' },
  { value: '500+', label: 'Toolbox Talks Conducted' },
  { value: '100%', label: 'PPE Compliance Audits' },
  { value: '15+', label: 'Years Incident-Free' },
] as const;

export function ZeroHarmStats() {
  return (
    <section className="bg-ink text-concrete-100">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-l border-steel px-4">
            <p className="font-display text-display-md text-safety-green">
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