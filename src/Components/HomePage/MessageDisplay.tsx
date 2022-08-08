import { Timestamp } from 'firebase/firestore';
import { Key } from 'react';

import { Message, MessageDisplayContainer, ProfilePicture } from './StyledComponents';

const MessageDisplay = ({
  messages,
}: {
  messages: {
    id: Key;
    content: string;
    uid: string;
    timestamp: Timestamp;
    profilePicture: string | null;
  }[];
}) => {
  return (
    <MessageDisplayContainer>
      {messages.map((message) => {
        return (
          <Message key={message.id}>
            {message.content}
            <ProfilePicture
              src={
                message.profilePicture
                  ? message.profilePicture
                  : 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1659984790~hmac=5640feba3b7768fc54406a6105415c39'
              }
            />
          </Message>
        );
      })}
    </MessageDisplayContainer>
  );
};

export default MessageDisplay;
