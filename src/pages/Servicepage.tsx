import { Helmet } from 'react-helmet-async';
import { ServicesHero } from '../components/Services/Servicehero';
import { ServiceBlock } from '../components/Services/Serviceblock';
import { SERVICES } from '../store/Servicedata';
import { CtaBanner } from '../components/Ctabanner';


export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Johphem Associates</title>
        <meta
          name="description"
          content="Civil engineering, structural design, building construction, infrastructure, and project supervision services from Johphem Associates."
        />
      </Helmet>
      <ServicesHero />
      <section className="bg-concrete">
        <div className="container mx-auto px-6 lg:px-12">
          {SERVICES.map((service, index) => (
            <ServiceBlock
              key={service.slug}
              service={service}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
 
export default ServicesPage;