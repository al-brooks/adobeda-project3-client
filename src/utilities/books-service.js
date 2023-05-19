import * as booksAPI from "./books-api";

export async function getBook(bookId) {
  const book = await booksAPI.getBook(bookId);
  return book;
}
