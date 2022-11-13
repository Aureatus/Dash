import { Timestamp } from 'firebase/firestore';
import { Key, useEffect, useRef } from 'react';

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
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <MessageDisplayContainer>
      {messages.map((message) => {
        const { prefix, time } = message.timestamp?.seconds
          ? getMessageTime(message.timestamp.seconds)
          : { prefix: 'loading', time: '' };
        return (
          <Message key={message.id}>
            <ProfilePicture
              src={message.profilePicture ? message.profilePicture : '/user.png'}
            />
            <UserName>{message.userName ? message.userName : 'Anonymous'}</UserName>
            <TimeStamp>{prefix + time}</TimeStamp>
            <MessageText>{message.content}</MessageText>
          </Message>
        );
      })}
      <div ref={bottomRef}></div>
    </MessageDisplayContainer>
  );
};

export default MessageDisplay;
