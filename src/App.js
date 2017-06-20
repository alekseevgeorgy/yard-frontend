import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import './css/fonts.css';
import background from './img/background.png';
import Header from './Header';
import Footer from './Footer.js';
import List from './List.js';

const Background = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 20px;
  background-color: #eaebf0;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background>
          <Header />
          <List />
          <Footer />
        </Background>
      </div>
    );
  }
}

export default App;
