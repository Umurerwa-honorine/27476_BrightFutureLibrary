import { useState } from 'react';

// Shows the real cover from Open Library. If there is no ISBN or the image
// can't load (e.g. offline), a plain coloured cover with the title is shown instead.
export default function BookCover({ book }) {
  const [failed, setFailed] = useState(false);

  if (book.isbn && !failed) {
    return (
      <img
        className="book-cover-img"
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`}
        alt={`Cover of ${book.title} by ${book.author}`}
        width="160"
        height="240"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="book-cover" style={{ '--cover': book.color }} role="img" aria-label={`Cover of ${book.title}`}>
      <span className="book-cover-title">{book.title}</span>
      <span className="book-cover-author">{book.author}</span>
    </div>
  );
}
