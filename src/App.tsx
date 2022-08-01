import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './Components/DashHeader/DashHeader';
import ProtectedRoute from './Components/ProtectedRoute';
import UserContext from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import useAuthState from './hooks/useAuthState';
import { Container } from './StyledComponents';
import { darkTheme, lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const [user, loading, error] = useAuthState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Container>
          <DashHeader setTheme={setTheme}></DashHeader>
          <Routes>
            <Route index element={<Navigate to={'/landing'} />} />
            <Route element={<ProtectedRoute currentUser={null} redirectPath="landing" />}>
              <Route path="dashboard" element={<div>test</div>} />
            </Route>
          </Routes>
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
