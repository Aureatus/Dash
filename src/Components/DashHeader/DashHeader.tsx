import Logo from '/bolt-svgrepo-com.svg';

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

const DashHeader = ({
  currentUser,
  setTheme,
}: {
  currentUser: string | null;
  setTheme: Function;
}) => {
  return (
    <Header>
      <HeadingSection>
        <DashLogo src={Logo} />
        <Title>Dash</Title>
      </HeadingSection>
      <StyledNav>
        <ThemeToggleButton setTheme={setTheme}></ThemeToggleButton>
      </StyledNav>
      {currentUser && (
        <LogOutSection>
          <LogOutButton />
        </LogOutSection>
      )}
    </Header>
  );
};

export default DashHeader;
