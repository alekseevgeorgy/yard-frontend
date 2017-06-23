import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import logoCompass from './img/compass-logo.svg';

const Header = styled.header`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #eaebf0;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
`;

const Logo = styled.img`
`;

const NavLink = styled.a`
  margin-left: 2rem;
  text-decoration: none;
  color: #3e4247;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Logo src={logoCompass} alt="logo" />
        <Nav>
          <NavLink href="#">Купить</NavLink>
          <NavLink href="#">Снять</NavLink>
          <NavLink href="#">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>);
