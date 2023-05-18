import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../../pages/LandingPage/LandingPage";
import SearchResultPage from "../../pages/SearchResultPage/SearchResultPage";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/*" element={<SearchResultPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
