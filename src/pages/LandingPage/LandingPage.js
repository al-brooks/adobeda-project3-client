import SideBar from "../../components/SideBar/SideBar";
import landingImg from "../../imgs/jaredd-craig-HH4WBGNyltc-unsplash.jpg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <main className="LandingPage">
      <section className="content">
        <h2>
          Welcome to Book<span>Smart</span>
        </h2>
        <p>Start Searching For Your Favorite Book Today!</p>
        <img src={landingImg} alt="" />
      </section>
      <SideBar />
    </main>
  );
}
