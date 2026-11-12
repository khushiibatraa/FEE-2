import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely read initial cart data from browser localStorage
const loadCartFromStorage = () => {
  try {
    if (typeof localStorage !== "undefined") {
      const savedCart = localStorage.getItem("shopease_cart");
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    }
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
  }
  return [];
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart: increment quantity if item already exists, otherwise add with quantity 1
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove individual product by its ID
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },

    // Increase quantity of a product by 1
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    // Decrease quantity of a product (minimum quantity is 1)
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
