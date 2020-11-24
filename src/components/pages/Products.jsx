import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus, FaMinus } from "react-icons/fa";

toast.configure();

function Products({ setCart, cart }) {
  const [products] = useState([
    {
      name: "Untitled Goose Game",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1vqc.jpg",
      link: "https://store.steampowered.com/app/837470/Untitled_Goose_Game/",
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
      cost: 35.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
      link: "https://store.steampowered.com/app/945360/Among_Us/",
    },
    {
      name: "Solitaire Conspiracy",
      cost: 16.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gwv.jpg",
      link:
        "https://store.steampowered.com/app/1424980/The_Solitaire_Conspiracy/",
    },
    {
      name: "Beat Saber",
      cost: 42.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20ux.jpg",
      link: "https://store.steampowered.com/app/620980/Beat_Saber/",
    },
    {
      name: "Cook, Serve, Delicous!",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wbk.jpg",
      link:
        "https://store.steampowered.com/app/1000030/Cook_Serve_Delicious_3/",
    },
    {
      name: "Squadrons",
      cost: 49.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co29n2.jpg",
      link: "https://store.steampowered.com/app/1222730/STAR_WARS_Squadrons/",
    },
    {
      name: "Craftopia",
      cost: 35.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co28g1.jpg",
      link: "https://store.steampowered.com/app/1307550/Craftopia/",
    },
  ]);
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);

    if (itemInCart) {
      toast.error(`${product.name} is already in cart`, {
        autoClose: 1300,
      });
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };

      toast.success(`${product.name} has been added to cart`, {
        autoClose: 1200,
      });

      newCart.push(itemInCart);
    }

    setCart(newCart);
  };

  return (
    <div className="all-centered">
      <div className="letsgopadding">
        <div className="wrapper">
          <div className="products">
            <h1 className="big-text">Games</h1>
            <div className="products">
              <ul className="flex cards">
                {products.map((product, index) => (
                  <li key={index}>
                    <h2>{product.name}</h2>
                    <div className="space3"></div>
                    <img src={product.image} alt={product.name} />
                    <div className="space"></div>
                    <div className="buy-product">
                      <button
                        onClick={() => (window.location.href = product.link)}
                      >
                        Buy
                      </button>
                    </div>
                    <div className="price-colour">
                      <h4>${product.cost}</h4>
                    </div>
                    <div className="cart-container">
                      <div className="space2"></div>
                      <div className="product-icon">
                        <a className="cart" onClick={() => addToCart(product)}>
                          <FaCartPlus />
                        </a>
                        {/* {product != addToCart(product) && (
                          <a
                            className="cart"
                            onClick={() => addToCart(product)}
                          >
                            <FaCartPlus />
                          </a>
                        )}
                        {product === addToCart(product) && (
                          <a
                            className="cart"
                            onClick={() => addToCart(product)}
                          >
                            <FaMinus />
                          </a>
                        )} */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
