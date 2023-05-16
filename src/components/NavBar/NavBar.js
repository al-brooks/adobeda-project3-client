import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function NavBar() {
  const [newSearch, setNewSearch] = useState({
    category: "title",
    text: "",
    language: "eng"
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
    const { category, text, language } = newSearch;
    const searchObj = { language };
    searchObj[category] = text;

    navigate({
      pathname: "search",
      search: createSearchParams(searchObj).toString()
    });

    setNewSearch({
      category: "title",
      text: "",
      language: "eng"
    });
  };

  return (
    <nav>
      <p>LOGO</p>
      <form onSubmit={handleSubmit}>
        <select
          name="category"
          onChange={handleChange}
          value={newSearch.category}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
        </select>
        <input
          onChange={handleChange}
          name="text"
          type="text"
          placeholder="Search..."
          value={newSearch.text}
        />
        <button type="submit">search</button>
      </form>
    </nav>
  );
}
