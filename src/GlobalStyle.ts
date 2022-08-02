import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};
    font-family: 'Lato', sans-serif;

    transition: background-color 0.8s ease,
    color 0.8s ease;

  }
  a:-webkit-any-link {
    text-decoration: none;
  }
  * {
    color: inherit;
  }
`;

export default GlobalStyle;
