import { DailyRecommendation } from '../../molecules/DailyRecommendation';
import { Header } from '../../molecules/Header';
import { Form } from '../Form';
import Section from './Styles';

import mock from '../../../mock/data.json';
import { useEffect, useState } from 'react';
import { IPizzaRecommendation } from '../../molecules/DailyRecommendation/DailyRecommendation';
import { IDough } from '../../molecules/CardList/CardList';
import { ISizes } from '../../molecules/CardSizes/CardSize';
import { IIngredient } from '../../molecules/SelectItem/SelectItem';
import { IOrder } from '../../molecules/OrderSummary/OrderSummary';

interface IDailyRecommendation extends Omit<IPizzaRecommendation, 'dough' | 'ingredients'> {
  dough: number;
  ingredients: number[];
}
interface IData {
  dailyRecommendation: IDailyRecommendation;
  doughs: IDough[];
  ingredients: IIngredient[];
  stoomPoints: number;
  sizes: ISizes[];
}

export const App = () => {
  const [storeMock, setStoreMock] = useState<IData>({} as IData);
  const [points, setPoints] = useState(0);
  const [order, setOrder] = useState<IOrder>({ dough: '', size: '', ingredients: [], imageUrl: '' });

  useEffect(() => {
    setStoreMock(mock as unknown as IData);
  }, []);

  const ingredients = storeMock.dailyRecommendation?.ingredients
    .map((ingredient) => storeMock.ingredients[ingredient].name)
    .join(', ');

  const dough = storeMock.doughs?.[storeMock.dailyRecommendation?.dough].name;

  const dailyRecommendation = {
    ...storeMock.dailyRecommendation,
    dough,
    ingredients
  };

  const handlePoints = () => {
    const defaultValue = storeMock.dailyRecommendation?.points;
    const newPoints = points + defaultValue;
    setPoints(newPoints);
  };

  const handleSelectDough = (id: number) => {
    setOrder({ ...order, dough: storeMock.doughs[id].name, imageUrl: storeMock.doughs[id].imageUrl });

    storeMock.doughs.forEach((dough) => (dough.selected = false));
    storeMock.doughs[id].selected = !storeMock.doughs[id].selected;
    setStoreMock({ ...storeMock });
  };

  const handleSelectSize = (id: number) => {
    setOrder({ ...order, size: storeMock.sizes[id].name });

    storeMock.sizes.forEach((size) => (size.selected = false));
    storeMock.sizes[id].selected = !storeMock.sizes[id].selected;
    setStoreMock({ ...storeMock });
  };

  const handleSelectIngredients = (id: number) => {
    storeMock.ingredients[id].selected = !storeMock.ingredients[id].selected;

    if (storeMock.ingredients[id].selected) {
      order.ingredients.push(storeMock.ingredients[id].name);
      setOrder({ ...order, ingredients: order.ingredients });
    } else {
      setOrder({ ...order, ingredients: order.ingredients.filter((ingredient) => !ingredient) });
    }

    setStoreMock({ ...storeMock });
  };

  return (
    <div>
      <Header points={points} />
      <Section>
        <DailyRecommendation pizza={dailyRecommendation} handlePoints={handlePoints} />
        <Form
          doughs={storeMock.doughs}
          ingredients={storeMock.ingredients}
          sizes={storeMock.sizes}
          order={order}
          handleSelectDough={handleSelectDough}
          handleSelectSize={handleSelectSize}
          handleSelectIngredients={handleSelectIngredients}
        />
      </Section>
    </div>
  );
};

export default App;
