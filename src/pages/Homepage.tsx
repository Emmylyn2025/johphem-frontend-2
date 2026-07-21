import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Home/Hero';
import { WhatWeDo } from '../components/Home/Whatwedo';
import { StatsStrip } from '../components/Home/Statsstrip';
import { FeaturedProjects } from '../components/Home/Featuredprojects';
import { TrustSignals } from '../components/Home/Trustsignal';
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