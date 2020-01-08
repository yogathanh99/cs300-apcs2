import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  faUserPlus,
  faSignInAlt,
  faBook
} from "@fortawesome/free-solid-svg-icons";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StorePage from "./pages/StorePage";
import Detail from "./pages/Detail";
import Navbar from "./Component/Navbar";
import Profile from "./pages/Profile";
// import './App.css';

const list_item = [
  {
    link: "/store",
    name: "Store",
    icon: faBook
  },
  {
    link: "/login",
    name: "Log in",
    icon: faSignInAlt
  },
  {
    link: "/signup",
    name: "Sign up",
    icon: faUserPlus
  }
];

function App() {
  return (
    <div className="App">
      <Navbar list_item={list_item} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/detail" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
