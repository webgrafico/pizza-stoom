import React from 'react';
import iconCheck from '../../../assets/icon-check.svg';
import Container from './Styles';

interface IButton {
  text: string;
}

export const Button = ({ text }: IButton) => {
  return (
    <Container>
      {text}
      <img src={iconCheck} alt='quero!' />
    </Container>
  );
};
