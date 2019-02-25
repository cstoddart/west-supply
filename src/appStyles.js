import { createGlobalStyle } from 'styled-components';

import rubikRegular from './assets/fonts/rubikRegular.ttf';

export const AppStyles = createGlobalStyle`
  @font-face {
    src: url(${rubikRegular});
    font-family: rubik;
    font-weight: 400;
  }

  body {
    font-family: rubik;
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    letter-spacing: 3px;
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
