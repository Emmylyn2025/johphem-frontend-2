import { Helmet } from 'react-helmet-async';
import { ProjectsHero } from '../components/Projects/Projectshero';
import { ProjectsGrid } from '../components/Projects/Projectsgrid';
import { CtaBanner } from '../components/Ctabanner';

export function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects | Johphem Associates</title>
        <meta
          name="description"
          content="Browse Johphem Associates' portfolio of commercial, residential, infrastructure, and public-sector construction projects."
        />
      </Helmet>
      <ProjectsHero />
      <ProjectsGrid />
      <CtaBanner />
    </>
  );
}
 
export default ProjectsPage;