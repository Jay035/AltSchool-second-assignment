import { Link } from "react-router-dom";
import error404Image from "../404-image.webp";

export default function ErrorPage() {
  return (
    <div className="error-page container">
      {/* ErrorPage */}
      <div className="content">
        <p className="page-not-found-text">Page not found</p>
        <h1>Oh No! Error 404</h1>
        <p>
          Sorry, the page you are looking for doesn't exist or has been moved
        </p>
          <Link to="/">Back to Homepage</Link>
      </div>
      {/* <img src={error404Image} alt="error illustration" /> */}
    </div>
  );
}
