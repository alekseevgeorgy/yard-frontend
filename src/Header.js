import React from 'react';
import logoCompass from './img/compass-logo.svg';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = styled.header`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #eaebf0;
  background-color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNav = styled.nav`
`;

const HeaderLogo = styled.img`
`;

const HeaderNavLink = styled.a`
  margin-left: 2rem;
  text-decoration: none;
  color: #3e4247;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <HeaderWrapper>
          <HeaderLogo src={logoCompass} alt="logo" />
          <HeaderNav>
            <HeaderNavLink href="#">Купить</HeaderNavLink>
            <HeaderNavLink href="#">Снять</HeaderNavLink>
            <HeaderNavLink href="#">Наши агенты</HeaderNavLink>
          </HeaderNav>
        </HeaderWrapper>
      </Grid>
    </Header>
  );
};
