import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  height: 100%;
  width: 40%;
  min-width: 320px;
  display: grid;
  grid-template: 90% 10% / 1fr;
  justify-content: center;
  align-items: center;
`;

// MessageSend styles

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
`;

const StyledLabel = styled.label`
  height: 100%;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  background-color: inherit;

  border: none;
  outline: none;
`;

// MessageDisplay styles

const MessageDisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  row-gap: 1%;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.accent.secondary},
      ${({ theme }) => theme.accent.primary}
    );
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent.secondary},
      ${({ theme }) => theme.accent.primary}
    );
  }

  scrollbar-color: linear-gradient(
      to top,
      ${({ theme }) => theme.accent.secondary},
      ${({ theme }) => theme.accent.primary}
    )
    inherit;
  scrollbar-width: thin;
`;

const Message = styled.div`
  min-height: 10%;
  width: 100%;

  display: grid;
  grid-template: 1fr 2fr / 10% min-content auto;

  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.accent.primary},
      ${({ theme }) => theme.accent.secondary}
    )
    0% 0 100% 0/3px 0 1px 0 stretch;
`;

const ProfilePicture = styled.img`
  height: auto;
  max-height: 64px;
  max-width: 100%;

  border-radius: 999px;

  grid-area: 1 / 1 / span 2 / span 1;

  align-self: flex-start;
`;

const UserName = styled.h2`
  grid-area: 1 / 2 / span 1 / span 1;

  margin: 0;
  font-weight: 400;
  font-size: calc(0.8vmax + 0.3rem);
  line-height: 1;

  white-space: nowrap;
`;

const TimeStamp = styled.time`
  grid-area: 1 / 3 / span 1 / span 1;

  margin: 0;
  padding: 0% 2%;

  font-weight: 300;
  font-size: calc(0.5vmax + 0.3rem);
  line-height: 1.5;
`;

const MessageText = styled.p`
  grid-area: 2 / 2 / span 1 / span 2;

  margin: 0;
`;

export {
  HomeContainer,
  Message,
  MessageContainer,
  MessageDisplayContainer,
  MessageText,
  ProfilePicture,
  StyledForm,
  StyledInput,
  StyledLabel,
  TimeStamp,
  UserName,
};
