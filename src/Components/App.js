import React from "react";
import Router from "./Router";
import Headers from "./Header";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Price from "../Screens/Prices";
import Exchange from "../Screens/Exchanges";
import Coin from "../Screens/Coins";
// Router.js is diff from BrowserRouter !!

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Coin Explorer!</h1>
        <Headers />
        <Router />
      </div>
    </BrowserRouter>
  );
}
export default App;
