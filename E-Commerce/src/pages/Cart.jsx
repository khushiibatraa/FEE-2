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
          <div className="empty-cart-icon">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h2>Your Cart is Empty</h2>
          <p>You have not added any products to your shopping bag yet.</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <span className="page-category-label">Bag & Checkout</span>
        <h1>Shopping Bag</h1>
        <p>Review and modify the selected products before proceeding to checkout.</p>
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
                    <span className="cart-item-category">{item.category}</span>
                    <h3 className="cart-item-title">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="cart-item-quantity">
                    <span className="quantity-label">Quantity</span>
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
                    <span className="subtotal-label">Subtotal</span>
                    <span className="subtotal-value">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="cart-item-remove">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="btn-remove"
                      title="Remove product"
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
              <span>Items Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Standard Delivery</span>
              <span className="free-shipping">Complimentary</span>
            </div>

            <hr className="summary-divider" />

            <div className="summary-row total-row">
              <span>Estimated Total</span>
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
