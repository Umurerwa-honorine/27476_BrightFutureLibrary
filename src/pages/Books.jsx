import PageHeader from '../components/PageHeader.jsx';
import BookCard from '../components/BookCard.jsx';
import { books } from '../data/library.js';

export default function Books() {
  return (
    <>
      <PageHeader title="Featured books" />

      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {books.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
