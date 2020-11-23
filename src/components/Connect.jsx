import React, { useState } from "react";
import Filtered from "./pages/Filtered";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const PAGE_PRODUCTS = "products";
const PAGE_FILTERED = "filtered";
const PAGE_CART = "cart";
const PAGE_HOME = "home";

function Connect() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <React.Fragment>
      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <div className="navbar">
          <ul>
            {/* Home */}
            <li>
              <a
                onClick={() => {
                  navigateTo(PAGE_HOME);
                }}
              >
                Home
              </a>
            </li>

            {/* Games */}
            <li>
              <a
                onClick={() => {
                  navigateTo(PAGE_PRODUCTS);
                }}
              >
                Games
              </a>
            </li>

            {/* Filter */}
            <li>
              <a onClick={() => navigateTo(PAGE_FILTERED)}>Filter</a>
            </li>

            {/* Cart */}
            <li>
              <a onClick={() => navigateTo(PAGE_CART)}>Cart</a>
            </li>
          </ul>
        </div>

        {/* Display Pages */}
        <div className="letsgopadding">
          {page === PAGE_HOME && <Home />}
          {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
          {page === PAGE_FILTERED && <Filtered cart={cart} setCart={setCart} />}
          {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}

          <div className="space4"></div>
        </div>

        {/* Footer */}
        <div className="footer-content"></div>
        <div className="all-centered">
          <footer>
            <p>
              Made by <a href="https://github.com/CookiBytes">CookiBytes</a>
            </p>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Connect;
