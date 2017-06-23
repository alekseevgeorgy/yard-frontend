import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./Complexes/List";
import Complex from "./Complexes/Show";
import ScrollToTopRoute from "./ScrollToTopRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <ScrollToTopRoute exact path="/" component={List} />
          <ScrollToTopRoute exact path="/complex" component={Complex} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
