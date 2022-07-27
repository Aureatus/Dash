import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(lightTheme);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
