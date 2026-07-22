import { SectionHeading } from '../Sectionheading';
import { ApplicationForm } from './Applicationform';

export function ApplicationSection() {
  return (
    <section id="apply" className="border-t border-steel-200 bg-concrete-100">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <SectionHeading eyebrow="Apply" title="Ready to join the team?" />
        <div className="mt-10 max-w-2xl">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}