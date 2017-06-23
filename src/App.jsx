import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './Complexes/List';
import Complex from './Complexes/Show';
import ScrollToTopRoute from './ScrollToTopRoute';

export default () =>
  (<Router>
    <main>
      <Header />
      <ScrollToTopRoute exact path="/" component={List} />
      <ScrollToTopRoute exact path="/complex" component={Complex} />
      <Footer />
    </main>
  </Router>);
