import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DashHeader from './Components/DashHeader/DashHeader';
import HomePage from './Components/HomePage/HomePage';
import LandingPage from './Components/LandingPage/LandingPage';
import SignInPage from './Components/SignInPage/SignInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import UserContext from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import useAuthState from './hooks/useAuthState';
import { Container } from './StyledComponents';
import { lightTheme } from './themes';
import homeLoader from './Utilities/loaders/homeLoader';
import landingLoader from './Utilities/loaders/landingLoader';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [user, loading, error] = useAuthState();

  if (loading) return null;
  if (error) return <div>Error, please reload the site.</div>;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Navigate to={user ? 'home' : '/landing'} />} />
        <Route
          element={
            <>
              <DashHeader setTheme={setTheme} />
              <Outlet />
            </>
          }
          loader={() => landingLoader(user)}
        >
          <Route path="landing" element={<LandingPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
        <Route
          path="home"
          element={
            <>
              <DashHeader setTheme={setTheme} />
              <Outlet />
            </>
          }
          loader={() => homeLoader(user)}
        >
          <Route index element={<HomePage />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
