import styled from 'styled-components';
import { device, size } from '../../../GlobalStyles';

const Section = styled.div`
  width: 100%;
  min-height: 10rem;
  margin-top: -3rem;

  @media ${device.tablet} {
    width: ${size.tablet};
    margin: 0 auto;
    margin-top: -3rem;
  }
`;

export default Section;
