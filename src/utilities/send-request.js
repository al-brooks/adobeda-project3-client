export default async function bookRequest(bookUrl, method = "GET") {
  try {
    const serverUrl = `http://localhost:3001`;
    const options = { method };

    const res = await fetch(serverUrl + bookUrl, options);
    const book = await res.json();
    return book;
  } catch {
    throw new Error("Bad Request");
  }
}
