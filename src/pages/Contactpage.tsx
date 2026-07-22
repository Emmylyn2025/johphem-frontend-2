import { Helmet } from 'react-helmet-async';
import { ContactHero } from '../components/Contact/Contacthero';
import { ContactForm } from '../components/Contact/Contactform';
import { ContactInfo } from '../components/Contact/Contactinfo';
import { ContactMap } from '../components/Contact/Contactmap';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Johphem Associates</title>
        <meta
          name="description"
          content="Get in touch with Johphem Associates — send a message or reach us directly by phone, email, or WhatsApp."
        />
      </Helmet>
      <ContactHero />

      <section className="bg-concrete">
        <div className="container mx-auto grid grid-cols-4 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="col-span-4 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="col-span-4 lg:col-span-4 lg:col-start-9">
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 bg-concrete-100">
        <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
          <ContactMap />
        </div>
      </section>
    </>
  );
}

export default ContactPage;