import React from 'react';
import List, { Item } from './Styles';

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
    <>
      <List>
        {ingredients.map((ingredient, index) => (
          <Item key={index} onClick={() => handleSelect(index)} selected={ingredient.selected}>
            <div>{ingredient.name}</div>
          </Item>
        ))}
      </List>
    </>
  );
};
