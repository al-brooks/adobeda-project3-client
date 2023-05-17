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

  console.log(book);
  return <h2>BookDetailPage</h2>;
}
