import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import LandingPage from "../../pages/LandingPage/LandingPage";
import BookListPage from "../../pages/BookListPage/BookListPage";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";

function App() {
  const [search, setSearch] = useState({
    category: "",
    searchTerm: ""
  });

  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      <SideBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/*" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
