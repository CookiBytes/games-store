import React from "react";
import { FaMinus } from "react-icons/fa";

function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
  };
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      {/* Clear Cart and Total Cost */}
      <div className="space"></div>
      {cart.length > 0 && (
        <div className="idk">
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
      <p>Total Cost: ${getTotalSum()}</p>

      {/* Cards */}
      <div className="idk">
        <ul className="flex cards">
          {cart.map((product, index) => (
            <li key={index}>
              <h2>{product.name}</h2>
              <div className="space3"></div>
              <img src={product.image} alt={product.name} />
              <h4>${product.cost}</h4>
              {/* <input
                value={product.quantity}
                onChange={(e) => setQuantity(product, parseInt(e.target.value))}
              /> */}
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
    </>
  );
}

export default Cart;
