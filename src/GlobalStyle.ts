import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
