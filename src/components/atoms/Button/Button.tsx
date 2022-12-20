import React from 'react';
import iconCheck from '../../../assets/icon-check.svg';
import iconArrowRight from '../../../assets/icon-arrow-right.svg';
import Container, { Img } from './Styles';

interface IButton {
  text: string;
  icon: 'check' | 'next';
  size?: number;
  onClick?(): void;
}

export const Button = ({ text, icon, size = 18, onClick }: IButton) => {
  const icons = {
    check: iconCheck,
    next: iconArrowRight
  };

  return (
    <Container onClick={onClick}>
      {text}
      <Img src={icons[icon]} alt={text} width={size} />
    </Container>
  );
};
