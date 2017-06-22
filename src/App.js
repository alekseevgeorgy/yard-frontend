import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./App.css";
import "./css/fonts.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./Complexes/List";
import Show from "./Complexes/Show";
import ScrollToTopRoute from "./ScrollToTopRoute.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ScrollToTopRoute exact path="/" component={List} />
          <ScrollToTopRoute exact path="/Show" component={Show} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
