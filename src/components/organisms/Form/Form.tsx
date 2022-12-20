import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../atoms/Steps';
import { CardList } from '../../molecules/CardList';
import { IPizza } from '../../molecules/CardList/CardList';
import { Title } from '../../molecules/DailyRecommendation/Styles';
import Footer from './Styles';

interface IForm {
  pizzas: IPizza[];
}

export const Form = ({ pizzas }: IForm) => {
  return (
    <div>
      <Title>Ou monte sua pizza</Title>
      <Steps current={1} max={3} />
      <CardList pizzas={pizzas} />
      <Footer>
        <Button text='montar meu pedido' icon='next' size={10} />
      </Footer>
    </div>
  );
};
