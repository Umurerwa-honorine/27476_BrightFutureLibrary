export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <span className="service-icon" aria-hidden="true">{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
