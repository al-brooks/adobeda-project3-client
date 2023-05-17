import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const apiUrl = `https://openlibrary.org/works/${id}`;

  // todo: need to fetch book data from server-side an render to react app
  // const fetchBook = async () => {
  //   try {
  //     const response = await fetch(apiUrl);
  //     const bookData = await response.json();
  //     console.log(bookData);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchBook();
  // }, []);

  return <h2>BookDetailPage</h2>;
}
