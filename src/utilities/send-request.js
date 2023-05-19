export default async function bookRequest(url, method = "GET", payload = null) {
  try {
    const serverUrl = `http://localhost:3001`;
    const options = { method };
    // if payload add to options

    const res = await fetch(serverUrl + url, options);
    const book = await res.json();
    return book;
  } catch {
    throw new Error("Bad Request");
  }
}
