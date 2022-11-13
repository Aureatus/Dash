import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { auth } from '../../firebase/auth/auth';
import {
  Container,
  FormHeader,
  ShowPasswordButtonDark,
  ShowPasswordButtonLight,
  SignInForm,
  StyledInput,
  StyledLabel,
  StyledSubmitInput,
} from './StyledComponents';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  const themeChecker = () => {
    if (theme.background.primary === '#ffffff') return 'light';
    if (theme.background.primary === '#000000') return 'dark';
  };

  const themeName = themeChecker();

  const EmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const ShowPasswordButton =
    themeName === 'light' ? ShowPasswordButtonLight : ShowPasswordButtonDark;

  return (
    <Container>
      <SignInForm
        onSubmit={(e) => {
          e.preventDefault();
          EmailSignIn();
        }}
      >
        <FormHeader>Sign in</FormHeader>
        <StyledLabel>
          <StyledInput
            placeholder="email@gmail.com"
            type="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ShowPasswordButton
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          ></ShowPasswordButton>
        </StyledLabel>
        <StyledLabel>
          <StyledSubmitInput type="submit" value={'Sign In'} />
        </StyledLabel>
      </SignInForm>
    </Container>
  );
};

export default SignInPage;
