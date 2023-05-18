import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; All Rights Reserved {new Date().getFullYear()} Book App
      </p>
      <p>
        book data provided by{" "}
        <Link to={"https://openlibrary.org/developers/api"}>
          <span>Openlibray API</span>
        </Link>
      </p>
    </footer>
  );
}
