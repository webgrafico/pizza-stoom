import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  display: flex;
  border-radius: 1rem;
  background-color: ${colors.silverLight};
  padding: 1rem;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export default Container;
