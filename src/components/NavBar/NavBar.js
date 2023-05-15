import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ setSearch }) {
  const navigate = useNavigate();
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("test");
    navigate("/books");
  };

  return (
    <nav>
      <p>LOGO</p>
      <form onSubmit={handleSubmit}>
        <select name="search-options">
          <option value="Title">Title</option>
          <option value="Author">Author</option>
          <option value="Subject">Subject</option>
        </select>
        <input type="text" placeholder="Search..." />
        <button type="submit">search</button>
      </form>
    </nav>
  );
}
