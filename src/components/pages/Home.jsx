import React from "react";
import logo from "../images/logo.png";

function Home() {
  return (
    <React.Fragment>
      <section className="section-a">
        <div className="home-container">
          <div>
            <h1>Trending games, handpicked.</h1>
            <p>
              View all the currently trending games, handpicked with the title,
              image, price, and link!
            </p>
            <p>Want to know the origins of Re Games? Click the button below!</p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/CookiBytes/re-games")
              }
            >
              Re Games
            </button>
          </div>
          <img src={logo} alt="Logo" width="550" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
