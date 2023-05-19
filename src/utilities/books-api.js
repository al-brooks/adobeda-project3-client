import bookRequest from "./send-request";
const BASE_URL = "http://localhost:3001/api/books";

export function getBook(bookId) {
  return bookRequest(`${BASE_URL}/${bookId}`);
}
