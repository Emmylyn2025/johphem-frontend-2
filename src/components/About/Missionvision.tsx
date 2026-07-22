import { Target, Compass } from 'lucide-react';
import { SectionHeading } from '../Sectionheading';

export function MissionVision() {
  return (
    <section className="border-y border-steel-200 bg-concrete-100">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <SectionHeading eyebrow="Mission & Vision" title="Why we build the way we do." />
        <div className="mt-10 grid grid-cols-4 gap-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6">
            <Target size={28} className="text-signal-amber" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              Mission
            </h3>
            <p className="mt-2 font-body text-body text-steel">
              [Placeholder] To deliver structurally sound, safely executed
              construction projects that meet the highest engineering
              standards.
            </p>
          </div>
          <div className="col-span-4 lg:col-span-6">
            <Compass size={28} className="text-signal-amber" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              Vision
            </h3>
            <p className="mt-2 font-body text-body text-steel">
              [Placeholder] To be Nigeria&apos;s most trusted name in civil
              engineering and construction supervision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}