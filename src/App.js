import React from "react";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound.jsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./css/style.css";
import "./css/icons.css";
import "./css/search.css";
import "./css/select.css";
import "./css/button.css";
import "./css/spaces.css";
import "./css/products.css";
import "./css/pagenotfound.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
