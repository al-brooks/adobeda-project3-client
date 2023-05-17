import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as bookService from "../../utilities/books-service";

export default function BookDetailPage(props) {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  // todo: need to fetch book data from server-side an render to react app
  const fetchBook = useCallback(async () => {
    try {
      const book = await bookService.getBook(id);
      setBook(book);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  const loading = () => {
    return <h2>Loading Info...</h2>;
  };

  const loaded = () => {
    const { author } = location.state;
    const bookDescription = book?.description || book?.description?.value;
    const description = bookDescription
      ? bookDescription.split(/[\n\r]/g)[0]
      : null;

    return (
      <main>
        <h2>BookDetailPage</h2>
        <section>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
            alt={`${book.title} Book Cover`}
          />
          <section>
            <h2>{book.title}</h2>
            {author ? <h3>By: {author}</h3> : <></>}
            {description ? (
              <p>{description}</p>
            ) : (
              <p>No Description Available...</p>
            )}
          </section>
        </section>
      </main>
    );
  };

  return <>{book ? loaded() : loading()}</>;
}
