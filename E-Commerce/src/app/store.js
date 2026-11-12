import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Subscribe to store updates to persist cart items in localStorage
store.subscribe(() => {
  try {
    if (typeof localStorage !== "undefined") {
      const state = store.getState();
      localStorage.setItem("shopease_cart", JSON.stringify(state.cart.items));
    }
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
});

export default store;
