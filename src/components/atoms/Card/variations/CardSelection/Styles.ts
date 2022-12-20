import styled from 'styled-components';
import { colors, device } from '../../../../../GlobalStyles';

const Container = styled.div.attrs((props: { selected: boolean }) => props)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-gap: 1rem;
  border-radius: 1rem;
  background-color: ${colors.silverLight};
  border: ${(props) => (props.selected ? `2px solid ${colors.green}` : 'none')};
  box-sizing: border-box;
  line-height: 1.3;
  @media ${device.mobileL} {
    width: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    padding-right: 1rem;
  }
`;

export const Context = styled.div`
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  div:last-child,
  h2 {
    align-items: center;
  }
  div:last-child {
    margin-top: 0.5rem;
  }
  padding: 0 1rem;
`;

export default Container;
