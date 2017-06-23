import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Brief = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.25rem;
  color: #3e4247;
`;

const Address = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: .875rem;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const Button = styled.button`
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  background-color: #fff;
  font-size: .625rem;
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
  color: #00779a;
  padding: .5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
`;

export default () => (
  <Brief>
    <Grid>
      <Wrapper>
        <Info>
          <Name>
              Жилой комплекс «Полянка/44»
            </Name>
          <Address>
              Район Якиманка, улица Большая Полянка, дом 44 • 119180
            </Address>
        </Info>
        <Button>
            В избранное
          </Button>
      </Wrapper>
    </Grid>
  </Brief>
  );
