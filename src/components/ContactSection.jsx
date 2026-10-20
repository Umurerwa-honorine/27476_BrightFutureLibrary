import { libraryInfo } from '../data/library.js';
import ContactForm from './ContactForm.jsx';

export default function ContactSection({ showIntro = true }) {
  const phoneLink = `tel:${libraryInfo.phone.replace(/\s/g, '')}`;

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        {showIntro && (
          <div className="section-intro">
            <h2 id="contact-title">Contact us</h2>
          </div>
        )}

        <div className="contact-grid">
          <aside className="contact-details" aria-label="Library contact details">
            <h2 id={showIntro ? undefined : 'contact-title'}>Get in touch</h2>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Address</strong>
                <address>{libraryInfo.address}</address>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div>
                <strong>Telephone</strong>
                <a href={phoneLink}>{libraryInfo.phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${libraryInfo.email}`}>{libraryInfo.email}</a>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
