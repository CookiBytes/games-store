import React from "react";
import Connect from "./components/Connect";
import PageNotFound from "./components/pages/PageNotFound.jsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// CSS
import "./css/pages/pagenotfound.css";
import "./css/special/scrollbar.css";
import "./css/special/selection.css";
import "./css/buttons/button.css";
import "./css/special/select.css";
import "./css/updown/footer.css";
import "./css/buttons/icons.css";
import "./css/updown/navbar.css";
import "./css/pages/home.css";
import "./css/products.css";
import "./css/spaces.css";
import "./css/style.css";

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
