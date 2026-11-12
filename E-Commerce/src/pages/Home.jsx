import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">Curated Collection 2026</span>
          <h1>Modern Essentials, Thoughtfully Crafted</h1>
          <p className="hero-tagline">
            Discover precision-engineered electronics, timeless footwear, and everyday accessories designed with minimalism and longevity in mind.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/cart" className="btn btn-secondary">
              Review Cart
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-header">
          <span className="section-label">Standards</span>
          <h2>The ShopEase Experience</h2>
          <p className="intro-description">
            Built with modern architecture and focused simplicity. Browse authentic products, manage your bag seamlessly, and checkout without friction.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Curated Quality</h3>
            <p>Every product is selected to ensure lasting material quality and verified specifications.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Instant Responsiveness</h3>
            <p>Optimized client-side Redux state updates without latency or unnecessary re-renders.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="1" ry="1" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Persistent Storage</h3>
            <p>Your shopping bag stays safely stored in browser storage even across reloads.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
