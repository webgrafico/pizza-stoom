import styled from 'styled-components';
import { colors } from '../../../GlobalStyles';

const Container = styled.button`
  background-color: ${colors.green};
  color: #fff;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.8rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-size: 1.2rem;
  img {
    margin-left: 1rem;
    width: 18px;
  }
`;

export default Container;
