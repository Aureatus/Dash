import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpinningLogo = styled.img`
  width: calc(40vmin + 10vh);

  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.h2`
  --primary-accent-color: ${({ theme }) => theme.accent.primary};
  --secondary-accent-color: ${({ theme }) => theme.accent.secondary};

  margin: 0;
  font-family: Lato, sans-serif;
  font-size: calc(4rem + 3vmin);

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

export { Container, LoadingText, SpinningLogo };
