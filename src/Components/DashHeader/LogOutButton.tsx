import { signOut } from 'firebase/auth';

import LogoutSVG from '/logout_FILL0_wght200_GRAD0_opsz40.svg';

import auth from '../../firebase/auth/auth';
import { LogoutImg, StyledButton } from './StyledComponents';

const LogOutButton = () => {
  return (
    <StyledButton
      onClick={() => {
        signOut(auth);
      }}
    >
      <LogoutImg src={LogoutSVG} />
    </StyledButton>
  );
};

export default LogOutButton;
