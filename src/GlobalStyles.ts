import { createGlobalStyle } from 'styled-components';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '480px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const colors = {
  green: '#05a74d',
  blue: '#0173bc',
  blueLight: '#0099d0',
  yellow: '#efa437',
  silverLight: '#e6e7ef',
  silver: '#676b82',
  silverDark: '#3c3b4f'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #fff;
        height: 100%;
    }
    body {
        margin: 0;
        font-family: 'Arial';
        color: #3f3b4e;
    }
    
`;

export default GlobalStyle;
