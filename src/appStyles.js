import { createGlobalStyle } from 'styled-components';

import rubikRegular from './assets/fonts/rubikRegular.ttf';
import rubikBold from './assets/fonts/rubikBold.ttf';

export const AppStyles = createGlobalStyle`
  @font-face {
    src: url(${rubikRegular});
    font-family: rubik;
    font-weight: normal;
  }
  
  @font-face {
    src: url(${rubikBold});
    font-family: rubik;
    font-weight: bold;
  }

  body {
    font-family: rubik;
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    letter-spacing: 1px;
  }
  
  h1 {
    font-size: 30px;
  }
  
  p {
    margin: 0;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
