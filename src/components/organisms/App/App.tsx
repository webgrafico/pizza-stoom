import { DailyRecommendation } from '../../molecules/DailyRecommendation';
import { Header } from '../../molecules/Header';
import { Form } from '../Form';
import Section from './Styles';

import pizzaOne from '../../../assets/pizza-1.jpg';
import pizzaTwo from '../../../assets/pizza-2.jpg';
import pizzaThree from '../../../assets/pizza-3.jpg';
import pizzaFour from '../../../assets/pizza-4.jpg';

export const App = () => {
  const pizzasMock = [
    {
      title: 'Pizza Napolitana 1',
      description: 'asdf 1',
      price: 12,
      imageUrl: pizzaTwo
    },
    {
      title: 'Pizza Napolitana 2',
      description: 'asdf 2',
      price: 32,
      imageUrl: pizzaThree
    },
    {
      title: 'Pizza Napolitana 3',
      description: 'asdf 3',
      price: 43,
      imageUrl: pizzaFour
    }
  ];

  const pizzaMock = {
    title: 'Pizza Napolitana 1',
    dough: 'asdf 1',
    price: 12,
    imageUrl: pizzaOne,
    ingredients: 'presunto, ovo, queijo',
    points: 50
  };

  const points = 50;

  return (
    <div>
      <Header points={points} />
      <Section>
        <DailyRecommendation pizza={pizzaMock} />
        <Form pizzas={pizzasMock} />
      </Section>
    </div>
  );
};

export default App;
