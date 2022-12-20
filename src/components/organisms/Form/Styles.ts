import styled from 'styled-components';
import { device } from '../../../GlobalStyles';

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 2rem;
`;

const Container = styled.div`
  padding: 1rem;
  @media ${device.tablet} {
    padding: 0;
  }
`;

export default Container;
