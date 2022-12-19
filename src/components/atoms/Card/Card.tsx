import React from 'react';
import Container from './Styles';
import { CardRecommendation } from './variations/CardRecommendation';
import { CardSelection } from './variations/CardSelection';

const cardTypes = { cardRecommendation: 'cardRecommendation', cardSelection: 'cardSelection' };

type TCardTypes = keyof typeof cardTypes;
interface ICard {
  variation: TCardTypes;
}

export const Card = ({ variation }: ICard) => {
  const getComponent = (type: TCardTypes) => {
    switch (type) {
      case cardTypes.cardRecommendation:
        return <CardRecommendation />;
      case cardTypes.cardRecommendation:
        return <CardSelection />;
      default:
        return <CardSelection />;
    }
  };

  return <Container>{getComponent(variation)}</Container>;
};
