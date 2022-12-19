import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 5rem;
  font-weight: bold;
  width: 100%;
  h1 {
    margin: 0;
    color: #fff;
  }
  span {
    color: ${colors.yellow};
    font-size: 1.2rem;
  }
  img {
    margin-right: 1rem;
  }

  @media ${device.mobileL} {
    width: 260px;
  }
`;

export default Container;
