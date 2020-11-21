import React from "react";

function NotFoundPage() {
  return (
    <React.Fragment>
      {/* <div className="page-not-found">
        <div class="container">
          <div class="content">
            <h2>404</h2>
            <h4>Oops! Page not found</h4>
            <p>
              The page you were looking for doesn't exist. You may have mistyped
              the address or the page may have moved.
            </p>
            <a href="/home">Back to Home</a>
          </div>
        </div>
      </div> */}

      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
        <a href="/">Home?</a>
      </section>
    </React.Fragment>
  );
}

export default NotFoundPage;
