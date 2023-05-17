import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as bookService from "../../utilities/books-service";

export default function BookDetailPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  // todo: need to fetch book data from server-side an render to react app
  const fetchBook = async () => {
    try {
      const response = await bookService.getBook(id);
      const bookData = await response.json();
      console.log(bookData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return <h2>BookDetailPage</h2>;
}
