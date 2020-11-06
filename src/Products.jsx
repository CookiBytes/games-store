import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus } from "react-icons/fa";

// const FUN = "Fun";
// const ADVENTURE = "Adventure";
// const PUZZLES = "Puzzles";

function Products({ setCart, cart }) {
  const [products] = useState([
    {
      // category: ADVENTURE,
      name: "Cyberpunk 2077",
      cost: null,
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
      cost: 7.5,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
      link: "https://store.steampowered.com/app/945360/Among_Us/",
    },
    {
      // category: PUZZLES,
      name: "A Monster's Expedition",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2eop.jpg",
      link: "https://store.steampowered.com/app/1052990/A_Monsters_Expedition/",
    },
    {
      // category: ADVENTURE,
      name: "Halo Infinite",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.jpg",
      link: "https://store.steampowered.com/app/1240440/Halo_Infinite/",
    },
    {
      // category: FUN,
      name: "Rocket League",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2hnd.jpg",
      link:
        "https://store.steampowered.com/app/252950/Rocket_League/?curator_clanid=11855704",
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
    toast("A new game has been added to your cart");
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
              <img src={product.image} alt={product.name} />
              <div className="space"></div>
              <div className="thiscard">
                <button onClick={() => (window.location.href = product.link)}>
                  Buy
                </button>
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
