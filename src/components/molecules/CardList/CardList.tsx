import React, { useState } from 'react';
import { Card } from '../../atoms/Card';

import List, { Item } from './Styles';

export interface IDoughBase {
  name: string;
  price: number;
  imageUrl: string;
}

export interface IDough extends IDoughBase {
  description: string;
  selected: boolean;
}

interface ICardList {
  doughs: IDough[];
}

export const CardList = ({ doughs }: ICardList) => {
  const [selected, setSelected] = useState(false);

  return (
    <List>
      {doughs?.map((dough, index) => (
        <Item key={index}>
          <Card
            selected={dough.selected}
            variation='cardSelection'
            imageUrl={dough.imageUrl}
            name={dough.name}
            description={dough.description}
            price={dough.price}
            handlePoints={() => {}}
          />
        </Item>
      ))}
    </List>
  );
};
