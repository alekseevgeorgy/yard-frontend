import React from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

const Info = styled.div``;

const Facts = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Title = styled.h2`
  display: inline-block;
  margin-right: 3rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  color: #3e4247;
  font-size: 1.5rem;
  line-height: 1.125;
`;

const Small = styled.small`
  display: block;
  font-size: 0.875rem;
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  line-height: 1.375rem;
  margin-top: 0.625rem;
`;

export default () => {
  return (
    <Info>
      <Grid>
        <Facts>
          <Title>950<Small>предложений</Small></Title>
          <Title>John McAslan + Partners<Small>архитектор</Small></Title>
          <Title>Группа «ПСН»<Small>застройщик</Small></Title>
        </Facts>
      </Grid>
    </Info>
  );
};
