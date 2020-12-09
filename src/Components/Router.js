import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Price from "../Screens/Prices";
import Exchange from "../Screens/Exchanges";
import Coin from "../Screens/Coins";

export default () => (
  // return <Router>{/* Magic Here */}</Router>;
  <Router>
    <Switch>
      <Route exact path="/price" component={Price} />
      <Route exact path="/exchange" component={Exchange} />
      <Route exact path="/coin" component={Coin} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
