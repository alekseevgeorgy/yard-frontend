import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./Complexes/List";
import Show from "./Complexes/Show";
import ScrollToTopRoute from "./ScrollToTopRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <ScrollToTopRoute exact path="/" component={List} />
          <ScrollToTopRoute exact path="/Show" component={Show} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
