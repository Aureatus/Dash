import { collection, onSnapshot, query } from 'firebase/firestore';
import { Key, useEffect, useState } from 'react';

import { db } from '../firebase/firestore/firestore';

const useGetMessages = () => {
  const [messages, setMessages] = useState<{ id: Key; content: String; uid: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const messagesQuery = query(collection(db, 'messages'));

    onSnapshot(
      messagesQuery,
      (QuerySnapshot) => {
        const messages: { id: Key; content: String; uid: string }[] = [];
        QuerySnapshot.forEach((doc) => {
          const content = doc.data().content;
          const id: Key = doc.id;
          const uid: string = doc.data().uid;
          const message = { content: content, id: id, uid: uid };
          messages.push(message);
        });
        setMessages(messages);
        setLoading(false);
      },
      (error) => {
        let message = 'Unknown Error';
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
        setLoading(false);
      },
    );
  }, []);
  return [messages, loading, error] as const;
};

export default useGetMessages;
