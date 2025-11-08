import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive breakpoints */
  :root {
    --mobile: ${props => props.theme.breakpoints.mobile};
    --tablet: ${props => props.theme.breakpoints.tablet};
    --desktop: ${props => props.theme.breakpoints.desktop};
    --large-desktop: ${props => props.theme.breakpoints.largeDesktop};
  }
`;

export default GlobalStyles;