import React, { useState } from 'react';
import Container, { List } from './Styles';
import { Item } from './Styles';

interface ISelectItem {
  ingredients: string[];
}

export const SelectItem = ({ ingredients }: ISelectItem) => {
  return (
    <Container>
      <List>
        {ingredients.map((ingredient) => (
          <Item>
            <div>{ingredient}</div>
          </Item>
        ))}
      </List>
    </Container>
  );
};
