import React, { useState } from "react";
import Cart from "./Cart";
import Filtered from "./products/Filtered";
import Products from "./products/Products";

const PAGE_PRODUCTS = "products";
const PAGE_FILTERED = "filtered";
const PAGE_CART = "cart";

function Home() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
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
                  navigateTo();
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
        <div className="letsgopadding">
          {/* Stuff */}
          {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
          {page === PAGE_FILTERED && <Filtered cart={cart} setCart={setCart} />}
          {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
          <div className="space4"></div>
        </div>
        {/* Footer */}
        <div className="footer-content"></div>
        <footer>
          <p>
            Made by <a href="https://github.com/CookiBytes">CookiBytes</a>
          </p>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
