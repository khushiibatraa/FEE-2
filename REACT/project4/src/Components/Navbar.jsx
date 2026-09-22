import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Niket Sir Classes</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;