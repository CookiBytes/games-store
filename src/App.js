import React, { useState } from "react";
import Cart from "./components/Cart";
import Filtered from "./components/Filtered";
import Products from "./components/Products";
import { FaShoppingCart, FaHome, FaFilter } from "react-icons/fa";
import "./css/style.css";
import "./css/icons.css";
import "./css/search.css";
import "./css/select.css";
import "./css/button.css";
import "./css/spaces.css";
import "./css/products.css";

const PAGE_PRODUCTS = "products";
const PAGE_FILTERED = "filtered";
const PAGE_CART = "cart";

// class App extends React.Component() {
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  // render() {

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

        {/* Filter */}
        <div className="cart-container2 border-none">
          <div className="space2"></div>
          <a
            className="cart-button border-left"
            onClick={() => navigateTo(PAGE_FILTERED)}
          >
            <FaFilter size="30" />
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
          <input
            type="text"
            placeholder="Search..."
            // onChange={this.onChange}
          ></input>

          {/* Display */}
          {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
          {page === PAGE_FILTERED && <Filtered cart={cart} setCart={setCart} />}
          {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
        </div>
      </div>
    </React.Fragment>
  );
  // }
}

export default App;
