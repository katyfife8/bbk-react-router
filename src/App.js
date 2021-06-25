import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <header className="App-header">
          Welcome (keeping this to experiment)
        </header>
      </div>
      <Hero />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
