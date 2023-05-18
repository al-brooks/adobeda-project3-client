import landingImg from "../../imgs/jaredd-craig-HH4WBGNyltc-unsplash.jpg";

export default function LandingPage() {
  return (
    <main>
      <h2>
        Welcome to Book<span>Smart</span>
      </h2>
      <p>Start Searching For Your Favorite Book Today!</p>
      <img src={landingImg} alt="" />
    </main>
  );
}
