import styled from 'styled-components';
import { device, size } from '../../../GlobalStyles';

const Container = styled.div`
  border: 1px solid purple;
  width: 100%;

  @media ${device.mobileL} {
    display: flex;
  }
`;

export default Container;
