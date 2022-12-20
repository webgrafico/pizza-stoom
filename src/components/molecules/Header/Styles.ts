import styled from 'styled-components';
import { device, size } from '../../../GlobalStyles';

const Section = styled.div`
  background-color: #0173bc;
  height: 13rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${size.tablet};

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -3rem;
    padding: 0 1rem;
    flex-wrap: wrap;
  }
`;

export default Section;
