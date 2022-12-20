import React, { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../atoms/Steps';
import { CardList } from '../../molecules/CardList';
import { IDough } from '../../molecules/CardList/CardList';
import { Title } from '../../molecules/DailyRecommendation/Styles';
import Container, { Footer } from './Styles';

interface IForm {
  doughs: IDough[];
}

export const Form = ({ doughs }: IForm) => {
  const [current, setCurrent] = useState(1);
  const maxSteps = 4;

  const stepNames = ['', 'Selecione o tamanho', 'Selecione o recheio', 'Montar o pedido', 'Home'];

  const handleSteps = () => {
    current < maxSteps ? setCurrent(current + 1) : setCurrent(1);
  };

  const getComponent = () => {
    switch (current) {
      case 1:
        return <CardList doughs={doughs} />;
      case 2:
        return <>Tamanho</>;
      case 3:
        return <>Recheio</>;
      case 4:
        return <>Pedido finalizado</>;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>Ou monte sua pizza</Title>
      <Steps current={current} max={maxSteps} />
      {getComponent()}
      <Footer>
        <Button text={stepNames[current]} icon='next' size={10} onClick={handleSteps} />
      </Footer>
    </Container>
  );
};
