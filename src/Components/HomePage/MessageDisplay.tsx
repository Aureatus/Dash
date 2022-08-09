import { Timestamp } from 'firebase/firestore';
import { Key } from 'react';

import getMessageTime from '../../Utilities/getMessageTime';
import {
  Message,
  MessageDisplayContainer,
  MessageText,
  ProfilePicture,
  TimeStamp,
  UserName,
} from './StyledComponents';

const MessageDisplay = ({
  messages,
}: {
  messages: {
    id: Key;
    content: string;
    uid: string;
    timestamp: Timestamp;
    profilePicture: string | null;
    userName: string | null;
  }[];
}) => {
  return (
    <MessageDisplayContainer>
      {messages.map((message) => {
        return (
          <Message key={message.id}>
            <ProfilePicture
              src={
                message.profilePicture
                  ? message.profilePicture
                  : 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1659984790~hmac=5640feba3b7768fc54406a6105415c39'
              }
            />
            <UserName>{message.userName ? message.userName : 'Anonymous'}</UserName>
            <TimeStamp>{getMessageTime(message.timestamp.seconds)}</TimeStamp>
            <MessageText>{message.content}</MessageText>
          </Message>
        );
      })}
    </MessageDisplayContainer>
  );
};

export default MessageDisplay;
