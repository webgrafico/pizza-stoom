import React from 'react';
import Container, { List } from './Styles';
import { Item } from './Styles';

export interface ISizes {
  name: string;
  size: number;
  imageUrl: string;
  selected: boolean;
}
interface ICardSize {
  handleSelect(id: number): void;
  sizes: ISizes[];
}

export const CardSize = ({ handleSelect, sizes }: ICardSize) => {
  return (
    <Container>
      <List>
        {sizes.map((size, index) => (
          <Item key={index} onClick={() => handleSelect(index)} selected={size.selected}>
            <h3>{size.name}</h3>
            <div>{size.size} Fatias</div>
            <img src={size.imageUrl} alt={size.name} width={150} />
          </Item>
        ))}
      </List>
    </Container>
  );
};
