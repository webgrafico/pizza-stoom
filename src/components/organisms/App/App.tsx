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
  size: number;
}
interface IData {
  dailyRecommendation: IDailyRecommendation;
  doughs: IDough[];
  ingredients: IIngredient[];
  stoomPoints: number;
  sizes: ISizes[];
}

const initialData = {
  order: { dough: '', size: '', ingredients: [], imageUrl: '', isDailyRecommendation: false },
  points: 0
};

export const App = () => {
  const [storeMock, setStoreMock] = useState<IData>({} as IData);
  const [points, setPoints] = useState(initialData.points);
  const [order, setOrder] = useState<IOrder>(initialData.order);

  useEffect(() => {
    setStoreMock(mock as unknown as IData);
    const pointsStored = parseInt(localStorage.getItem('stoomPoints') || '0');
    if (pointsStored > 0) {
      setPoints(pointsStored);
    }
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

  const handleActionPoint = () => {
    const defaultValue = storeMock.dailyRecommendation?.points;
    const newPoints = points + defaultValue;
    setPoints(newPoints);
    localStorage.setItem('stoomPoints', newPoints.toString());
  };

  const handlePoints = () => {
    const { dough, imageUrl, ingredients, size } = storeMock.dailyRecommendation;

    const dailyRecommendation = {
      ...order,
      isDailyRecommendation: true,
      dough: storeMock.doughs[dough].name,
      imageUrl: imageUrl,
      size: storeMock.sizes[size].name,
      ingredients: ingredients.map((ingredient) => storeMock.ingredients[ingredient].name)
    };

    setOrder(dailyRecommendation);
  };

  const handleSelectDough = (id: number) => {
    const { doughs } = storeMock;
    const current = doughs[id];

    setOrder({ ...order, dough: current.name, imageUrl: current.imageUrl });

    doughs.forEach((dough) => (dough.selected = false));
    current.selected = !current.selected;
    setStoreMock({ ...storeMock });
  };

  const handleSelectSize = (id: number) => {
    const { sizes } = storeMock;
    const current = sizes[id];

    sizes.forEach((size) => (size.selected = false));
    current.selected = !current.selected;

    setOrder({ ...order, size: current.name });
    setStoreMock({ ...storeMock });
  };

  const handleSelectIngredients = (id: number) => {
    const { ingredients } = storeMock;
    const { ingredients: orderIngredients } = order;
    const current = ingredients[id];

    current.selected = !current.selected;

    if (current.selected) {
      orderIngredients.push(current.name);
      setOrder({ ...order, ingredients: orderIngredients });
    } else {
      setOrder({ ...order, ingredients: orderIngredients.filter((ingredient) => !ingredient) });
    }

    setStoreMock({ ...storeMock });
  };

  return (
    <>
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
          handleActionPoint={handleActionPoint}
        />
      </Section>
    </>
  );
};

export default App;
