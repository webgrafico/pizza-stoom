import React from 'react';
import Container, { Body } from './Styles';

interface IBadge {
  value: number;
}

export const Badge = ({ value }: IBadge) => {
  return (
    <Container>
      <Body>
        <div>{value}</div>
        pontos
      </Body>
    </Container>
  );
};
