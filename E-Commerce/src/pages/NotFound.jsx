import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <span className="notfound-code">404</span>
        <h2>Page Not Found</h2>
        <p>The requested destination could not be located or has been relocated.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            Back to Storefront
          </Link>
          <Link to="/products" className="btn btn-secondary">
            View Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
