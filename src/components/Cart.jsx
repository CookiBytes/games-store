import React from "react";
import { toast } from "react-toastify";
import { FaMinus } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost }) => sum + cost, 0);
  };
  const clearCart = () => {
    setCart([]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    toast.error(`${productToRemove.name} has been removed from cart`, {
      autoClose: 1110,
    });
  };

  return (
    <React.Fragment>
      <div className="letsgopadding">
        {/* Clear Cart and Total Cost */}
        <div className="clear-cart-total-cost">
          <div className="space"></div>
          {cart.length > 0 && (
            <div className="clear-cart-btn">
              <div className="space"></div>
              {/* <button onClick={clearCart}>Clear Cart</button> */}
              <p>Total Cost: ${getTotalSum()}</p>
            </div>
          )}

          {cart.length <= 0 && (
            <div className="footer-content">
              <h1>There are no games in cart.</h1>
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="cart-products">
          <ul className="flex cards">
            {cart.map((product, index) => (
              <li key={index}>
                <h2>{product.name}</h2>
                <div className="space3"></div>
                <img src={product.image} alt={product.name} />
                <div className="price-colour">
                  <h4>${product.cost}</h4>
                </div>
                <div className="space3"></div>
                <div className="cart-container">
                  <div className="space2"></div>
                  <a className="cart" onClick={() => removeFromCart(product)}>
                    <FaMinus />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Cart;
