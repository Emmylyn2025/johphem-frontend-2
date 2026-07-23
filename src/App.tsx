import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/Aboutpage';
import { ServicesPage } from './pages/Servicepage';
import { ProjectsPage } from './pages/Projectspage';
import { TeamPage } from './pages/Teampage';
import { HealthSafetyPage } from './pages/Healthandsafetypage';
import { CareersPage } from './pages/Careerpage';
import { ContactPage } from './pages/Contactpage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'health-safety', element: <HealthSafetyPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'contact', element: <ContactPage /> }
    ],
  },
]);

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;