import React from 'react';
import { IIngredient } from '../../molecules/SelectItem/SelectItem';
import { CardRecommendation } from './variations/CardRecommendation';
import { CardSelection } from './variations/CardSelection';

const cardTypes = { cardRecommendation: 'cardRecommendation', cardSelection: 'cardSelection' };

type TCardTypes = keyof typeof cardTypes;
interface ICard {
  variation: TCardTypes;
  imageUrl: string;
  name: string;
  description?: string;
  dough?: string;
  ingredients?: string;
  price: number;
  points?: number;
  selected?: boolean;
  handlePoints(): void;
}

export const Card = ({
  variation,
  imageUrl = '',
  name = '',
  description = '',
  price = 0,
  dough = '',
  ingredients = '',
  points = 0,
  selected,
  handlePoints
}: ICard) => {
  const getComponent = (type: TCardTypes) => {
    switch (type) {
      case cardTypes.cardRecommendation:
        return (
          <CardRecommendation
            imageUrl={imageUrl}
            name={name}
            dough={dough}
            ingredients={ingredients}
            price={price}
            points={points}
            handlePoints={handlePoints}
          />
        );
      case cardTypes.cardSelection:
        return (
          <CardSelection selected={selected} imageUrl={imageUrl} name={name} description={description} price={price} />
        );
      default:
        return (
          <CardSelection selected={selected} imageUrl={imageUrl} name={name} description={description} price={price} />
        );
    }
  };

  return <>{getComponent(variation)}</>;
};
