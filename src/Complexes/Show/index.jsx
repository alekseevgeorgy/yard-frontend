import styled from 'styled-components';
import React from 'react';
import Brief from './Brief';
import Display from './Display';
import Info from './Info';
import Specs from './Specs';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Options from './Options';
import Guide from './Guide';
import Directions from './Directions';

const Background = styled.div`
  background-color: #fff;
`;

export default () =>
  (<Background>
    <Brief />
    <Display />
    <Info />
    <Specs />
    <Description />
    <Infrastructure />
    <Options />
    <Guide />
    <Directions />
  </Background>);
