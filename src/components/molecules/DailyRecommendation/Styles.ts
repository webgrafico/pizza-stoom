import styled from 'styled-components';
import { device, size } from '../../../GlobalStyles';

const Container = styled.div`
  width: 100%;

  @media ${device.mobileL} {
    display: flex;
  }
`;

export default Container;
