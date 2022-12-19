import React from 'react';
import { Badge } from '../../../Badge/Badge';
import { Button } from '../../../Button/Button';
import { Price } from '../../../Price/Price';
import Container, { Body, Description, Footer, Header, Image, Label, Wrapper } from './Styles';

export const CardRecommendation = () => {
  return (
    <Container>
      <Header>
        <h3>Pizza do dia:</h3>
        <Badge value={50} />
      </Header>
      <Body>
        <Image />
        <Wrapper>
          <h2>Pizza Napolitana</h2>
          <Description>
            <Label>Massa:</Label>
            <div>Napolitana</div>
            <Label>Ingredientes:</Label>
            <div>mussarela, presunto</div>
          </Description>
          <Footer>
            <Price value={37} />
            <Button text={'quero!'} />
          </Footer>
        </Wrapper>
      </Body>
    </Container>
  );
};
