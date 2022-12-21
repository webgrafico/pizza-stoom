import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.silverLight};
  border-radius: 1rem;
  padding: 3rem 0;
  margin-bottom: 1rem;
  h1 {
    color: ${colors.green};
    text-align: center;
    margin-bottom: 0;
  }
`;

export default Container;
