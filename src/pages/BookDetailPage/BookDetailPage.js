import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as bookService from "../../utilities/books-service";
import SideBar from "../../components/SideBar/SideBar";
import "./BookDetailPage.css";

export default function BookDetailPage(props) {
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const location = useLocation();

  const fetchBook = useCallback(async () => {
    try {
      const book = await bookService.getBook(id);
      setBook(book);
      setError("");
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  const loading = () => {
    if (error) {
      return <h2>{error}</h2>;
    }
    return <h2>Loading Info...</h2>;
  };

  const loaded = () => {
    const author = location.state?.author || "Author not found.";
    let ratings_average = location.state?.ratings_average || "No Ratings Yet";

    const bookDescription = book?.description || book?.description?.value;
    const description = bookDescription
      ? bookDescription.split(/[\n\r]/g)[0]
      : null;

    return (
      <main className="BookDetailPage">
        <section className="flex-ctr-ctr">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={`${book.title} Book Cover`}
          />
          <section className="detail-content">
            <h2>{book.title}</h2>
            {author ? <h3>By: {author}</h3> : <></>}
            <p>
              Average Rating: <span>{ratings_average}</span> out of 5
            </p>
            {description ? (
              <p>{description}</p>
            ) : (
              <p>No Description Available...</p>
            )}
          </section>
        </section>
        <SideBar />
      </main>
    );
  };

  return <>{book ? loaded() : loading()}</>;
}
