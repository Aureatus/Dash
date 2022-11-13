import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template: 97% auto / 1fr;
  justify-items: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 320px;
  display: grid;
  grid-template: 90% 10% / 1fr;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  height: 100%;
  width: 100%;
  min-width: 320px;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.text.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Attribution = styled.a`
  font-weight: 300;
`;

// MessageSend styles

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
`;

const StyledLabel = styled.label`
  height: 100%;
  width: 100%;

  display: flex;
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  background-color: inherit;

  border: none;
  outline: none;
  resize: none;
`;

const InputErrorMessage = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  font-weight: 700;
  white-space: nowrap;
`;

// MessageDisplay styles

const MessageDisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1%;

  overflow: auto;

  border-top: solid 2px;
  border-bottom: solid 2px;
`;

const Message = styled.div`
  height: auto;
  width: 100%;

  display: grid;
  grid-template: auto 1fr / 10% min-content auto;
  column-gap: 1%;

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
  font-weight: 600;
  font-size: calc(0.8vmax + 0.3rem);
  line-height: 1;

  white-space: nowrap;
`;

const TimeStamp = styled.time`
  grid-area: 1 / 3 / span 1 / span 1;

  margin: 0;
  padding: 0% 1%;

  font-weight: 300;
  font-size: calc(0.5vmax + 0.3rem);
  line-height: 1.5;
`;

const MessageText = styled.p`
  grid-area: 2 / 2 / span 1 / span 2;

  margin: 0;

  font-weight: 400;
  font-size: calc(0.8vmax + 0.3rem);
  word-break: break-word;
`;

export {
  Attribution,
  Footer,
  HomeContainer,
  InputErrorMessage,
  Message,
  MessageContainer,
  MessageDisplayContainer,
  MessageText,
  ProfilePicture,
  StyledForm,
  StyledLabel,
  StyledTextArea,
  TimeStamp,
  UserName,
};
