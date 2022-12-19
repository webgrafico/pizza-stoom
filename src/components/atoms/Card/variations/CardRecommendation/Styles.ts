import styled from 'styled-components';
import { colors, device } from '../../../../../GlobalStyles';
import pizzaOne from './../../../../../assets/pizza-1.jpg';

export const Description = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.div`
  color: ${colors.silver};
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  margin-top: 1rem;
  @media ${device.mobileL} {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  padding-top: 0.2rem;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.div`
  background: url(${pizzaOne}) no-repeat center center;
  background-size: cover;
  height: 13rem;
  margin-right: 1rem;
  width: 100%;
  border-radius: 1rem;

  @media ${device.mobileL} {
    width: 20rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  h2,
  h3 {
    margin: 0;
  }
  h2 {
    color: ${colors.silverDark};
  }
  h3 {
    color: ${colors.silver};
  }
`;

export default Container;
