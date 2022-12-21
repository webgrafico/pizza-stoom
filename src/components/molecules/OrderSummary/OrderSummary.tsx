import React from 'react';
import { Image } from '../../atoms/Card/variations/CardRecommendation/Styles';
import Container, { Context } from './Styles';
import { Item } from './Styles';

export interface IOrder {
  dough: string;
  size: string;
  ingredients: string[];
  imageUrl: string;
}

interface IOrderSummary {
  order: IOrder;
}

export const OrderSummary = ({ order }: IOrderSummary) => {
  const ingredients = order.ingredients;

  return (
    <Container>
      <Image src={order.imageUrl} />
      <Context>
        <div>
          <h3>Tipo massa selecionada:</h3>
          {order.dough}
        </div>

        {order.size && (
          <div>
            <h3>Tamanho da pizza:</h3>
            {order.size}
          </div>
        )}

        {ingredients.length > 0 && (
          <div>
            <h3>Ingredientes escolhidos:</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <Item key={index}>
                  <div>{ingredient}</div>
                </Item>
              ))}
            </ul>
          </div>
        )}
      </Context>
    </Container>
  );
};
