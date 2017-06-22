import React from "react";
import arrow from "./img/combined-shape.svg";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #111;
`;

const Text = styled.p`
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 300;
  margin-top: .5rem;
  margin-bottom: 0;
  ${props =>
    props.topMargin &&
    `
    margin-top: 1rem;
    margin-bottom: 0;
  `}
`;

const Title = styled.h4`
  color: #646971;
  font-family: 'Fira Sans', sans-serif;
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`;

const TitleBorder = Title.extend`
  border-top: 2px solid #3e4247;
  padding-top: 1rem;
`;

const Link = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 300;
  margin-top: .5rem;
  margin-bottom: 0;
  text-decoration: none;
  display: block;
  color: #fff;
  ${props =>
    props.topMargin &&
    `
    margin-top: 1rem;
    margin-bottom: 0;
  `}
`;

const FooterArrow = styled.img`
  margin-left: .5rem;
`;

const Copyright = Text.extend`
  margin-top: 6rem;
  font-size: .6875rem;
  line-height: 1.125rem;
  font-weight: 100;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={4}>
            <Title>
              ООО «Ярд»
            </Title>
            <Text>
              ОГРН 1175074002531
            </Text>
            <Text>
              ИНН 5036165365
            </Text>
            <Text topMargin>
              +7 (999) 821-14-88
            </Text>
          </Col>
          <Col xs={2}>
            <TitleBorder>
              Жилые комплексы
            </TitleBorder>
            <Link href="#">
              ВТБ Арена Парк
            </Link>
            <Link href="#">
              Садовые кварталы
            </Link>
            <Link href="#">
              Резиденция Монэ
            </Link>
            <Link topMargin href="#">
              Все ЖК Москвы<FooterArrow src={arrow} alt="arrow" />
            </Link>
          </Col>
          <Col xs={2}>
            <TitleBorder>
              Компания
            </TitleBorder>
            <Link href="#">
              Команда
            </Link>
            <Link href="#">
              О компании
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={4} xs={8}>
            <Copyright>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </Copyright>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
