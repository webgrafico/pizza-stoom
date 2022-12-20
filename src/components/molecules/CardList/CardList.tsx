import React from 'react';
import { Card } from '../../atoms/Card';

import pizzaTwo from '../../../assets/pizza-2.jpg';
import pizzaThree from '../../../assets/pizza-3.jpg';
import pizzaFour from '../../../assets/pizza-4.jpg';
import List, { Item } from './Styles';

interface IPizza {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ICardList {
  pizzas: IPizza[];
}

export const CardList = ({ pizzas }: ICardList) => {
  const pizzasMock = [
    {
      title: 'Pizza Napolitana 1',
      description: 'asdf 1',
      price: 12,
      imageUrl: pizzaTwo
    },
    {
      title: 'Pizza Napolitana 2',
      description: 'asdf 2',
      price: 32,
      imageUrl: pizzaThree
    },
    {
      title: 'Pizza Napolitana 3',
      description: 'asdf 3',
      price: 43,
      imageUrl: pizzaFour
    }
  ] as IPizza[];

  return (
    <List>
      {pizzasMock.map((pizza, index) => (
        <Item>
          <Card
            key={index}
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
