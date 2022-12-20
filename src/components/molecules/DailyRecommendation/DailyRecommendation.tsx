import React, { useState } from 'react';
import { Card } from '../../atoms/Card/Card';
import Container from './Styles';

import { IPizzaBase } from '../CardList/CardList';

interface IPizzaRecommendation extends IPizzaBase {
  dough: string;
  ingredients: string;
  points: number;
}

interface IDailyRecommendation {
  pizza: IPizzaRecommendation;
}

export const DailyRecommendation = ({ pizza }: IDailyRecommendation) => {
  return (
    <Container>
      <Card
        variation='cardRecommendation'
        imageUrl={pizza.imageUrl}
        dough={pizza.dough}
        ingredients={pizza.ingredients}
        title={pizza.title}
        price={pizza.price}
        points={pizza.points}
      />
    </Container>
  );
};
