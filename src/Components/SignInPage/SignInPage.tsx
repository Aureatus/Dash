import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/auth/auth';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        EmailSignIn();
      }}
    >
      <label>
        Email:
        <input
          type="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword);
          }}
        >
          Show password
        </button>
      </label>
      <label>
        <input type="submit" value={'Sign In'} />
      </label>
    </form>
  );
};

export default SignInPage;
