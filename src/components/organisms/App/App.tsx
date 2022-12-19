import { DailyRecommendation } from '../../molecules/DailyRecommendation';
import { Header } from '../../molecules/Header';
import { Form } from '../Form';
import Section from './Styles';

export const App = () => {
  return (
    <div>
      <Header />
      <Section>
        <DailyRecommendation />
        <Form />
      </Section>
    </div>
  );
};

export default App;
