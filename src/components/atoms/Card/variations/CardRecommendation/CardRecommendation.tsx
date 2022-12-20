import React from 'react';
import { Badge } from '../../../Badge/Badge';
import { Button } from '../../../Button/Button';
import { Price } from '../../../Price/Price';
import Container, { Body, Description, Footer, Header, Image, Label, Wrapper } from './Styles';

interface ICardRecommendation {
  imageUrl: string;
  name: string;
  dough: string;
  ingredients: string;
  price: number;
  points: number;
  handlePoints(): void;
}

export const CardRecommendation = ({
  imageUrl = '',
  name = '',
  dough = '',
  ingredients = '',
  price = 0,
  points = 0,
  handlePoints
}: ICardRecommendation) => {
  return (
    <Container>
      <Header>
        <h3>Pizza do dia:</h3>
        <Badge value={points} />
      </Header>
      <Body>
        <Image src={imageUrl} />
        <Wrapper>
          <h2>{name}</h2>
          <Description>
            <Label>Massa:</Label>
            <div>{dough}</div>
            <Label>Ingredientes:</Label>
            <div>{ingredients}</div>
          </Description>
          <Footer>
            <Price value={price} />
            <Button text={'quero!'} icon={'check'} onClick={handlePoints} />
          </Footer>
        </Wrapper>
      </Body>
    </Container>
  );
};
