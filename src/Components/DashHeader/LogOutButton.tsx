import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import LogoutSVG from '/logout_FILL0_wght200_GRAD0_opsz40.svg';

import { auth } from '../../firebase/auth/auth';
import { LogoutImg, StyledButton } from './StyledComponents';

const LogOutButton = () => {
  const navigate = useNavigate();
  return (
    <StyledButton
      onClick={async () => {
        try {
          await signOut(auth);
          navigate('/landing', { replace: true });
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <LogoutImg src={LogoutSVG} />
    </StyledButton>
  );
};

export default LogOutButton;
