export default async function bookRequest(url, method = "GET", payload = null) {
  const serverUrl = `http://localhost:3001`;
  const options = { method };
  // if payload add to options

  const res = await fetch(serverUrl + url, options);
  const book = await res.json();

  if (res.ok) return book;
  throw new Error("Bad Request");
}
