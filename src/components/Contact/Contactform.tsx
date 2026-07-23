import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  contactMessageSchema,
  type ContactMessageFormValues,
} from '../../lib/Contactschema';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMessageFormValues>({
    resolver: zodResolver(contactMessageSchema),
  });


  const onSubmit = async (_values: ContactMessageFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success('Message captured — submission wiring is next.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div>
        <label
          htmlFor="name"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 font-body text-sm text-danger">
            {errors.name.message}
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
            Phone <span className="normal-case text-steel">(optional)</span>
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
          htmlFor="message"
          className="font-mono text-caption uppercase tracking-wide text-steel"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="mt-2 w-full rounded-md border border-steel-200 bg-concrete px-3 py-2 font-body text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 font-body text-sm text-danger">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-md bg-signal-amber px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-150 hover:bg-rebar-rust hover:text-concrete-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}