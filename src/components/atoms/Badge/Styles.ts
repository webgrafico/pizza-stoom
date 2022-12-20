import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';
import IconBadge from '../../../assets/icon-badge.svg';

const Container = styled.div`
  color: #fff;
  position: relative;
`;

export const Body = styled.div`
  background: url(${IconBadge}) no-repeat center;
  position: absolute;
  top: -3rem;
  right: -4rem;
  text-align: center;
  margin-right: 3rem;
  padding: 1.2rem;
  font-size: 1rem;

  div {
    font-weight: bold;
  }
  @media ${device.tablet} {
    margin-right: 0;
    font-size: 1.2rem;
    padding: 2rem;
    right: -2.2rem;
  }
`;

export default Container;
