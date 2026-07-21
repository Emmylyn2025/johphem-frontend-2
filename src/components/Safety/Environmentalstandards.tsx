import { Leaf } from 'lucide-react';
import { SectionHeading } from '../Sectionheading';

// TODO: placeholder standards — replace with actual environmental compliance commitments.
const STANDARDS = [
  'Waste management and site cleanup protocols on every project',
  'Erosion and drainage control built into all earthworks',
  'Compliance with applicable environmental regulatory standards',
  'Dust and noise mitigation measures in populated areas',
] as const;

export function EnvironmentalStandards() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex items-start gap-4">
          <Leaf size={28} className="mt-1 shrink-0 text-safety-green" />
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Environmental Standards" title="Building without leaving damage behind." />
            <ul className="mt-6 flex flex-col gap-3">
              {STANDARDS.map((standard) => (
                <li key={standard} className="font-body text-body text-steel">
                  {standard}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}