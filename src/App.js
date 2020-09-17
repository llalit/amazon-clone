import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Authentication/Login";
import { useStateValue } from "./StateProvider";

function App() {
  

  return (
    <Router>
      <Header className="header__sticky" />
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Profile">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /*  we Need React-Router */
}

{
  /*  localhost */
}

{
  /* localhost Router */
}

{
  /* localhost.com/checkout */
}

{
  /* localhost.com/login */
}

export default App;
