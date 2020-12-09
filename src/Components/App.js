import React from "react";
// import Router from "./Router";
import Headers from "./Header";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Price from "../Screens/Prices";
import Exchange from "../Screens/Exchanges";
import Coin from "../Screens/Coins";

function App() {
  return (
    <Router>
      <div>
        <h1>Coin Explorer!</h1>
        <ul>
          <li>
            <Link to="/price">Prices</Link>
          </li>
          <li>
            <Link to="/exchange">Exchanges</Link>
          </li>
          <li>
            <Link to="/coin">Coins</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/price" component={Price} />
          <Route path="/exchange" component={Exchange} />
          <Route path="/coin" component={Coin} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
