import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  color: ${colors.green};
  font-weight: bold;
  font-size: 1.5rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export default Container;
