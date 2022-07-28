import styled from 'styled-components';

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 4fr 6fr 1fr;
  align-items: center;
  justify-items: end;
`;

const HeadingSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Title = styled.h1`
  --primary-accent-color: ${({ theme }) => theme.accent.primary};
  --secondary-accent-color: ${({ theme }) => theme.accent.secondary};

  margin: 0;
  font-size: calc(2rem + 3vmin);

  background: var(--secondary-accent-color); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    var(--primary-accent-color),
    var(--secondary-accent-color)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    var(--primary-accent-color),
    var(--secondary-accent-color)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DashLogo = styled.img`
  width: calc(6vmin + 3vh);
`;

const LogOutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

const StyledButton = styled.button`
  height: 60%;
  border: none;
  background-color: inherit;
  color: inherit;
  padding: 0;
  cursor: pointer;
  border-radius: 999px;

  &:hover {
    backdrop-filter: invert(100%) opacity(0.1);
  }
`;

const LogoutImg = styled.img`
  max-height: 90%;
  height: calc(50% + 4vw);
`;

export {
  DashLogo,
  Header,
  HeadingSection,
  LogoutImg,
  LogOutSection,
  StyledButton,
  Title,
};
