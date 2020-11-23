import React from "react";
import Connect from "./components/Connect";
import PageNotFound from "./components/pages/PageNotFound.jsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./css/home.css";
import "./css/style.css";
import "./css/icons.css";
import "./css/navbar.css";
import "./css/search.css";
import "./css/select.css";
import "./css/button.css";
import "./css/spaces.css";
import "./css/footer.css";
import "./css/products.css";
import "./css/selection.css";
import "./css/scrollbar.css";
import "./css/pagenotfound.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Connect} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
