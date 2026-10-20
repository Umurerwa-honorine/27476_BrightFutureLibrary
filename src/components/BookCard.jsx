import BookCover from './BookCover.jsx';

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-cover-wrap">
        <BookCover book={book} />
      </div>
      <div className="book-body">
        <h3>{book.title}</h3>
        <p className="book-author">
          by <strong>{book.author}</strong>
        </p>
        <p className="book-desc">{book.description}</p>
      </div>
    </article>
  );
}
