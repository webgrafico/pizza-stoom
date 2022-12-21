import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr 2fr;
  background-color: ${colors.silverLight};
  border-radius: 1rem;
  margin-bottom: 1rem;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
  }
  h3 {
    color: ${colors.silver};
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Item = styled.li`
  text-transform: capitalize;
`;

export const Context = styled.div`
  padding: 0 1rem;
  @media ${device.mobileL} {
    padding: 1rem 0;
  }
`;

export default Container;
