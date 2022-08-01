import { useContext } from 'react';

import Logo from '/bolt-svgrepo-com.svg';

import UserContext from '../../context/UserContext';
import LogOutButton from './LogOutButton';
import {
  DashLogo,
  Header,
  HeadingSection,
  LogOutSection,
  StyledNav,
  Title,
} from './StyledComponents';
import ThemeToggleButton from './ThemeToggleButton';

const DashHeader = ({ setTheme }: { setTheme: Function }) => {
  const user = useContext(UserContext);

  return (
    <Header>
      <HeadingSection>
        <DashLogo src={Logo} />
        <Title>Dash</Title>
      </HeadingSection>
      <StyledNav>
        <ThemeToggleButton setTheme={setTheme}></ThemeToggleButton>
      </StyledNav>
      {user && (
        <LogOutSection>
          <LogOutButton />
        </LogOutSection>
      )}
    </Header>
  );
};

export default DashHeader;
