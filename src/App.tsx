import { lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const DashHeader = lazy(() => import('./Components/DashHeader/DashHeader'));
const HomePage = lazy(() => import('./Components/HomePage/HomePage'));
const LandingPage = lazy(() => import('./Components/LandingPage/LandingPage'));
import LoadingPage from './Components/LoadingPage/LoadingPage';
const ProtectedRoute = lazy(() => import('./Components/ProtectedRoute'));
const SignInPage = lazy(() => import('./Components/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./Components/SignUpPage/SignUpPage'));
import UserContext from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import useAuthState from './hooks/useAuthState';
import { Container } from './StyledComponents';
import { lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const [user, loading, error] = useAuthState();

  if (error) return <div>Error, please reload the site.</div>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Container>
          <Suspense fallback={<LoadingPage text="Loading..." />}>
            <DashHeader setTheme={setTheme}></DashHeader>
          </Suspense>
          {loading ? (
            <LoadingPage text="User loading..." />
          ) : (
            <Routes>
              <Route
                element={
                  <Suspense fallback={<LoadingPage text="Loading..." />}>
                    <ProtectedRoute currentUser={user} desiredUserStatus={null} />{' '}
                  </Suspense>
                }
              >
                <Route index element={<Navigate to={'/landing'} />} />
                <Route path="landing" element={<LandingPage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
              </Route>
              <Route
                element={
                  <Suspense fallback={<LoadingPage text="Loading..." />}>
                    <ProtectedRoute currentUser={user} desiredUserStatus={!null} />{' '}
                  </Suspense>
                }
              >
                <Route path="home" element={<HomePage />} />
              </Route>
            </Routes>
          )}
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
