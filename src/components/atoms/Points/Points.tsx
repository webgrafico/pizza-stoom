import React, { useState } from 'react';
import IconLunch from '../../../assets/icon-lunch.svg';
import Container, { Point } from './Styles';

interface IPoints {
  value: number;
}

export const Points = ({ value = 0 }: IPoints) => {
  return (
    <Container>
      <img src={IconLunch} alt='Lunch' width={48} />
      <div>
        <h3>StoomPoints</h3>
        <span>
          <Point>{value}</Point> pontos.
        </span>
      </div>
    </Container>
  );
};
