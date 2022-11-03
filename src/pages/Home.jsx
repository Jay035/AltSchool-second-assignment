import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home container">
        <h1> Welcome to AltSchool Africa</h1>
        <p>
          A simple pagination & API User Interface
        </p>
        <Link to="/users">Get Started</Link>
      </div>
    </>
  );
}
