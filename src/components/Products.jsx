import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const FUN = "Fun";
const ADVENTURE = "Adventure";

function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: ADVENTURE,
      name: "Cyberpunk 2077",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg",
    },
    {
      category: FUN,
      name: "Fall Guys",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2fq7.jpg",
    },
    {
      category: FUN,
      name: "Among Us",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
    },
  ]);
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }

    setCart(newCart);
  };

  return (
    <>
      <h1>Home</h1>
      <div className="idk">
        <ul className="flex cards">
          {products.map((product, index) => (
            <li key={index}>
              <h2>{product.name}</h2>
              <div className="space3"></div>
              <img src={product.image} alt="Product Image" />
              <h4>${product.cost}</h4>
              <div className="cart-container">
                <div className="space2"></div>
                <a className="cart" onClick={() => addToCart(product)}>
                  <FaCartPlus />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
