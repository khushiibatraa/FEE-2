# ShopEase - Mini E-Commerce Application

ShopEase is a lightweight, responsive mini e-commerce web application built using **React (Vite)**, **Redux Toolkit**, and **React Router DOM v6**. This project was developed as a B.E. Computer Science and Engineering (CSE) frontend development mini-project to demonstrate a strong foundational understanding of modern React component architecture, centralized state management with Redux Toolkit, client-side routing, and browser storage persistence.

---

## 🛠️ Technologies Used

- **React 18**: Functional components, React Hooks (`useState`, `useEffect`, `useNavigate`).
- **Redux Toolkit (RTK)**: Centralized state management using `configureStore` and `createSlice`.
- **React Redux**: Connecting React components to the store using `useSelector` and `useDispatch`.
- **React Router DOM v6**: Declarative multi-page client-side routing (`Routes`, `Route`, `Link`, `NavLink`, `useNavigate`).
- **Vite**: Next-generation frontend build tooling and development server.
- **CSS3**: Custom, responsive styling without heavyweight external UI frameworks.
- **HTML5 & Web Storage API**: Persistent cart data saved directly to the browser's `localStorage`.

---

## 🌟 Key Features

1. **Home Page (`/`)**:
   - Clean welcome hero banner introducing the store.
   - Quick navigation buttons to explore products or view the shopping cart.
   - Informative value cards highlighting store features.

2. **Product Catalog (`/products`)**:
   - Displays 10 diverse products across multiple categories (Electronics, Footwear, Accessories, Clothing).
   - Real-time product search by name.
   - Dropdown filtering by product category.
   - Instant "Add to Cart" action with a temporary confirmation message banner.

3. **Shopping Cart (`/cart`)**:
   - Detailed list of selected items with images, unit prices, and quantities.
   - Incremental quantity controls (`+` and `-`) with lower-bound protection.
   - Real-time subtotal calculation for each individual product.
   - Auto-updating grand total cart price.
   - Individual product removal and "Clear Cart" button.
   - Informative empty cart state with direct link to start shopping.

4. **Checkout Simulation (`/checkout`)**:
   - Comprehensive order summary detailing items, quantities, and totals.
   - Clean demo shipping address and payment method selection form.
   - One-click "Place Order" button that clears the cart and safely redirects to the Home page with a confirmation screen.

5. **About Page (`/about`)**:
   - Background information about the store and project objectives.
   - Direct navigation button back to Home.

6. **404 Not Found (`*`)**:
   - Custom fallback page for any unmatched routes with quick return links.

7. **Cart Badge & Active Link Highlighting**:
   - Dynamic item count badge in the navigation bar displaying total items currently in cart.
   - Active route styling powered by `NavLink`.

8. **LocalStorage Persistence**:
   - Cart items are automatically synchronized to browser `localStorage` on every change and restored upon refreshing or reopening the browser.

---

## 📁 Project Folder Structure

```text
E-Commerce/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration and localStorage subscription
│   ├── features/
│   │   └── cart/
│   │       └── cartSlice.js      # Redux Toolkit slice containing cart state & reducers
│   ├── components/
│   │   └── Navbar.jsx            # Top navigation bar with active links and cart badge
│   ├── pages/
│   │   ├── Home.jsx              # Welcome landing page
│   │   ├── Products.jsx          # Product catalog with search and category filter
│   │   ├── Cart.jsx              # Cart management with quantity adjustment and subtotals
│   │   ├── Checkout.jsx          # Order summary and demo checkout flow
│   │   ├── About.jsx             # About store and project information
│   │   └── NotFound.jsx          # Custom 404 page for undefined routes
│   ├── data/
│   │   └── products.js           # Static product data array
│   ├── App.jsx                   # Main layout component and route definitions
│   ├── main.jsx                  # Application entry point with Provider & BrowserRouter
│   └── index.css                 # Clean, responsive global CSS styling
```

---

## ⚙️ Installation and Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (version 9 or higher)

### Steps to Run Locally

1. Open your terminal in the project directory:
   ```bash
   cd c:\data\fee-2\E-Commerce
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🧠 Redux Toolkit Implementation Details

Redux Toolkit was utilized to manage the shopping cart state globally without prop drilling:

1. **`createSlice` (`src/features/cart/cartSlice.js`)**:
   - **`initialState`**: Initializes cart items by checking `localStorage.getItem("shopease_cart")`. If empty or invalid, defaults to an empty array `[]`.
   - **Reducers**:
     - `addToCart`: Searches `state.items` for an existing item with matching `id`. If found, increments `item.quantity`; otherwise, appends the product with `quantity = 1`.
     - `removeFromCart`: Filters out the item matching `action.payload` (product ID).
     - `increaseQuantity`: Finds the matching item and increments its quantity by 1.
     - `decreaseQuantity`: Finds the matching item; if `quantity > 1`, decrements by 1 (preserving minimum quantity 1).
     - `clearCart`: Resets `state.items` to an empty array `[]`.

2. **`configureStore` (`src/app/store.js`)**:
   - Combines the `cartReducer` under the `cart` state slice.
   - Uses `store.subscribe()` to listen for every state change and write the updated `state.cart.items` to `localStorage` in JSON format.

3. **React-Redux Hooks Integration**:
   - `useSelector((state) => state.cart.items)`: Accesses current cart items in `Navbar`, `Cart`, and `Checkout` without passing props.
   - `useDispatch()`: Dispatches actions (`addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart`) directly from UI triggers.

---

## 📸 Screenshots

*(Replace placeholders with actual project screenshots for academic submission)*

### 1. Home Page
`[ Insert Screenshot of Home Page Banner & Highlights here ]`

### 2. Products Page with Search & Filter
`[ Insert Screenshot of Products Grid with Category Filter & Search here ]`

### 3. Shopping Cart Page
`[ Insert Screenshot of Cart with Subtotals & Quantity Controls here ]`

### 4. Checkout & Order Confirmation
`[ Insert Screenshot of Checkout Form & Order Summary here ]`

### 5. 404 Page Not Found
`[ Insert Screenshot of Custom 404 Page here ]`

---

## 🎓 Academic Evaluation Checklist

- [x] Initialized with standard Vite React without unnecessary bloat.
- [x] Functional components with hooks (`useState`, `useEffect`, `useNavigate`).
- [x] Declarative routing with `react-router-dom` v6 (`Routes`, `Route`, `Link`, `NavLink`).
- [x] Redux Toolkit slice and store properly configured.
- [x] Cart persistent across browser refreshes via `localStorage`.
- [x] Clean, well-structured, student-friendly code with readable logic.
- [x] Tested production build passes with zero errors.
