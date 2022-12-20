import React, { useState } from 'react';
import { Card } from '../../atoms/Card/Card';
import Container from './Styles';

export interface IPizzaRecommendation {
  name: string;
  imageUrl: string;
  dough: string;
  ingredients: string;
  price: number;
  points: number;
}

interface IDailyRecommendation {
  pizza: IPizzaRecommendation;
  handlePoints(): void;
}

export const DailyRecommendation = ({ pizza, handlePoints }: IDailyRecommendation) => {
  if (!pizza) {
    return null;
  }

  return (
    <Container>
      <Card
        variation='cardRecommendation'
        imageUrl={pizza.imageUrl}
        dough={pizza.dough}
        ingredients={pizza.ingredients}
        name={pizza.name}
        price={pizza.price}
        points={pizza.points}
        handlePoints={handlePoints}
      />
    </Container>
  );
};
