import { parseDate, formatDate } from '../utils/date.js';

export default function EventCard({ event }) {
  const date = parseDate(event.date);

  return (
    <article className="event-card">
      <div className="event-date" aria-hidden="true">
        <span className="event-day">{date.getDate()}</span>
        <span className="event-month">
          {date.toLocaleDateString('en-GB', { month: 'short' })}
        </span>
      </div>
      <div className="event-body">
        <h3>{event.title}</h3>
        <p className="event-full-date">
          <time dateTime={event.date}>{formatDate(event.date)}</time>
        </p>
        <p>{event.description}</p>
      </div>
    </article>
  );
}
