import Logo from '../../public/bolt-svgrepo-com.svg';
import LogOutButton from './LogOutButton';
import {
  DashLogo,
  Header,
  HeadingSection,
  LogOutSection,
  Title,
} from './StyledComponents';

const DashHeader = ({ currentUser }: { currentUser: string | null }) => {
  return (
    <Header>
      <HeadingSection>
        <DashLogo src={Logo} />
        <Title>Dash</Title>
      </HeadingSection>
      <nav>abc</nav>
      {currentUser && (
        <LogOutSection>
          <LogOutButton />
        </LogOutSection>
      )}
    </Header>
  );
};

export default DashHeader;
