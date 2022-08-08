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
  overflow: auto;
`;

const Message = styled.div`
  min-height: 10%;
  width: 100%;

  display: grid;
  grid-template: 1fr 1fr / 15% 85%;
`;

const ProfilePicture = styled.img`
  height: 48px;
  width: auto;

  border-radius: 999px;

  grid-area: 1 / 1 / span 2 / span 1;

  justify-self: center;
  align-self: center;
`;

export {
  HomeContainer,
  Message,
  MessageContainer,
  MessageDisplayContainer,
  ProfilePicture,
  StyledForm,
  StyledInput,
  StyledLabel,
};
