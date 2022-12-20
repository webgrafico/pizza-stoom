import React from 'react';
import { Price } from '../../../Price/Price';
import { Image } from '../CardRecommendation/Styles';
import Container, { Context } from './Styles';

interface ICardSelection {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  selected?: boolean;
}

export const CardSelection = ({ imageUrl = '', name = '', description = '', price = 0, selected }: ICardSelection) => {
  return (
    <Container selected={selected}>
      <Image src={imageUrl} />
      <Context>
        <h2>{name}</h2>
        <div>{description}</div>
        <Price value={price} />
      </Context>
    </Container>
  );
};
