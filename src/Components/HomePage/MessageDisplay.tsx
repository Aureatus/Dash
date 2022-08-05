import { Key } from 'react';

const MessageDisplay = ({
  messages,
}: {
  messages: { id: Key; content: String; uid: string }[];
}) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {message.content}
            {message.uid}
          </div>
        );
      })}
    </div>
  );
};

export default MessageDisplay;
