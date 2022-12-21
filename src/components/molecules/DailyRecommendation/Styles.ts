import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  width: 100%;
  @media ${device.mobileL} {
    display: flex;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: ${colors.silverDark}
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export default Container;
