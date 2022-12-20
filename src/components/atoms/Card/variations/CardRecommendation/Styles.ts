import styled from 'styled-components';
import { colors, device } from '../../../../../GlobalStyles';

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
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr 2fr;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
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

export const Image = styled.div.attrs((props: { src: string; width: number; height: number }) => props)`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media ${device.mobileL} {
    width: ${(props) => (props.width ? props.width + 'rem' : '100%')};
    min-height: ${(props) => (props.height ? props.height + 'rem' : 'auto')};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 1rem;
  }
`;

const Container = styled.div`
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
  border-radius: 1rem;
  background-color: ${colors.silverLight};
  padding: 1rem;
  margin: 1rem;
  @media ${device.mobileL} {
    width: 100%;
  }

  @media ${device.tablet} {
    margin: 0;
  }
`;

export default Container;
