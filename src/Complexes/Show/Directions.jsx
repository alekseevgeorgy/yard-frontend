import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import map from "../../img/complex-page-photos/map.png";

const Directions = styled.div`
  position: relative;
  margin-top: -9.625rem;
  margin-bottom: 4rem;
`;

const DirectionsMap = styled.img`
  width: 100%;
  height: 19.125rem;
  box-shadow: 0 0 30px rgba(0,0,0,.5);
`;

const Card = styled.div`
  box-shadow: 0 0 20px rgba(0,0,0,.5);
`;

const Poi = styled.div`
  background-color: #fff;
  padding: 1.5rem 1.5rem 1.5625rem;
  border-bottom: 1px solid #e0e0e1;
  box-sizing: border-box;
`;

const Place = styled.p`
  color: #3e4247;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.375;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Time = styled.p`
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.375;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;

export default () => {
  return (
    <Directions>
      <Grid>
        <Row>
          <Col xs={6}>
            <DirectionsMap src={map} alt="map" />
          </Col>
          <Col xs={6}>
            <Card>
              <Poi>
                <Place>
                  Красный Октябрь
                </Place>
                <Time>
                  24 минуты, 6 км
                </Time>
              </Poi>
              <Poi>
                <Place>
                  World class
                </Place>
                <Time>
                  2 минуты, 300 м
                </Time>
              </Poi>
              <Poi>
                <Place>
                  Третьяковская галерея
                </Place>
                <Time>
                  14 минут, 4 км
                </Time>
              </Poi>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Directions>
  );
};
