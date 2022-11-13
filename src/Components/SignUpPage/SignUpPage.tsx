import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { auth } from '../../firebase/auth/auth';
import {
  Container,
  FormHeader,
  ShowPasswordButtonDark,
  ShowPasswordButtonLight,
  SignUpForm,
  StyledInput,
  StyledLabel,
  StyledSubmitInput,
} from './StyledComponents';

const SignUpPage = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  const themeChecker = () => {
    if (theme.background.primary === '#ffffff') return 'light';
    if (theme.background.primary === '#000000') return 'dark';
  };

  const themeName = themeChecker();

  const EmailSignUp = async () => {
    try {
      const User = (await createUserWithEmailAndPassword(auth, email, password)).user;
      await updateProfile(User, { displayName: userName });
      Navigate('/home', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const ShowPasswordButton =
    themeName === 'light' ? ShowPasswordButtonLight : ShowPasswordButtonDark;

  return (
    <Container>
      <SignUpForm
        onSubmit={(e) => {
          e.preventDefault();
          EmailSignUp();
        }}
      >
        <FormHeader>Sign Up</FormHeader>
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
            placeholder="Username"
            type="text"
            value={userName}
            required
            minLength={5}
            maxLength={14}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            required
            minLength={8}
            maxLength={14}
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
          <StyledSubmitInput type="submit" value={'Sign Up'} />
        </StyledLabel>
      </SignUpForm>
    </Container>
  );
};

export default SignUpPage;
