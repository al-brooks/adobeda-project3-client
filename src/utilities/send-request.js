export default async function bookRequest(url, method = "GET") {
  try {
    const options = { method };
    const res = await fetch(url, options);

    const book = await res.json();
    return book;
  } catch {
    throw new Error("Bad Request");
  }
}
