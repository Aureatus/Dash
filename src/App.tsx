import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './Components/DashHeader/DashHeader';
import ProtectedRoute from './Components/ProtectedRoute';
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
        <Routes>
          <Route index element={<Navigate to={'/landing'} />} />
          <Route element={<ProtectedRoute currentUser={null} redirectPath="landing" />}>
            <Route path="dashboard" element={<div>test</div>} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
