import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function NavBar() {
  const fieldsArr = [
    "key",
    "title",
    "editions",
    "cover_i",
    "first_publish_year",
    "author_name"
  ];
  const [newSearch, setNewSearch] = useState({
    category: "title",
    text: "",
    language: "eng",
    fields: fieldsArr,
    limit: 10
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
    const { category, text, language, fields, limit } = newSearch;
    const searchObj = { language, limit };
    searchObj[category] = text;

    // adding fields to separate str so commas don't convert to %2 in browser
    const fieldsStr = "&fields=" + fields.join(",");

    navigate({
      pathname: "search",
      search: createSearchParams(searchObj).toString() + fieldsStr
    });

    setNewSearch({
      category: "title",
      text: "",
      language: "eng",
      fields: fieldsArr,
      limit: 10
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
          {/* <option value="author">Author</option> */}
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
