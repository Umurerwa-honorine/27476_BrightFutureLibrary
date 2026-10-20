import PageHeader from '../components/PageHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/library.js';

export default function Services() {
  return (
    <>
      <PageHeader title="Our services" />

      <section className="section">
        <div className="container">
          <div className="grid grid-services">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
