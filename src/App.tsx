import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './Components/DashHeader/DashHeader';
import LandingPage from './Components/LandingPage/LandingPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import ProtectedRoute from './Components/ProtectedRoute';
import SignInPage from './Components/SignInPage/SignInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
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
          {loading ? (
            <LoadingPage />
          ) : (
            <Routes>
              <Route
                element={<ProtectedRoute currentUser={user} desiredUserStatus={null} />}
              >
                <Route index element={<Navigate to={'/landing'} />} />
                <Route path="landing" element={<LandingPage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
              </Route>
              <Route
                element={<ProtectedRoute currentUser={user} desiredUserStatus={!null} />}
              >
                <Route path="home" element={<div>test</div>} />
              </Route>
            </Routes>
          )}
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
