import { ClipboardCheck, SearchCheck } from 'lucide-react';
import { SectionHeading } from '../Sectionheading';

export function QaQcSection() {
  return (
    <section className="border-y border-steel-200 bg-concrete-100">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <SectionHeading eyebrow="Quality Assurance & Control" title="Checked before it's a problem." />
        <div className="mt-10 grid grid-cols-4 gap-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6">
            <ClipboardCheck size={28} className="text-signal-amber" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              Quality Assurance
            </h3>
            <p className="mt-2 font-body text-body text-steel">
              [Placeholder] Documented checklists at every phase, material
              inspection against spec before installation, and process
              reviews built into the schedule, not bolted on afterward.
            </p>
          </div>
          <div className="col-span-4 lg:col-span-6">
            <SearchCheck size={28} className="text-signal-amber" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              Quality Control
            </h3>
            <p className="mt-2 font-body text-body text-steel">
              [Placeholder] On-site testing, punch-list resolution before
              milestone sign-off, and a final inspection standard that
              doesn&apos;t vary by client or contract size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}