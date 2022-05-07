import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Beauty from "./Pages/Beauty";
import Kids from "./Pages/Kids";
import Wishlist from "./Pages/Wishlist";
import Navbar from "./styles/NavBar";
import Contact from "././Pages/contact";
import Login from "./Pages/login";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/men">
          <Men />
        </Route>
        <Route path="/women">
          <Women />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/beauty">
          <Beauty />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/kids/boys">
          <Wishlist />
        </Route>
        <Route path="/kids/girls">
          <Wishlist />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </main>
    </div>
  );
}

export default App;
