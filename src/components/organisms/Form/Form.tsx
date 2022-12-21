import React, { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../atoms/Steps';
import { CardList } from '../../molecules/CardList';
import { IDough } from '../../molecules/CardList/CardList';
import { CardSize } from '../../molecules/CardSizes';
import { Title } from '../../molecules/DailyRecommendation/Styles';
import { SelectItem } from '../../molecules/SelectItem';
import Container, { Footer } from './Styles';

interface IForm {
  doughs: IDough[];
  ingredients: string[];
}

export const Form = ({ doughs, ingredients }: IForm) => {
  const [current, setCurrent] = useState(1);
  const maxSteps = 5;

  const stepNames = [
    'Selecione sua massa',
    'Selecione o tamanho',
    'Selecione o recheio',
    'Montar o pedido',
    'Concluir',
    'Home'
  ];

  const handleSteps = () => {
    current < maxSteps ? setCurrent(current + 1) : setCurrent(1);
  };

  const getComponent = () => {
    switch (current) {
      case 1:
        return <CardList doughs={doughs} />;
      case 2:
        return <CardSize />;
      case 3:
        return <SelectItem ingredients={ingredients} />;
      case 4:
        return <>Resumo</>;
      case 5:
        return <>Pedido finalizado</>;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>Ou monte sua pizza</Title>
      <Steps current={current} max={maxSteps} headerText={stepNames[current - 1]} />
      {getComponent()}
      <Footer>
        <Button text={stepNames[current]} icon='next' size={10} onClick={handleSteps} />
      </Footer>
    </Container>
  );
};
