import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data/products";

function Products() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notification, setNotification] = useState("");

  // Extract unique categories for filter options
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setNotification(`"${product.name}" added to cart!`);
  };

  // Automatically clear confirmation message after 3 seconds
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of products at affordable prices.</p>
      </div>

      {/* Confirmation message banner */}
      {notification && (
        <div className="alert-success">
          <span>{notification}</span>
          <button
            className="alert-close-btn"
            onClick={() => setNotification("")}
            title="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* Search and Category Filter Controls */}
      <div className="filter-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </button>
          )}
        </div>

        <div className="category-filter">
          <label htmlFor="category-select" className="filter-label">
            Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-dropdown"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List Grid */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <span className="product-category-tag">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-bottom">
                  <span className="product-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-add-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
