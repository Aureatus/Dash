import { Container, NavContainer, SignInLink, SignUpLink } from './StyledComponents';

const LandingPage = () => {
  return (
    <Container>
      <NavContainer>
        <SignUpLink to={'/sign-up'}>Sign Up</SignUpLink>
        <SignInLink to={'/sign-in'}>Sign In</SignInLink>
      </NavContainer>
    </Container>
  );
};

export default LandingPage;
