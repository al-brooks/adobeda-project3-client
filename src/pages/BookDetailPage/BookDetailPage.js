import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as bookService from "../../utilities/books-service";

export default function BookDetailPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

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
    return (
      <main>
        <h2>BookDetailPage</h2>
        <section>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={`${book.title} Book Cover`}
          />
        </section>
      </main>
    );
  };

  return <>{book ? loaded() : loading()}</>;
}
