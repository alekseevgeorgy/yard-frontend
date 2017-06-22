import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Specs = styled.div`
  margin-top: 2rem;
  margin-bottom: 0;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  color: #3e4247;
  font-size: 1.5rem;
  line-height: 1.125;
`;

const Table = styled.dl`
  margin-top: 0;
  margin-bottom: 0;
`;

const Label = styled.dt`
  display: inline-block;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5625;
  font-weight: 400;
  color: #a9afb6;
  width: 50%;
  margin-top: .5rem;
  margin-bottom: 0;
`;

const Definition = styled.dd`
  display: inline-block;
  color: #3e4247;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5625;
  font-weight: 500;
  margin-top: .5rem;
  margin-bottom: 0;
  margin-left: 0;
`;

export default () => {
  return (
    <Specs>
      <Grid>
        <Title>
          Характеристики
        </Title>
        <Row>
          <Col xs={4}>
            <Table>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
              <Label>
                Статус:
              </Label>
              <Definition>
                Квартиры
              </Definition>
              <Label>
                Цены:
              </Label>
              <Definition>
                от 5.3 до 143.5 млн
              </Definition>
            </Table>
          </Col>
          <Col xs={4}>
            <Table>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
            </Table>
          </Col>
          <Col xs={4}>
            <Table>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
              <Label>
                Количество квартир:
              </Label>
              <Definition>
                1 503
              </Definition>
            </Table>
          </Col>
        </Row>
      </Grid>
    </Specs>
  );
};
