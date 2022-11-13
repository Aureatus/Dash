import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  Timestamp,
} from 'firebase/firestore';
import { Key, useEffect, useState } from 'react';

import { db } from '../firebase/firestore/firestore';

const useGetMessages = () => {
  const [messages, setMessages] = useState<
    {
      id: Key;
      content: string;
      uid: string;
      timestamp: Timestamp;
      profilePicture: string | null;
      userName: string | null;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));

    const fetchMessages = (QuerySnapshot: any[] | QuerySnapshot<DocumentData>) => {
      const messages: {
        id: Key;
        content: string;
        uid: string;
        timestamp: Timestamp;
        profilePicture: string | null;
        userName: string | null;
      }[] = [];
      QuerySnapshot.forEach((doc) => {
        const content = doc.data().content;
        const id: Key = doc.id;
        const uid: string = doc.data().uid;
        const timestamp: Timestamp = doc.data().timestamp;
        const profilePicture = doc.data().profilePicture;
        const userName = doc.data().userName;
        const message = {
          content: content,
          id: id,
          uid: uid,
          timestamp: timestamp,
          profilePicture: profilePicture,
          userName: userName,
        };
        messages.push(message);
      });
      setMessages(messages);
      setLoading(false);
    };

    const unsub = onSnapshot(
      messagesQuery,
      (QuerySnapshot) => {
        fetchMessages(QuerySnapshot);
      },
      (error) => {
        let message = 'Unknown Error';
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
        setLoading(false);
      },
    );

    return () => {
      unsub();
    };
  }, []);
  return [messages, loading, error] as const;
};

export default useGetMessages;
