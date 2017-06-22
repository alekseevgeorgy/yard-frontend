import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Infrastructure = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  color: #3e4247;
  font-size: 1.5rem;
  line-height: 1.125;
  margin-top: 2rem;
  margin-bottom: .5rem;
`;

const Text = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5625;
  margin-top: 0;
  margin-top: .5rem;
  margin-bottom: 0;
  color: #3e4247;
`;

export default () => {
  return (
    <Infrastructure>
      <Grid>
        <Title>
          Инфраструктура
        </Title>
        <Row>
          <Col xs={2}>
            <Text>
              Бассейн
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Детский сад
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Частная школа
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Бассейн
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Детский сад
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Частная школа
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Text>
              Частная школа
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Частная школа
            </Text>
          </Col>
          <Col xs={2}>
            <Text>
              Частная школа
            </Text>
          </Col>
        </Row>
      </Grid>
    </Infrastructure>
  );
};
