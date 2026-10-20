import { libraryInfo, communityValues, services, events, books } from '../data/library.js';
import { isUpcoming } from '../utils/date.js';
import EventCard from '../components/EventCard.jsx';
import BookCard from '../components/BookCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Home() {
  const upcomingEvents = events
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <section className="section intro" aria-labelledby="intro-title">
        <div className="container intro-grid">
          <div className="intro-text">
            <h1 id="intro-title">Welcome to {libraryInfo.name}</h1>
            <p>
              Bright Future Library is a free library for everyone. Come in to borrow a book, use
              a computer or find a quiet place to read.
            </p>
            <p>
              We want the library to be a place where kids learn to love reading and where people
              of all ages can keep learning.
            </p>
          </div>

          <div>
            <h2 className="intro-subtitle">Why the library matters</h2>
            <ul className="value-list">
              {communityValues.map((v) => (
                <li key={v.title}>
                  <span className="value-icon" aria-hidden="true">{v.icon}</span>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="services-title">
        <div className="container">
          <div className="section-intro">
            <h2 id="services-title">Our library services</h2>
          </div>
          <div className="grid grid-services">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="events-title">
        <div className="container">
          <div className="section-intro">
            <h2 id="events-title">Upcoming events</h2>
          </div>
          {upcomingEvents.length > 0 ? (
            <div className="event-list">
              {upcomingEvents.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          ) : (
            <p className="empty">No upcoming events right now. Check back soon.</p>
          )}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="books-title">
        <div className="container">
          <div className="section-intro">
            <h2 id="books-title">Featured books</h2>
          </div>
          <div className="grid grid-4">
            {books.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
