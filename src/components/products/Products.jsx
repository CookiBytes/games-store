import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus } from "react-icons/fa";

toast.configure();

function Products({ setCart, cart }) {
  const [products] = useState([
    {
      name: "Cyber Punk 2077",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg",
      link: "https://www.cyberpunk.net/us/en/pre-order",
    },
    {
      name: "Fall Guys",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2fq7.jpg",
      link:
        "https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/",
    },
    {
      name: "Among Us",
      cost: 7.5,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
      link: "https://store.steampowered.com/app/945360/Among_Us/",
    },
    {
      name: "A Monster's Expedition",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2eop.jpg",
      link: "https://store.steampowered.com/app/1052990/A_Monsters_Expedition/",
    },
    {
      name: "Halo Infinite",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.jpg",
      link: "https://store.steampowered.com/app/1240440/Halo_Infinite/",
    },
    {
      name: "Rocket League",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2hnd.jpg",
      link:
        "https://store.steampowered.com/app/252950/Rocket_League/?curator_clanid=11855704",
    },
    {
      name: "The Falconeer",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2e3l.jpg",
      link: "https://store.steampowered.com/app/1135260/The_Falconeer/",
    },
    {
      name: "Genshin Impact",
      cost: null,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ltz.jpg",
      link: "https://genshin.mihoyo.com/en",
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
    toast.success(`${product.name} has been added to cart`, {
      autoClose: 1110,
    });
  };

  return (
    <>
      <h1 className="big-text">Games</h1>

      {/* Cards */}
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
