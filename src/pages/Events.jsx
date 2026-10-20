import PageHeader from '../components/PageHeader.jsx';
import EventCard from '../components/EventCard.jsx';
import { events } from '../data/library.js';
import { isUpcoming } from '../utils/date.js';

export default function Events() {
  const upcoming = events
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <PageHeader title="Upcoming events" />

      <section className="section">
        <div className="container">
          {upcoming.length > 0 ? (
            <div className="event-list">
              {upcoming.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          ) : (
            <p className="empty">No upcoming events right now. Check back soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
