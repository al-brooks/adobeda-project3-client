import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import BookListPage from "../../pages/BookListPage/BookListPage";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
