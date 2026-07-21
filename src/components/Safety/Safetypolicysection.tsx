import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../Sectionheading';

// TODO: placeholder principles — replace with the real, documented safety policy.
const PRINCIPLES = [
  'Zero harm is a precondition for every contract, not a target',
  'Toolbox talks conducted before every shift, on every site',
  'PPE compliance enforced without exception, for staff and visitors alike',
  'Incidents investigated and reported within 24 hours',
] as const;

export function SafetyPolicySection() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto grid grid-cols-4 gap-8 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="col-span-4 lg:col-span-5">
          <SectionHeading eyebrow="Safety Policy" title="Non-negotiable, by design." />
          <p className="mt-4 font-body text-body text-steel">
            [Placeholder] Our safety policy governs every site we manage,
            regardless of contract size or client. It isn&apos;t a document
            reviewed once a year — it&apos;s the first thing checked every
            morning.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <ul className="flex flex-col gap-4">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 font-body text-body text-ink"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-safety-green" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}