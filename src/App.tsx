import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './DashHeader/DashHeader';
import GlobalStyle from './GlobalStyle';
import { Container } from './StyledComponents';
import { darkTheme, lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <DashHeader currentUser={null} setTheme={setTheme}></DashHeader>
        <Routes></Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
