import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import { darkTheme, lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div></div>
    </ThemeProvider>
  );
}

export default App;
