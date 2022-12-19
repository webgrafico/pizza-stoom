import React from 'react';
import IconPizza from '../../../assets/icon-pizza.svg';
import Container from './Styles';

export const Brand = () => {
  return (
    <Container>
      <img src={IconPizza} alt='Pizza slice' width={62} />
      <div>
        <h1>PizzaStoom</h1>
        <span>é pizza, sim.</span>
      </div>
    </Container>
  );
};
