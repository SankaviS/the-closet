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
import Footer from "./styles/Footer";
import Cart from "./Pages/cart";
import Checkout from "./Pages/Checkout";

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
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
