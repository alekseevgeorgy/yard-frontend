import React from 'react';
import arrow from './img/combined-shape.svg';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #111;
`;

const FooterText = styled.p`
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 300;
  margin-top: .5rem;
  margin-bottom: 0;

  ${props => props.topMargin &&`
    margin-top: 1rem;
    margin-bottom: 0;
  `}
`;

const Title = FooterText.withComponent('h4')

const FooterTitle = Title.extend`
  font-weight: 700;
  margin-top: 0;
  color: #646971;
`;

const FooterTitleBorder = Title.extend`
  color: #646971;
  border-top: 2px solid #3e4247;
  margin-top: 0;
  padding-top: 1rem;
  font-weight: 700;
`;

const Link = FooterText.withComponent('a')

const FooterLink = Link.extend`
  text-decoration: none;
  display: block;
  color: #fff;
`;

const FooterArrow = styled.img`
  margin-left: .5rem;
`;

const FooterCopyright = FooterText.extend`
  margin-top: 6rem;
  font-size: .6875rem;
  line-height: 1.125rem;
  font-weight: 100;
`

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={4}>
            <FooterTitle>
              ООО «Ярд»
            </FooterTitle>
            <FooterText>
              ОГРН 1175074002531
            </FooterText>
            <FooterText>
              ИНН 5036165365
            </FooterText>
            <FooterText topMargin>
              +7 (999) 821-14-88
            </FooterText>
          </Col>
          <Col xs={2}>
            <FooterTitleBorder>
              Жилые комплексы
            </FooterTitleBorder>
            <FooterLink href="#">
              ВТБ Арена Парк
            </FooterLink>
            <FooterLink href="#">
              Садовые кварталы
            </FooterLink>
            <FooterLink href="#">
              Резиденция Монэ
            </FooterLink>
            <FooterLink topMargin href="#">
              Все ЖК Москвы<FooterArrow src={arrow} alt="arrow" />
            </FooterLink>
          </Col>
          <Col xs={2}>
            <FooterTitleBorder>
              Компания
            </FooterTitleBorder>
            <FooterLink href="#">
              Команда
            </FooterLink>
            <FooterLink href="#">
              О компании
            </FooterLink>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={4} xs={8}>
            <FooterCopyright>
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </FooterCopyright>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
