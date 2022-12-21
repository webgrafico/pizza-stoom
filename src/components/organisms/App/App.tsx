import { DailyRecommendation } from '../../molecules/DailyRecommendation';
import { Header } from '../../molecules/Header';
import { Form } from '../Form';
import Section from './Styles';

import pizzaOne from '../../../assets/pizza-1.jpg';
import pizzaTwo from '../../../assets/pizza-2.jpg';
import pizzaThree from '../../../assets/pizza-3.jpg';
import pizzaFour from '../../../assets/pizza-4.jpg';

import mock from '../../../mock/data.json';
import { useEffect, useState } from 'react';
import { IPizzaRecommendation } from '../../molecules/DailyRecommendation/DailyRecommendation';
import { IDough } from '../../molecules/CardList/CardList';

type TIngredients = string[];

interface IDailyRecommendation extends Omit<IPizzaRecommendation, 'dough' | 'ingredients'> {
  dough: number;
  ingredients: number[];
}
interface IData {
  dailyRecommendation: IDailyRecommendation;
  doughs: IDough[];
  ingredients: TIngredients;
  stoomPoints: number;
}

export const App = () => {
  const [storeMock, setStoreMock] = useState<IData>({} as IData);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setStoreMock(mock as unknown as IData);
  }, []);

  const ingredients = storeMock.dailyRecommendation?.ingredients
    .map((ingredient) => storeMock.ingredients[ingredient])
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

  return (
    <div>
      <Header points={points} />
      <Section>
        <DailyRecommendation pizza={dailyRecommendation} handlePoints={handlePoints} />
        <Form doughs={storeMock.doughs} ingredients={storeMock.ingredients} />
      </Section>
    </div>
  );
};

export default App;
