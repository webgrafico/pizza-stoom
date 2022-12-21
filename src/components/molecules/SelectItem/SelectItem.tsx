import React, { useState } from 'react';
import Container, { List } from './Styles';
import { Item } from './Styles';

export interface IIngredient {
  name: string;
  selected: boolean;
}
interface ISelectItem {
  ingredients: IIngredient[];
  handleSelect(id: number): void;
}

export const SelectItem = ({ ingredients, handleSelect }: ISelectItem) => {
  return (
    <Container>
      <List>
        {ingredients.map((ingredient, index) => (
          <Item key={index} onClick={() => handleSelect(index)} selected={ingredient.selected}>
            <div>{ingredient.name}</div>
          </Item>
        ))}
      </List>
    </Container>
  );
};
