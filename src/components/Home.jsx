import React, { useState } from "react";
import Cart from "./Cart";
import Filtered from "./products/Filtered";
import Products from "./products/Products";
import { FaShoppingCart, FaHome, FaFilter } from "react-icons/fa";

const PAGE_PRODUCTS = "products";
const PAGE_FILTERED = "filtered";
const PAGE_CART = "cart";

function Home() {
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
      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <div className="space4"></div>
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
}

export default Home;
