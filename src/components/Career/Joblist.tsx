import { JobOpeningCard } from './Jobopeningcard';
import { JOB_OPENINGS } from '../../store/Jobsdata';
import { SectionHeading } from '../Sectionheading';

export function JobsList() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <SectionHeading eyebrow="Open Positions" title="Current openings." />
        {JOB_OPENINGS.length === 0 ? (
          <p className="mt-10 font-body text-body text-steel">
            No open positions right now — check back soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-4 gap-6 lg:grid-cols-12">
            {JOB_OPENINGS.map((job) => (
              <JobOpeningCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}