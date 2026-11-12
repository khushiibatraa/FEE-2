import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-secondary">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
