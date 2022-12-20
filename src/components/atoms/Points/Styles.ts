import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 3rem;
  font-weight: bold;
  width: 100%;
  margin-top: 1rem;
  & > div {
    text-align: right;
  }
  h3 {
    margin: 0;
    color: #fff;
  }
  span {
    color: ${colors.yellow};
    font-size: 1.2rem;
    span {
      color: #fff;
    }
  }
  img {
    margin-right: 1rem;
  }
  @media ${device.tablet} {
    width: 180px;
    margin-top: -1rem;
  }
`;

export const Point = styled.span`
  animation: countNumber 4s infinite alternate;
  animation-delay: 2s;
  animation-timing-function: steps(10);

  @keyframes countNumber {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -10000px;
    }
  }
`;

export default Container;
