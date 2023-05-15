import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import BookListPage from "../BookListPage/BookListPage";
import BookDetailPage from "../BookDetailPage/BookDetailPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/details" element={<BookDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
