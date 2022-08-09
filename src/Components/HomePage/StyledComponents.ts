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
`;

const Message = styled.div`
  min-height: 10%;
  width: 100%;

  display: grid;
  grid-template: 1fr 2fr / 10% min-content auto;

  column-gap: 2%;
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
