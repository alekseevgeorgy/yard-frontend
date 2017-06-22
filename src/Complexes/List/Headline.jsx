import React from "react";
import styled from "styled-components";

const Headline = styled.div`
  padding: 4rem 0rem;
  text-align: center;
`;

const Text = styled.p`
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-weight: 400;

  ${props =>
    props.marginTopBottom &&
    `
  margin-top: .5rem;
  margin-bottom: 1rem;
  `}
`;

const TextTitle = Text.extend`
  font-size: 1.5rem;
  line-height: 2.3125rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
`;

const ButtonContact = styled.button`
  padding: .75rem 2rem;
  border-radius: .125rem;
  background-color: #000;
  color: #fff;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  border: none;
`;

export default () => {
  return (
    <Headline>
      <TextTitle>Discover Our New Developments</TextTitle>
      <Text marginTopBottom>
        Compass brings a modern approach to new development marketing and sales.
        From boutique rental<br />conversions to luxurious ground-up
        condominiums, browse our portfolio of current offerings.
      </Text>
      <ButtonContact>Contact The Team</ButtonContact>
    </Headline>
  );
};
