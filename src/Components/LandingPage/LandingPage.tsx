import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { auth, provider } from '../../firebase/auth/auth';
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

  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <NavContainer>
        <SignUpLink to={'/sign-up'}>Sign Up</SignUpLink>
        <SignInLink to={'/sign-in'}>Sign In</SignInLink>
      </NavContainer>
      {themeName === 'light' && <SignInWithGoogleLight onClick={googleSignIn} />}
      {themeName === 'dark' && <SignInWithGoogleDark onClick={googleSignIn} />}
    </Container>
  );
};

export default LandingPage;
