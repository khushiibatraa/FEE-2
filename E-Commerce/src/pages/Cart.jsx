import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cart price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // When cart is empty, display an informative empty state with a shop link
  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart-container">
        <div className="empty-cart-card">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>You haven't added any items to your shopping cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <h1>Shopping Cart</h1>
        <p>Review and modify the items in your cart.</p>
      </div>

      <div className="cart-content">
        <div className="cart-items-section">
          <div className="cart-header-actions">
            <span className="items-count-label">
              Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-clear-cart"
            >
              Clear Cart
            </button>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => {
              const subtotal = item.price * item.quantity;

              return (
                <div key={item.id} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-unit-price">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="cart-item-quantity">
                    <span className="quantity-label">Quantity:</span>
                    <div className="quantity-controls">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="qty-btn"
                        disabled={item.quantity <= 1}
                        title={item.quantity <= 1 ? "Minimum quantity is 1" : "Decrease quantity"}
                      >
                        -
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="qty-btn"
                        title="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="subtotal-label">Subtotal:</span>
                    <span className="subtotal-value">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="cart-item-remove">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="btn-remove"
                      title="Remove product from cart"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cart Summary & Checkout Link */}
        <aside className="cart-summary-section">
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>

            <hr className="summary-divider" />

            <div className="summary-row total-row">
              <span>Grand Total</span>
              <span className="grand-total-price">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="summary-actions">
              <Link to="/checkout" className="btn btn-primary btn-block">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn btn-secondary btn-block">
                Continue Shopping
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
