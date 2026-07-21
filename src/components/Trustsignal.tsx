import { ShieldCheck, Award, Users } from 'lucide-react';

const SIGNALS = [
  { icon: ShieldCheck, label: 'COREN-Certified Engineers' },
  { icon: Award, label: 'Licensed & Insured' },
  { icon: Users, label: 'Trusted by Public & Private Clients' },
] as const;

export function TrustSignals() {
  return (
    <section className="border-y border-steel-200 bg-concrete-100">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-10 lg:px-12">
        {SIGNALS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 font-mono text-caption uppercase tracking-wide text-steel"
          >
            <Icon size={18} className="text-safety-green" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}