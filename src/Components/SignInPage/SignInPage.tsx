import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/auth/auth';
import {
  Container,
  ShowPasswordButton,
  SignInForm,
  StyledInput,
  StyledLabel,
  StyledSubmitInput,
} from './StyledComponents';

const SignInPage = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const EmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <SignInForm
        onSubmit={(e) => {
          e.preventDefault();
          EmailSignIn();
        }}
      >
        <StyledLabel>
          <StyledInput
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
