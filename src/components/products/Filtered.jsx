import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus } from "react-icons/fa";

toast.configure();

const FUN = "Fun";
const ADVENTURE = "Adventure";

function Filtered({ setCart, cart }) {
  const [products] = useState([
    {
      category: FUN,
      name: "Untitled Goose Game",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1vqc.jpg",
      link: "https://store.steampowered.com/app/837470/Untitled_Goose_Game/",
    },
    {
      category: FUN,
      name: "Fall Guys",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2fq7.jpg",
      link:
        "https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/",
    },
    {
      category: FUN,
      name: "Among Us",
      cost: 7.5,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1uaf.jpg",
      link: "https://store.steampowered.com/app/945360/Among_Us/",
    },
    {
      category: ADVENTURE,
      name: "A Monster's Expedition",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2eop.jpg",
      link: "https://store.steampowered.com/app/1052990/A_Monsters_Expedition/",
    },
    {
      category: FUN,
      name: "Beat Saber",
      cost: 42.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co20ux.jpg",
      link: "https://store.steampowered.com/app/620980/Beat_Saber/",
    },
    {
      category: FUN,
      name: "Cook, Serve, Delicous!",
      cost: 28.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wbk.jpg",
      link:
        "https://store.steampowered.com/app/1000030/Cook_Serve_Delicious_3/",
    },
    {
      category: ADVENTURE,
      name: "Squadrons",
      cost: 49.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co29n2.jpg",
      link: "https://store.steampowered.com/app/1222730/STAR_WARS_Squadrons/",
    },
    {
      category: ADVENTURE,
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
  const [category, setCategory] = useState(FUN);
  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      <h1 className="big-text">Filter</h1>

      {/* Filter */}
      <div className="select-container">
        <div className="select">
          <select
            name="slct"
            id="slct"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value={FUN}>{FUN}</option>
            <option value={ADVENTURE}>{ADVENTURE}</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="filtered-products">
        <ul className="flex cards">
          {getProductsInCategory().map((product, index) => (
            <li key={index}>
              <h2>{product.name}</h2>
              <div className="space3"></div>
              <img src={product.image} alt={product.name} />
              <div className="space"></div>
              <div className="buy-product">
                <button onClick={() => (window.location.href = product.link)}>
                  Buy
                </button>
              </div>
              <h4>${product.cost}</h4>
              <div className="cart-container">
                <div className="space2"></div>
                <div className="product-icon">
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
export default Filtered;
