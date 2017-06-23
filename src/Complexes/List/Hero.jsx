import React from 'react';
import styled from 'styled-components';
import logoCompassDevelopment from '../../img/compass-development-logo.svg';

const Hero = styled.div`
  display: flex;
  background-color: #161616;
  justify-content: center;
  padding: 5rem 0rem;
`;

const HeroImage = styled.img`
`;

export default () =>
  (<Hero>
    <HeroImage src={logoCompassDevelopment} alt="development-logo" />
  </Hero>);
