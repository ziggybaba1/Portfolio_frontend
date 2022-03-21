import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
// import Blog from "./pages/Blog/Blog";

export default function App() {

  return (
    <CartProvider>
    <Router>
      <Switch>
       <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/contactme">
          <Contact />
        </Route>
       {/* <Route path="/blog/:id">
          <Blog />
        </Route> */}
      <Route path="/">
          <HomePage />
        </Route>
       
      </Switch>
      </Router>
      </CartProvider>
  )
}

