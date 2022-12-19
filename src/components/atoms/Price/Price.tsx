import React from 'react';
import Container from './Styles';

interface IPrice {
  value: number;
}

export const Price = ({ value }: IPrice) => {
  const formatCurrency = (priceValue: number) => {
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return priceValue.toLocaleString('pt-br', options);
  };

  return <Container>R$ {formatCurrency(value)}</Container>;
};
