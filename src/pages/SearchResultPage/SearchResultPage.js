import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchResultPage() {
  const [books, setBooks] = useState({});

  const search = useLocation().search;
  const apiUrl = "https://openlibrary.org";

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/search.json${search}`);
      const bookData = await response.json();
      setBooks(bookData.docs);
    } catch (error) {}
  }, [search]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  console.log(books);

  return (
    <main>
      <h2>Search Result Page</h2>
      <p>Below are the results:</p>
      {books.length > 0 ? (
        books.map(book => {
          if (book.cover_i) {
            return (
              <article key={book.key}>
                <Link to={`${book.key}`}>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt="book cover"
                  />
                </Link>
                <Link to={`${book.key}`}>
                  <h3>{book.title}</h3>
                </Link>
                <h4>By: {book.author_name[0]}</h4>
                <p>First Published: {book.first_publish_year}</p>
                <p>Number of Editions: {book.editions.numFound}</p>
              </article>
            );
          } else {
            return <></>;
          }
        })
      ) : (
        <p>Blank</p>
      )}
    </main>
  );
}

// Pulling search params
// const params = new URLSearchParams(search);
// for (const [key, value] of params) {
//   console.log(`${key}: ${value}`);
// }
