export default async function bookRequest(url, method = "GET", payload = null) {
  const options = { method };
  // if payload add to options

  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
