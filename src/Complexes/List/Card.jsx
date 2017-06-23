import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  background-color: #fff;
  text-decoration: none;

  &:hover {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, .3);
  transition: .15s ease-in-out;
  }

  &:last-child {
  margin-bottom: 6rem;
  }
`;

const Content = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 1rem;
  border-bottom: 2px solid #646971;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #646971;
  font-family: 'Monaco', monospace;
  line-height: 1.25rem;
  margin: 0 0 1.5rem;
`;

const Name = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  color: black;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin: 0 0 .5rem;
  font-weight: 700;
`;

const Photo = styled.img`
  object-fit: cover;
  flex-shrink: 0;
  width: 31.125rem;
`;

const Description = styled.p`
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-weight: 400;
`;

export default props => {
  return (
    <Card to="/Show">
      <Photo src={process.env.PUBLIC_URL + "img/bitmap-" + props.id + ".png"} />
      <Content>
        <Location>{props.location}</Location>
        <Name>{props.name}</Name>
        <Description>{props.children}</Description>
      </Content>
    </Card>
  );
};
