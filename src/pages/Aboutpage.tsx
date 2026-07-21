import { Helmet } from 'react-helmet-async';
import { AboutHero } from '../components/About/Abouthero';
import { HistorySection } from '../components/About/Historysection';
import { MissionVision } from '../components/About/Missionvision';
import { ValuesSection } from '../components/About/Valuesection';
import { LeadershipPreview } from '../components/About/Leadershippreview';
import { SafetyCultureBand } from '../components/About/Safetyculturebrand';
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