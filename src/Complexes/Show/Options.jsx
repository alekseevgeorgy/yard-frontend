import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Options = styled.div`
  background-color: #f4f5f9;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  color: #3e4247;
  font-size: 1.5rem;
  line-height: 1.125;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background-color: #fff;
  max-width: 24rem;
  padding: 1.5rem 2rem;
`;

const Subtitle = styled.h3`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  color: #3e4247;
  font-size: 1.25rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
`;

const Label = styled.p`
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.375;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0;
`;

const Value = Label.extend`
  color: #3e4247;
  line-height: 1.5625;
  font-weight: 400;
  margin-top: .5rem;
  margin-bottom: 0;
`;

const Button = styled.button`
  display: block;
  padding: .75rem 2rem;
  margin: 2rem auto 0;
  border-radius: .125rem;
  background-color: #000;
  color: #fff;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  border: none;
`;

export default () => (
  <Options>
    <Grid>
      <Title>
          Предложения в ЖК «Полянка/44»
        </Title>
      <Row>
        <Col xs={4}>
          <Card>
            <Subtitle>
                1-комнатные квартиры
              </Subtitle>
            <Label>
                Площадь
              </Label>
            <Value>
                от 59 до 120 м²
              </Value>
            <Label>
                Стоимость
              </Label>
            <Value>
                от 20.3 до 84.2 млн руб
              </Value>
            <Button>Посмотреть предложения</Button>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Subtitle>
                2-комнатные квартиры
              </Subtitle>
            <Label>
                Площадь
              </Label>
            <Value>
                от 59 до 120 м²
              </Value>
            <Label>
                Стоимость
              </Label>
            <Value>
                от 20.3 до 84.2 млн руб
              </Value>
            <Button>Посмотреть предложения</Button>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Subtitle>
                3-комнатные квартиры
              </Subtitle>
            <Label>
                Площадь
              </Label>
            <Value>
                от 59 до 120 м²
              </Value>
            <Label>
                Стоимость
              </Label>
            <Value>
                от 20.3 до 84.2 млн руб
              </Value>
            <Button>Посмотреть предложения</Button>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Options>
  );
