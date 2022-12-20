import React from 'react';
import { CardRecommendation } from './variations/CardRecommendation';
import { CardSelection } from './variations/CardSelection';

const cardTypes = { cardRecommendation: 'cardRecommendation', cardSelection: 'cardSelection' };

type TCardTypes = keyof typeof cardTypes;
interface ICard {
  variation: TCardTypes;
  imageUrl: string;
  title: string;
  description?: string;
  dough?: string;
  ingredients?: string;
  price: number;
  points?: number;
}

export const Card = ({
  variation,
  imageUrl = '',
  title = '',
  description = '',
  price = 0,
  dough = '',
  ingredients = '',
  points = 0
}: ICard) => {
  const getComponent = (type: TCardTypes) => {
    switch (type) {
      case cardTypes.cardRecommendation:
        return (
          <CardRecommendation
            imageUrl={imageUrl}
            title={title}
            dough={dough}
            ingredients={ingredients}
            price={price}
            points={points}
          />
        );
      case cardTypes.cardSelection:
        return <CardSelection imageUrl={imageUrl} title={title} description={description} price={price} />;
      default:
        return <CardSelection imageUrl={imageUrl} title={title} description={description} price={price} />;
    }
  };

  return <>{getComponent(variation)}</>;
};
