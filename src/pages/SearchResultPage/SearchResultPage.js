import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchResultPage() {
  const [books, setBooks] = useState({});

  const search = useLocation().search;
  const apiUrl = "https://openlibrary.org/search.json";

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}${search}`);
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
          return (
            <article>
              <p>cover</p>
              <p>{book.title}</p>
            </article>
          );
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
