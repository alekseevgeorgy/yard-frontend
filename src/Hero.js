import React from 'react';
import logo from './img/compass-development-logo.svg';
import logoCompassDevelopment from './img/compass-development-logo.svg';
import styled from 'styled-components';


const Hero = styled.div`
  display: flex;
  background-color: #161616;
  justify-content: center;
  padding: 5rem 0rem;
`;

const HeroImage = styled.img`
`;

export default () => {
  return (
    <Hero>
      <HeroImage src={logoCompassDevelopment} alt="development-logo" />
    </Hero>
  );
};
