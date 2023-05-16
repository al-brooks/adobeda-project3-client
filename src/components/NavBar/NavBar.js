import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function NavBar({ setSearch }) {
  const [newSearch, setNewSearch] = useState({
    searchOption: "title",
    searchText: ""
  });

  const navigate = useNavigate();

  const handleChange = evt => {
    setNewSearch({
      ...newSearch,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    navigate({
      pathname: "search",
      search: createSearchParams({
        title: "Lord of the Rings",
        language: "eng"
      }).toString()
    });
  };

  return (
    <nav>
      <p>LOGO</p>
      <form onSubmit={handleSubmit}>
        <select name="searchOption" onChange={handleChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
        </select>
        <input
          onChange={handleChange}
          name="searchText"
          type="text"
          placeholder="Search..."
        />
        <button type="submit">search</button>
      </form>
    </nav>
  );
}
