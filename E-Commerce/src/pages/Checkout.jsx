import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Form state for student-friendly checkout simulation
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
          <div className="success-icon">🎉</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for shopping with ShopEase.</p>
          <p className="order-details-note">
            This was a demo checkout. Your cart has been cleared.
          </p>
          <p className="redirect-notice">
            Redirecting you to the home page in a moment...
          </p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Return to Home Now
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
          <p>Your shopping cart is currently empty. Please add products first.</p>
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
        <h1>Checkout</h1>
        <p>Complete your shipping information to place your order.</p>
      </div>

      <div className="checkout-grid">
        {/* Shipping and Contact Information Form */}
        <div className="checkout-form-section">
          <h2>Shipping Information</h2>
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
                placeholder="e.g. john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street address or campus hostel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City / State</label>
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
              <label htmlFor="paymentMethod">Payment Method (Demo)</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="cash_on_delivery">Cash on Delivery (Demo)</option>
                <option value="upi">UPI / Net Banking (Demo)</option>
                <option value="card">Credit / Debit Card (Demo)</option>
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
            <h2>Order Summary</h2>
            <div className="checkout-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item-row">
                  <div className="checkout-item-info">
                    <span className="checkout-item-name">{item.name}</span>
                    <span className="checkout-item-qty">
                      Qty: {item.quantity} × ${item.price.toFixed(2)}
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
              <span>Shipping Fee</span>
              <span className="free-shipping">FREE</span>
            </div>

            <hr className="summary-divider" />

            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span className="grand-total-price">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <p className="demo-notice">
              ⚠️ Note: This is a demo checkout. No real payment or charges will occur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
