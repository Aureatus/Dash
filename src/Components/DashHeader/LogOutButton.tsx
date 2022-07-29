import LogoutSVG from '../..//..//public/logout_FILL0_wght200_GRAD0_opsz40.svg';
import { LogoutImg, StyledButton } from './StyledComponents';

const LogOutButton = () => {
  return (
    <StyledButton>
      <LogoutImg src={LogoutSVG} />
    </StyledButton>
  );
};

export default LogOutButton;
