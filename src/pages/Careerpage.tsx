import { Helmet } from 'react-helmet-async';
import { CareersHero } from '../components/Career/Careerhero';
import { JobsList } from '../components/Career/Joblist';
import { ApplicationSection } from '../components/Career/Applicationsection';

export function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers | Johphem Associates</title>
        <meta
          name="description"
          content="View open positions and apply to join the Johphem Associates team."
        />
      </Helmet>
      <CareersHero />
      <JobsList />
      <ApplicationSection />
    </>
  );
}

export default CareersPage;