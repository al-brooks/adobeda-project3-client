import bookRequest from "./send-request";
const BASE_URL = "/api/books";

export function getBook(bookId) {
  return bookRequest(`BASE_URL/${bookId}`);
}
