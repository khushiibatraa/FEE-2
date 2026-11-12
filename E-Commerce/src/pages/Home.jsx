import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to ShopEase</h1>
          <p className="hero-tagline">
            Your one-stop destination for quality lifestyle products, electronics, and daily essentials.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/cart" className="btn btn-secondary">
              View Cart
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <h2>Why Shop with ShopEase?</h2>
        <p className="intro-description">
          ShopEase provides an easy, reliable, and smooth shopping experience. Browse our curated collection, find the items you love, and manage your cart effortlessly with instant updates.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Quality Selection</h3>
            <p>Every product is handpicked to ensure authentic quality and maximum satisfaction.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Simple</h3>
            <p>A clean and intuitive interface built for easy browsing, filtering, and checkout.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Reliable Service</h3>
            <p>Your cart stays saved in your browser so you never lose track of your chosen items.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
