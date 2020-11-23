import React from "react";
import logo from "../images/logo.png";

function Home() {
  return (
    <React.Fragment>
      <section class="section-a">
        <div class="home-container">
          <div>
            <h1>The latest games.</h1>
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
          <img src={logo} alt="Image" width="550" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
