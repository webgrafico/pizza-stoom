import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../atoms/Steps';
import { CardList } from '../../molecules/CardList';
import { Title } from '../../molecules/DailyRecommendation/Styles';
import Footer from './Styles';

export const Form = () => {
  return (
    <div>
      <Title>Ou monte sua pizza</Title>
      <Steps current={1} max={3} />
      <CardList />
      <Footer>
        <Button text='montar meu pedido' icon='next' size={10} />
      </Footer>
    </div>
  );
};
