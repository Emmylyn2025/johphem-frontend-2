import { Ruler, Layers, Building2, HardHat, ClipboardCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: Ruler,
    title: 'Civil Engineering',
    description: 'Site assessment, drainage, and earthworks engineered to spec.',
  },
  {
    icon: Layers,
    title: 'Structural Design',
    description: 'Load bearing design and analysis for buildings and infrastructure.',
  },
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'End to end construction management for residential and commercial builds.',
  },
  {
    icon: HardHat,
    title: 'Infrastructure',
    description: 'Roads, telecom, and utility infrastructure delivered on schedule.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Supervision',
    description: 'On site QA/QC oversight from groundbreaking to handover.',
  },
] as const;

export function WhatWeDo() {
  return (
    <section className="border-b border-steel-200 bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <p className="font-mono text-caption uppercase tracking-wide text-steel">
          What We Do
        </p>
        <h2 className="mt-2 max-w-xl font-display text-display-md text-ink">
          Five disciplines, one accountable team.
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-8 lg:grid-cols-12">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="col-span-4 lg:col-span-4">
              <Icon size={28} className="text-signal-amber" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 font-body text-body text-steel">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}