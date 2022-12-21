import React from 'react';
import iconSuccess from '../../../assets/icon-success.svg';
import Container from './Styles';

export const CompletedOrder = () => {
  return (
    <Container>
      <img src={iconSuccess} alt='Pedido finalizado com sucesso!' width={100} />
      <h1>
        Pedido finalizado <br />
        com sucesso!
      </h1>
    </Container>
  );
};
