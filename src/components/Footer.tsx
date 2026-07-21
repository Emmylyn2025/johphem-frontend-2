import { NavLink } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Health & Safety', to: '/health-safety' },
  { label: 'Careers', to: '/careers' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-concrete-100">
      <div className="container mx-auto grid grid-cols-4 gap-8 px-6 py-16 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:py-24">
        {/* Company block */}
        <div className="col-span-4 lg:col-span-4">
          <p className="font-display text-lg font-bold uppercase tracking-wide">
            Johphem <span className="text-signal-amber">Associates</span>
          </p>
          <p className="mt-3 max-w-xs font-body text-body text-steel-200">
            Civil engineering, structural design, and construction supervision
            across Nigeria.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-steel px-3 py-1 font-mono text-caption uppercase tracking-wide text-rebar-rust">
            Since [Founding Year]
          </p>
        </div>

        {/* Quick links */}
        <nav className="col-span-2 lg:col-span-3" aria-label="Footer navigation">
          <p className="font-mono text-caption uppercase tracking-wide text-steel-200">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="font-body text-body text-concrete-100 transition-colors duration-150 hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-3">
          <p className="font-mono text-caption uppercase tracking-wide text-steel-200">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 font-body text-body">
            <li className="flex items-start gap-2">
              <Phone size={18} className="mt-1 shrink-0 text-signal-amber" />
              <a
                href="tel:[Phone Number]"
                className="hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
              >
                [Phone Number]
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-1 shrink-0 text-signal-amber" />
              <a
                href="mailto:[email address]"
                className="hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
              >
                [email address]
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={18} className="mt-1 shrink-0 text-signal-amber" />
              <a
                href="https://wa.me/[WhatsApp Number]"
                target="_blank"
                rel="noreferrer"
                className="hover:text-signal-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Safety badge */}
        <div className="col-span-4 lg:col-span-2 lg:justify-self-end">
          <span className="inline-flex items-center gap-2 rounded-md border border-safety-green px-3 py-2 font-mono text-caption uppercase tracking-wide text-safety-green">
            <ShieldCheck size={16} />
            Zero Harm
          </span>
        </div>
      </div>

      <div className="border-t border-steel">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-caption uppercase tracking-wide text-steel-200 lg:flex-row lg:px-12">
          <p>&copy; {year} Johphem Associates. All rights reserved.</p>
          <p>[Address line]</p>
        </div>
      </div>
    </footer>
  );
}