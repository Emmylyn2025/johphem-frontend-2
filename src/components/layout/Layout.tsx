import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

/**
 * Shared chrome for every route (PRD §3). Consumed once by the router
 * in App.tsx — individual pages never re-render Navbar/Footer themselves.
 */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-concrete text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}