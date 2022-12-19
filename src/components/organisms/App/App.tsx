import { DailyRecommendation } from '../../molecules/DailyRecommendation';
import { Header } from '../../molecules/Header';
import { Form } from '../Form';
import Container from './Styles';

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <DailyRecommendation />
        <Form />
      </Container>
    </div>
  );
};

export default App;
