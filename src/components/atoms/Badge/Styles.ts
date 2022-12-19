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
  right: -2.2rem;
  text-align: center;
  margin-right: 3rem;
  padding: 1rem;
  font-size: 0.8rem;

  div {
    font-weight: bold;
  }
  @media ${device.mobileL} {
    margin-right: 0;
    padding: 2rem;
    font-size: 1.2rem;
  }
`;

export default Container;
