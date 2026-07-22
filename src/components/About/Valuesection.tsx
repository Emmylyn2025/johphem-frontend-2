import { ShieldCheck, Ruler, Handshake, Users } from 'lucide-react';
import { SectionHeading } from '../Sectionheading';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Zero harm is the standard on every site, no exceptions.',
  },
  {
    icon: Ruler,
    title: 'Precision',
    description: 'Every drawing, every measurement, held to spec.',
  },
  {
    icon: Handshake,
    title: 'Accountability',
    description: 'We stand behind the work after handover, not just during it.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: "We work as an extension of our clients' teams, not just a contractor.",
  },
] as const;

export function ValuesSection() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <SectionHeading eyebrow="Our Values" title="What guides every project." />
        <div className="mt-10 grid grid-cols-4 gap-8 lg:grid-cols-12">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="col-span-4 lg:col-span-3">
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