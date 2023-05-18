import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; All Rights Reserved {new Date().getFullYear()} Book
        <span>Smart</span>
      </p>
      <p>
        <em>All book data provided by:</em>
        <br />
        <Link to={"https://openlibrary.org/developers/api"}>
          <span>Openlibray API</span>
        </Link>
      </p>
    </footer>
  );
}
