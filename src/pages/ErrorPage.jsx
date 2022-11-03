import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page container">
      {/* ErrorPage */}
        <p className="page-not-found-text">Page not found</p>
        <h1>Oh No! Error 404</h1>
        <p>
          Sorry, the page you are looking for doesn't exist or has been moved
        </p>
          <Link to="/">Back to Homepage</Link>
    </div>
  );
}
