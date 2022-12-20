import React, { useState } from 'react';
import { Card } from '../../atoms/Card/Card';
import Container from './Styles';

import pizzaOne from '../../../assets/pizza-1.jpg';

export const DailyRecommendation = () => {
  return (
    <Container>
      <Card
        variation='cardRecommendation'
        imageUrl={pizzaOne}
        dough={'Napolitana'}
        ingredients={'presunto, queijo'}
        title={'Nova Iorque'}
        price={37}
        points={50}
      />
    </Container>
  );
};
