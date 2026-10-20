import PageHeader from '../components/PageHeader.jsx';
import { libraryInfo } from '../data/library.js';

export default function About() {
  return (
    <>
      <PageHeader title="About us" />

      <section className="section" aria-labelledby="story-title">
        <div className="container two-col">
          <article className="prose">
            <h2 id="story-title">Our story</h2>
            <p>
              Bright Future Library was started to get more people in our community reading.
            </p>
            <p>
              Today we have books, computers, study spaces, workshops and reading classes for
              children and adults. Everything is free.
            </p>
          </article>
          <aside className="mission-box" aria-label="Our mission">
            <h2>Our mission</h2>
            <p>{libraryInfo.mission}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
