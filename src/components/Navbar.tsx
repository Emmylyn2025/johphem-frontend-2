import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useMenuStore } from '../store/useMenuStore';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Health & Safety', to: '/health-safety' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;
 
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isOpen = useMenuStore((s) => s.isOpen);
  const toggle = useMenuStore((s) => s.toggle);
  const close = useMenuStore((s) => s.close);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-200',
        scrolled
          ? 'border-ink bg-ink text-concrete-100'
          : 'border-steel-200 bg-concrete text-ink'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Wordmark */}
        <NavLink
          to="/"
          end
          onClick={close}
          className="font-display text-lg font-bold uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
        >
          Johphem{' '}
          <span className={scrolled ? 'text-signal-amber' : 'text-rebar-rust'}>
            Associates
          </span>
        </NavLink>
 
        {/* Right-hand group: nav + CTA + mobile toggle, kept clear of the wordmark */}
        <div className="flex items-center gap-8 lg:ml-12">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'font-body text-xs uppercase tracking-wide transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber',
                    isActive
                      ? 'text-signal-amber'
                      : scrolled
                        ? 'text-concrete-100 hover:text-signal-amber'
                        : 'text-steel hover:text-ink'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
 
          {/* CTA */}
          <NavLink
            to="/contact"
            className="hidden rounded-md bg-signal-amber px-4 py-2 font-body text-sm font-medium text-ink transition-colors duration-150 hover:bg-rebar-rust hover:text-concrete-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber lg:inline-block"
          >
            Request a Quote
          </NavLink>
 
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={toggle}
            className="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
 
      {/* Mobile menu panel */}
      {isOpen && (
        <nav
          className="border-t border-steel-200 bg-concrete px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      'block font-body text-body uppercase tracking-wide',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber',
                      isActive ? 'text-signal-amber' : 'text-ink'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            onClick={close}
            className="mt-6 block rounded-md bg-signal-amber px-4 py-2 text-center font-body text-sm font-medium text-ink"
          >
            Request a Quote
          </NavLink>
        </nav>
      )}
    </header>
  );
}