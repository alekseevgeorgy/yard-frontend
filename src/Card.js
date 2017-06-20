import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';


const Card = styled.a`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  background-color: #fff;
  text-decoration: none;

  &:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, .3);
    }
`;

const Content = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 1rem;
  box-shadow: inset 0rem -.125rem #646971;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #646971;
  font-family: 'Monaco';
  line-height: 1.25rem;
  margin: 0 0 1.5rem;
`;

const Description = styled.p`
  font-family: 'Fira Sans', serif;
  color: #3e4247;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-weight: 400;
`;

const Title = Description.withComponent('h3')

const Address = Title.extend`
  font-size: 2.5rem;
  line-height: 3.5rem;
  font-weight: 700;
  color: black;
  margin: 0 0 .5rem;
`;

const Photo = styled.img`
  object-fit: cover;
  flex-shrink: 0;
  width: 31.125rem;
`;

export default (props) => {
  return (
      <Card >
        <Photo src={props.photo} />
        <Content>
          <Location>{props.location}</Location>
          <Address>{props.address}</Address>
          <Description>The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</Description>
        </Content>
      </Card>
  );
};
