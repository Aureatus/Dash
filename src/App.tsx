import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './Components/DashHeader/DashHeader';
import HomePage from './Components/HomePage/HomePage';
import LandingPage from './Components/LandingPage/LandingPage';
import ProtectedRoute from './Components/ProtectedRoute';
import SignInPage from './Components/SignInPage/SignInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import UserContext from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import useAuthState from './hooks/useAuthState';
import { Container } from './StyledComponents';
import { lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const [user, loading, error] = useAuthState();

  if (error) return <div>Error, please reload the site.</div>;
  if (loading) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Container>
          <DashHeader setTheme={setTheme}></DashHeader>
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
              <Route path="home" element={<HomePage />} />
            </Route>
          </Routes>
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
