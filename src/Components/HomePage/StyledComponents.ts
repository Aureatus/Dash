import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  height: 100%;
  width: 40%;
  display: grid;
  grid-template: 90% 10% / 1fr;
  justify-content: center;
  align-items: center;
`;
export { HomeContainer, MessageContainer };
