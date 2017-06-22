import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import arrow from "../../img/arrow-nearby.svg";
import guidePhoto from "../../img/complex-page-photos/guide-photo.png";

const Guide = styled.div`
  background-color: #3e4247;
  padding-top: 4rem;
  padding-bottom: 13.625rem;
`;

const Location = styled.h2`
  color: #a9afb6;
  margin-top: 7.25rem;
  margin-bottom: 3rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.125;
`;

const Title = styled.h3`
  color: #fff;
  margin-top: 0;
  margin-bottom: 3rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.25;
`;

const Link = styled.a`
  color: #00779a;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5625;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 7.25rem;
  text-decoration: none;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  line-height: 0;
`;

export default () => {
  return (
    <Guide>
      <Grid>
        <Row>
          <Col xs={6}>
            <Location>
              Якиманка
            </Location>
            <Title>
              Исторический центр Москвы в двух километрах&nbsp;от Кремля
            </Title>
            <Link>
              Гид по Якиманке <img src={arrow} alt="arrow" />
            </Link>
          </Col>
          <Col xs={6}>
            <Photo src={guidePhoto} alt="guidePhoto" />
          </Col>
        </Row>
      </Grid>
    </Guide>
  );
};
