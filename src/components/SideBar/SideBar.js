import "./SideBar.css";
import Footer from "../Footer/Footer";

export default function SideBar() {
  return (
    <section id="about">
      <section id="site-info">
        <h2>
          Book<span>Smart</span>
        </h2>
        <p>
          Is a website that utilizes the Openlibrary API to provide users with
          the ability to search for their favorite books...
        </p>
      </section>
      <Footer />
    </section>
  );
}
