import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  

  html {    
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Muli', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-family: 'Muli', sans-serif;
  }

  a {
  color: inherit;
  text-decoration: inherit;
}

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Google maps */
  a[href^="http://maps.google.com/maps"],
  a[href^="https://maps.google.com/maps"],
  a[href^="https://www.google.com/maps"] {
    display: none !important;
  }
  .gm-bundled-control .gmnoprint {
    display: block;
  }
  .gmnoprint:not(.gm-bundled-control) {
    display: none;
  }
`;

export default GlobalStyle;
