import bookRequest from "./send-request";
const BASE_URL = "https://book-smart.herokuapp.com/api/books";

export function getBook(bookId) {
  return bookRequest(`${BASE_URL}/${bookId}`);
}
