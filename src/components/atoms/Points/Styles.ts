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
  @media ${device.mobileL} {
    width: 180px;
    margin-top: -1rem;
  }
`;

export default Container;
