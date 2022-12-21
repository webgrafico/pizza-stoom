import styled from 'styled-components';
import { colors, device } from '../../../GlobalStyles';

const List = styled.ul`
  flex: 0 1 0%;
  grid-gap: 1rem;
  padding: 0;

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(auto-fit, 48.1%);
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fit, 376px);
  }
`;

export const Item = styled.li.attrs((props: { selected: boolean }) => props)`
  border-radius: 1rem;
  background-color: ${colors.silverLight};
  border: ${(props) => (props.selected ? `2px solid ${colors.green}` : 'none')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    filter: brightness(93%);
  }
  @media ${device.tablet} {
    margin-bottom: 0;
  }
  h3 {
    color: ${colors.green};
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
  }
  div {
    font-size: 1.2rem;
    color: ${colors.yellow};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  img {
    margin-bottom: 1rem;
  }
`;

export default List;
