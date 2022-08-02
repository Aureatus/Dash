import { useTheme } from 'styled-components';

import {
  Container,
  NavContainer,
  SignInLink,
  SignInWithGoogleDark,
  SignInWithGoogleLight,
  SignUpLink,
} from './StyledComponents';

const LandingPage = () => {
  const theme = useTheme();

  const themeChecker = () => {
    if (theme.background.primary === '#ffffff') return 'light';
    if (theme.background.primary === '#000000') return 'dark';
  };

  const themeName = themeChecker();

  return (
    <Container>
      <NavContainer>
        <SignUpLink to={'/sign-up'}>Sign Up</SignUpLink>
        <SignInLink to={'/sign-in'}>Sign In</SignInLink>
      </NavContainer>
      {themeName === 'light' && <SignInWithGoogleLight />}
      {themeName === 'dark' && <SignInWithGoogleDark />}
    </Container>
  );
};

export default LandingPage;
