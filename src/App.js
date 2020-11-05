import React from "react";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import "./css/style.css";
import "./css/button.css";
import "./css/spaces.css";
import "./css/products.css";
import "./css/cart-btn-container.css";

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        {/* Search */}
        <a href="#search" className="searchbar">
          <input type="text" placeholder="Search..."></input>
        </a>

        {/* Cart */}
        <div className="cart-container2">
          <div className="space2"></div>
          <a href="#cart" className="cart-button">
            <FaShoppingCart size="30" />
          </a>
        </div>

        {/* Title */}
        <h1>Cards</h1>

        <ul className="flex cards">
          {/* Card 1 */}
          <li>
            <h2>Bull</h2>
            <p>
              Posuere varius ullamcorper ipsum adipiscing dignissim ipsum
              adipiscing a a quisque malesuada quam purus venenatis sagittis
              fermentum parturient curabitur montes a metus.
            </p>

            {/* Cart Button */}
            <div className="cart-container">
              <div className="space2"></div>
              <a href="" className="cart">
                <FaCartPlus />
              </a>
            </div>
          </li>

          {/* Card 2 */}
          <li>
            <h2>Elephant</h2>
            <p>
              Posuere varius ullamcorper ipsum adipiscing dignissim ipsum
              adipiscing a a quisque malesuada quam purus venenatis sagittis
              fermentum parturient curabitur montes a metus.
            </p>

            {/* Cart Button */}
            <div className="cart-container">
              <div className="space2"></div>
              <a href="" className="cart">
                <FaCartPlus />
              </a>
            </div>
          </li>

          {/* Card 3 */}
          <li>
            <h2>Tiger</h2>
            <p>
              Posuere varius ullamcorper ipsum adipiscing dignissim ipsum
              adipiscing a a quisque malesuada quam purus venenatis sagittis
              fermentum parturient curabitur montes a metus.
            </p>

            {/* Cart Button */}
            <div className="cart-container">
              <div className="space2"></div>
              <a href="" className="cart">
                <FaCartPlus />
              </a>
            </div>
          </li>

          {/* Card 4 */}
          <li>
            <h2>Gazelle</h2>
            <p>
              Posuere varius ullamcorper ipsum adipiscing dignissim ipsum
              adipiscing a a quisque malesuada quam purus venenatis sagittis
              fermentum parturient curabitur montes a metus.
            </p>

            {/* Cart Button */}
            <div className="cart-container">
              <div className="space2"></div>
              <a href="" className="cart">
                <FaCartPlus />
              </a>
            </div>
          </li>

          {/* Card 5 */}
          <li>
            <h2>Monkey</h2>
            <p>
              Posuere varius ullamcorper ipsum adipiscing dignissim ipsum
              adipiscing a a quisque malesuada quam purus venenatis sagittis
              fermentum parturient curabitur montes a metus.
            </p>

            {/* Cart Button */}
            <div className="cart-container">
              <div className="space2"></div>
              <a href="" className="cart">
                <FaCartPlus />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
