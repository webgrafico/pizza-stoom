import styled from 'styled-components';
import { colors, device, size } from '../../../GlobalStyles';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Label = styled.span`
  color: ${colors.blue};
  font-weight: bold;
`;

export const StepCounter = styled.div`
  background-color: ${colors.silverLight};
  color: ${colors.silverDark};
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  padding-right: 0.7rem;
`;

export default Container;
