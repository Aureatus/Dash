import { Timestamp } from 'firebase/firestore';
import { Key } from 'react';

import { MessageDisplayContainer } from './StyledComponents';

const MessageDisplay = ({
  messages,
}: {
  messages: { id: Key; content: String; uid: string; timestamp: Timestamp }[];
}) => {
  return (
    <MessageDisplayContainer>
      {messages.map((message) => {
        return <div key={message.id}>{message.content}</div>;
      })}
    </MessageDisplayContainer>
  );
};

export default MessageDisplay;
