import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { WhatWeDo } from '../components/Whatwedo';
import { StatsStrip } from '../components/Statsstrip';
import { FeaturedProjects } from '../components/Featuredprojects';
import { TrustSignals } from '../components/Trustsignal';
import { CtaBanner } from '../components/Ctabanner';


export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Johphem Associates | Civil Engineering & Construction</title>
        <meta
          name="description"
          content="Johphem Associates delivers civil engineering, structural design, and construction supervision across Nigeria."
        />
      </Helmet>
      <Hero />
      <WhatWeDo />
      <StatsStrip />
      <FeaturedProjects />
      <TrustSignals />
      <CtaBanner />
    </>
  );
}
 
export default HomePage;