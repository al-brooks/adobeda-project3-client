import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import "./SearchResultPage.css";

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

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  const loaded = () => {
    return (
      <main className="SearchResultPage">
        <section>
          <h2>Search Result Page</h2>
          {books.length > 0 ? (
            books.map(book => {
              let id = book.key.split("/")[2];
              if (book.cover_i && book.ratings_average) {
                return (
                  <article className="flex-ctr-ctr" key={id}>
                    <Link
                      to={`/book/${id}`}
                      state={{
                        author: book.author_name[0],
                        ratings_average: book.ratings_average.toFixed(2)
                      }}
                    >
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt="book cover"
                      />
                    </Link>
                    <section className="book-info">
                      <Link to={`/book/${id}`}>
                        <h3>{book.title}</h3>
                      </Link>
                      <h4>By: {book.author_name[0]}</h4>
                      <p>First Published: {book.first_publish_year}</p>
                      <p>Number of Editions: {book.editions.numFound}</p>
                    </section>
                  </article>
                );
              } else {
                return <div key={id} style={{ display: "hidden" }}></div>;
              }
            })
          ) : (
            <p>No Books Match Your Search...</p>
          )}
        </section>
        <SideBar />
      </main>
    );
  };

  return <>{books ? loaded() : loading()}</>;
}

// Pulling search params
// const params = new URLSearchParams(search);
// for (const [key, value] of params) {
//   console.log(`${key}: ${value}`);
// }
