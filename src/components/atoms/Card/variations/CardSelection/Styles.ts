import styled from 'styled-components';
import { colors, device } from '../../../../../GlobalStyles';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-gap: 1rem;
  border-radius: 1rem;
  background-color: ${colors.silverLight};
  @media ${device.mobileL} {
    width: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
  }
`;

export default Container;
