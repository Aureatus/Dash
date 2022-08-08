import { Timestamp } from 'firebase/firestore';
import { Key } from 'react';

import { Message, MessageDisplayContainer } from './StyledComponents';

const MessageDisplay = ({
  messages,
}: {
  messages: { id: Key; content: String; uid: string; timestamp: Timestamp }[];
}) => {
  return (
    <MessageDisplayContainer>
      {messages.map((message) => {
        return <Message key={message.id}>{message.content}</Message>;
      })}
    </MessageDisplayContainer>
  );
};

export default MessageDisplay;
