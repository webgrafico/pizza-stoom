import React from 'react';
import IconLunch from '../../../assets/icon-lunch.svg';
import Container from './Styles';

export const Points = () => {
  return (
    <Container>
      <img src={IconLunch} alt='Lunch' width={48} />
      <div>
        <h3>StoomPoints</h3>
        <span>
          <span>0</span> pontos.
        </span>
      </div>
    </Container>
  );
};
