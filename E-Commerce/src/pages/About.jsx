import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About ShopEase</h1>
        <p className="about-intro">
          ShopEase is a clean and lightweight mini e-commerce web application designed as a Computer Science & Engineering undergraduate project.
        </p>

        <div className="about-section">
          <h2>Project Objective</h2>
          <p>
            The goal of this project is to demonstrate core modern frontend development principles including:
          </p>
          <ul className="about-list">
            <li>Declarative UI components and state management with <strong>React</strong></li>
            <li>Client-side multi-page routing with <strong>React Router DOM v6</strong></li>
            <li>Centralized predictable state with <strong>Redux Toolkit (RTK)</strong> and <strong>React Redux</strong></li>
            <li>Browser-based persistent storage using <strong>LocalStorage</strong></li>
            <li>Interactive product searching, category filtering, and cart calculations</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Core Values</h2>
          <p>
            Simplicity, reliability, and ease of use. Whether you are exploring tech gadgets, footwear, or everyday accessories, ShopEase aims to provide a frictionless online shopping demo.
          </p>
        </div>

        <div className="about-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Browse Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
