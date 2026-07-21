import { Helmet } from 'react-helmet-async';
import { TeamHero } from '../components/Team/Teamhero';
import { TeamGrid } from '../components/Team/Teamgrid';
import { CtaBanner } from '../components/Ctabanner';

export function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | Johphem Associates</title>
        <meta
          name="description"
          content="Meet the licensed engineers and leadership team at Johphem Associates."
        />
      </Helmet>
      <TeamHero />
      <TeamGrid />
      <CtaBanner />
    </>
  );
}

export default TeamPage;