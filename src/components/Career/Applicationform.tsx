import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  jobApplicationSchema,
  type JobApplicationFormValues,
} from '../../lib/Jobschema';
import { JOB_OPENINGS } from '../../store/Jobsdata';

export function ApplicationForm() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm<JobApplicationFormValues>({
  //   resolver: zodResolver(jobApplicationSchema),
  // });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(jobApplicationSchema),
  });

  const onSubmit = async (_values: JobApplicationFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success('Application captured — submission wiring is next.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div>
        <label
          htmlFor="jobId"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          Position
        </label>
        <select
          id="jobId"
          defaultValue=""
          {...register('jobId')}
          className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.jobId}
          aria-describedby={errors.jobId ? 'jobId-error' : undefined}
        >
          <option value="" disabled>
            Select a position…
          </option>
          {JOB_OPENINGS.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
        {errors.jobId && (
          <p id="jobId-error" className="mt-1 font-body text-sm text-danger">
            {errors.jobId.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 font-body text-sm text-danger">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="font-mono text-caption uppercase tracking-wide text-steel"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 font-body text-sm text-danger">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-mono text-caption uppercase tracking-wide text-steel"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 font-body text-sm text-danger">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="coverLetter"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          rows={5}
          {...register('coverLetter')}
          className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.coverLetter}
          aria-describedby={errors.coverLetter ? 'coverLetter-error' : undefined}
        />
        {errors.coverLetter && (
          <p id="coverLetter-error" className="mt-1 font-body text-sm text-danger">
            {errors.coverLetter.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="cv"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          CV (PDF, DOC, or DOCX — max 2MB)
        </label>
        <input
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          {...register('cv')}
          className="mt-2 w-full rounded-md border border-dashed border-steel-200 bg-concrete-100 px-3 py-6 font-body text-body text-steel file:mr-4 file:rounded-md file:border-0 file:bg-signal-amber file:px-4 file:py-2 file:font-body file:text-sm file:font-medium file:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.cv}
          aria-describedby={errors.cv ? 'cv-error' : undefined}
        />
        {errors.cv && (
          <p id="cv-error" className="mt-1 font-body text-sm text-danger">
            {errors.cv.message as string}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-md bg-signal-amber px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-150 hover:bg-rebar-rust hover:text-concrete-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}