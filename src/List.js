import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logoCompassDevelopment from './img/compass-development-logo.svg';

import Hero from './Hero.js';
import Headline from './Headline.js';
import Cards from './Cards.js';


export default () => {
  return (
    <div>
      <Hero />
      <Headline />
      <Cards />
    </div>
  );
};
