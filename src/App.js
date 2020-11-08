import React, { useState } from "react";
import Cart from "./Cart";
import Products from "./Products";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import "./css/style.css";
import "./css/icons.css";
import "./css/button.css";
import "./css/spaces.css";
import "./css/products.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        {/* Cart */}
        <div className="cart-container2 border-right">
          <div className="space2"></div>
          <a
            className="cart-button border-right"
            onClick={() => navigateTo(PAGE_CART)}
          >
            <FaShoppingCart size="30" />
          </a>
        </div>

        {/* Home */}
        <div className="cart-container2 border-left">
          <div className="space2"></div>
          <a
            className="cart-button border-left"
            onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            <FaHome size="30" />
          </a>
        </div>

        {/* Grid */}
        <div className="wrapper">
          {/* Search */}
          <a href="">
            <input type="text" placeholder="Search..."></input>
          </a>

          {/* Display */}
          {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
          {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
