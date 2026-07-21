import { Helmet } from 'react-helmet-async';
import { AboutHero } from '../components/Abouthero';
import { HistorySection } from '../components/Historysection';
import { MissionVision } from '../components/Missionvision';
import { ValuesSection } from '../components/Valuesection';
import { LeadershipPreview } from '../components/Leadershippreview';
import { SafetyCultureBand } from '../components/Safetyculturebrand';
import { CtaBanner } from '../components/Ctabanner';


export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Johphem Associates</title>
        <meta
          name="description"
          content="Learn about Johphem Associates' history, mission, values, and safety culture."
        />
      </Helmet>
      <AboutHero />
      <HistorySection />
      <MissionVision />
      <ValuesSection />
      <LeadershipPreview />
      <SafetyCultureBand />
      <CtaBanner />
    </>
  );
}
 
export default AboutPage;