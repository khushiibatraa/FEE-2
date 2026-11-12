import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Form state for checkout simulation
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "cash_on_delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate order total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      navigate("/products");
      return;
    }

    // Set order placed state to display the order completion screen
    setOrderPlaced(true);

    // Clear cart in Redux state (and localStorage via store subscriber)
    dispatch(clearCart());

    // Redirect to Home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // If order was successfully placed, display confirmation screen before redirect
  if (orderPlaced) {
    return (
      <div className="checkout-page order-success-container">
        <div className="order-success-card">
          <div className="success-icon">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2>Order Confirmed</h2>
          <p className="order-success-subtitle">
            Thank you for shopping with ShopEase. Your simulation order has been processed.
          </p>
          <div className="order-ref-card">
            <span className="order-ref-label">Reference Number</span>
            <span className="order-ref-id">
              SE-{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>
          <p className="redirect-notice">
            Returning to the store in a few moments...
          </p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Return to Storefront
          </button>
        </div>
      </div>
    );
  }

  // If cart is empty, prompt user to add products first
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page empty-checkout-container">
        <div className="empty-cart-card">
          <h2>No Items to Checkout</h2>
          <p>Your shopping bag is currently empty. Please add items before proceeding.</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="page-header">
        <span className="page-category-label">Finalize Purchase</span>
        <h1>Checkout</h1>
        <p>Complete your shipping information to place your order.</p>
      </div>

      <div className="checkout-grid">
        {/* Shipping and Contact Information Form */}
        <div className="checkout-form-section">
          <h2>Shipping Address</h2>
          <form onSubmit={handlePlaceOrder} className="checkout-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. john@university.edu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Campus address, street, or apartment"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City / Region</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Preference (Demo)</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="cash_on_delivery">Cash on Delivery (Demo)</option>
                <option value="upi">Direct Transfer / UPI (Demo)</option>
                <option value="card">Credit or Debit Card (Demo)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block place-order-btn">
              Place Order (${totalAmount.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="checkout-summary-section">
          <div className="summary-card">
            <h2>Order Details</h2>
            <div className="checkout-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item-row">
                  <div className="checkout-item-info">
                    <span className="checkout-item-name">{item.name}</span>
                    <span className="checkout-item-qty">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="checkout-item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="summary-divider" />

            <div className="summary-row">
              <span>Items Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">Complimentary</span>
            </div>

            <hr className="summary-divider" />

            <div className="summary-row total-row">
              <span>Total Payable</span>
              <span className="grand-total-price">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <div className="demo-notice">
              <span className="demo-notice-tag">Demo Verification</span>
              <p>
                This checkout is a simulation. No financial transaction will take place, and the cart will be reset automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
