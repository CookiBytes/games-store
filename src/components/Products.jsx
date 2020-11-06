import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const FUN = "Fun";
const ADVENTURE = "Adventure";

function Products({ setCart, cart }) {
  const [products] = useState([
    {
      // category: ADVENTURE,
      name: "Cyberpunk 2077",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg",
      link: "https://www.cyberpunk.net/us/en/pre-order",
    },
    {
      // category: FUN,
      name: "Fall Guys",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2fq7.jpg",
      link:
        "https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/",
    },
    {
      // category: FUN,
      name: "Among Us",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
      link: "https://store.steampowered.com/app/945360/Among_Us/",
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
              <div className="space"></div>
              <div className="buy">
                <button
                  onClick={() => (window.location.href = products[0].link)}
                >
                  CodePen
                </button>
                {/* <p onClick={products.link}>buy</p>
                <button onClick="">Buy</button> */}
              </div>
              <h4>${product.cost}</h4>
              <div className="cart-container">
                <div className="space2"></div>
                <div className="anotheridk">
                  <a className="cart" onClick={() => addToCart(product)}>
                    <FaCartPlus />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
