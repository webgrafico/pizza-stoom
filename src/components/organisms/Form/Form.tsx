import React, { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../atoms/Steps';
import { CardList } from '../../molecules/CardList';
import { IDough } from '../../molecules/CardList/CardList';
import { CardSize } from '../../molecules/CardSizes';
import { ISizes } from '../../molecules/CardSizes/CardSize';
import { CompletedOrder } from '../../molecules/CompletedOrder';
import { Title } from '../../molecules/DailyRecommendation/Styles';
import { OrderSummary } from '../../molecules/OrderSummary';
import { IOrder } from '../../molecules/OrderSummary/OrderSummary';
import { SelectItem } from '../../molecules/SelectItem';
import { IIngredient } from '../../molecules/SelectItem/SelectItem';
import Container, { Footer } from './Styles';

interface IForm {
  doughs: IDough[];
  ingredients: IIngredient[];
  handleSelectDough(id: number): void;
  handleSelectSize(id: number): void;
  handleSelectIngredients(id: number): void;
  sizes: ISizes[];
  order: IOrder;
}

export const Form = ({
  doughs,
  sizes,
  order,
  ingredients,
  handleSelectDough,
  handleSelectSize,
  handleSelectIngredients
}: IForm) => {
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
        return <CardList doughs={doughs} handleSelect={handleSelectDough} />;
      case 2:
        return <CardSize sizes={sizes} handleSelect={handleSelectSize} />;
      case 3:
        return <SelectItem ingredients={ingredients} handleSelect={handleSelectIngredients} />;
      case 4:
        return <OrderSummary order={order} />;
      case 5:
        return <CompletedOrder />;
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
