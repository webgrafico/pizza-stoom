import React from 'react';
import { Card } from '../../atoms/Card';

import List, { Item } from './Styles';

export interface IPizzaBase {
  title: string;
  price: number;
  imageUrl: string;
}

export interface IPizza extends IPizzaBase {
  description: string;
}

interface ICardList {
  pizzas: IPizza[];
}

export const CardList = ({ pizzas }: ICardList) => {
  return (
    <List>
      {pizzas.map((pizza, index) => (
        <Item key={index}>
          <Card
            variation='cardSelection'
            imageUrl={pizza.imageUrl}
            title={pizza.title}
            description={pizza.description}
            price={pizza.price}
          />
        </Item>
      ))}
    </List>
  );
};
