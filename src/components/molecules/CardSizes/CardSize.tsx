import React, { useState } from 'react';
import Container, { List } from './Styles';
import { Item } from './Styles';
import sizeBroto from '../../../assets/pizza-broto.png';
import sizeMedia from '../../../assets/pizza-media.png';
import sizeGrande from '../../../assets/pizza-grande.png';
import sizeBig from '../../../assets/pizza-big.png';

export const CardSize = () => {
  return (
    <Container>
      <h2>Escolha o tamanho da pizza</h2>
      <List>
        <Item>
          <h3>Broto</h3>
          <div>4 Fatias</div>
          <img src={sizeBroto} alt='Broto' width={150} />
        </Item>
        <Item>
          <h3>Média</h3>
          <div>6 Fatias</div>
          <img src={sizeMedia} alt='Média' width={150} />
        </Item>
        <Item>
          <h3>Grande</h3>
          <div>8 Fatias</div>
          <img src={sizeGrande} alt='Grande' width={150} />
        </Item>
        <Item>
          <h3>Big</h3>
          <div>12 Fatias</div>
          <img src={sizeBig} alt='Big' width={150} />
        </Item>
      </List>
    </Container>
  );
};
