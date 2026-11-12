import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <span className="page-category-label">About the Project</span>
        <h1>Engineered for Clarity</h1>
        <p className="about-intro">
          ShopEase is a minimalist e-commerce application developed as a college CSE engineering demonstration focusing on pure React component architecture, client-side routing, and Redux Toolkit state synchronization.
        </p>

        <div className="about-divider"></div>

        <div className="about-section">
          <h2>Technical Architecture</h2>
          <p>
            The interface avoids bloat and heavy component libraries to showcase foundational engineering competencies:
          </p>
          <ul className="about-list">
            <li>
              <strong>State Predictability:</strong> Centralized Redux Toolkit slice managing all cart actions without prop drilling.
            </li>
            <li>
              <strong>Declarative Routing:</strong> Client-side navigation via React Router DOM v6 with parameterized states and active route detection.
            </li>
            <li>
              <strong>Data Persistence:</strong> Browser LocalStorage integration via store subscriptions, preserving state across browser sessions.
            </li>
            <li>
              <strong>Dynamic Filtering:</strong> In-memory compound filtering supporting simultaneous category selection and substring search.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Design Philosophy</h2>
          <p>
            We believe in honest, functional digital design. Sharp geometries, disciplined typography, high legibility, and no decorative gimmickry.
          </p>
        </div>

        <div className="about-actions">
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

export default About;
