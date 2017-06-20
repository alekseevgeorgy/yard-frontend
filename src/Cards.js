import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ComplexesPhoto1 from './img/bitmap1.png';
import ComplexesPhoto2 from './img/bitmap2.png';
import ComplexesPhoto3 from './img/bitmap3.png';


import Card from './Card.js'

const Cards = styled.div`
  margin-bottom: 6rem;
`;
//
// const card = {
//   location: 'dasdasd',
//   address: 'dasdasd',
//   description: 'sdaad'
// }

export default (props) => {
  return (
    <Cards>
      <Grid>
        <Card photo={ComplexesPhoto1} location="SOUTH BEACH, SAN FRANCISCO" address="764 Metropolitan Avenue"  />
        <Card photo={ComplexesPhoto2} location="MIDTOWN EAST, MANHATTAN" address="100 East 53rd Street"  />
        <Card photo={ComplexesPhoto3} location="NOLITA, MANHATTAN" address="152 Elizabeth"  />
      </Grid>
    </Cards>
  );
};
