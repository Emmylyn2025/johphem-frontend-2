import { Helmet } from 'react-helmet-async';
import { HealthSafetyHero } from '../components/Safety/Healthsafetyhero';
import { SafetyPolicySection } from '../components/Safety/Safetypolicysection';
import { QaQcSection } from '../components/Safety/Qaqcsection';
import { EnvironmentalStandards } from '../components/Safety/Environmentalstandards';
import { ZeroHarmStats } from '../components/Safety/Zeroharmstats';
import { CtaBanner } from '../components/Ctabanner';

export function HealthSafetyPage() {
  return (
    <>
      <Helmet>
        <title>Health & Safety | Johphem Associates</title>
        <meta
          name="description"
          content="Johphem Associates' safety policy, QA/QC processes, environmental standards, and zero harm record."
        />
      </Helmet>
      <HealthSafetyHero />
      <SafetyPolicySection />
      <QaQcSection />
      <EnvironmentalStandards />
      <ZeroHarmStats />
      <CtaBanner />
    </>
  );
}

export default HealthSafetyPage;