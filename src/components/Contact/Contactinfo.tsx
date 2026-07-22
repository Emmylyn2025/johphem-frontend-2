import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function ContactInfo() {
  return (
    <div>
      <p className="font-mono text-caption uppercase tracking-wide text-steel">
        Get in Touch
      </p>
      <h2 className="mt-2 font-display text-display-md text-ink">
        Prefer to reach out directly?
      </h2>

      <ul className="mt-8 flex flex-col gap-5 font-body text-body">
        <li className="flex items-start gap-3">
          <MapPin size={20} className="mt-0.5 shrink-0 text-signal-amber" />
          <span className="text-steel">[Address line]</span>
        </li>
        <li className="flex items-start gap-3">
          <Phone size={20} className="mt-0.5 shrink-0 text-signal-amber" />
          <a
            href="tel:[Phone Number]"
            className="text-ink hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            [Phone Number]
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail size={20} className="mt-0.5 shrink-0 text-signal-amber" />
          <a
            href="mailto:[email address]"
            className="text-ink hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            [email address]
          </a>
        </li>
        <li className="flex items-start gap-3">
          <MessageCircle size={20} className="mt-0.5 shrink-0 text-signal-amber" />
          <a
            href="https://wa.me/[WhatsApp Number]"
            target="_blank"
            rel="noreferrer"
            className="text-ink hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            Chat on WhatsApp
          </a>
        </li>
      </ul>
    </div>
  );
}