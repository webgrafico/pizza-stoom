import React from 'react';
import { Price } from '../../../Price/Price';
import { Image } from '../CardRecommendation/Styles';
import Container from './Styles';

interface ICardSelection {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export const CardSelection = ({ imageUrl = '', title = '', description = '', price = 0 }: ICardSelection) => {
  return (
    <Container>
      <Image src={imageUrl} height={20} />
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
        <Price value={price} />
      </div>
    </Container>
  );
};
