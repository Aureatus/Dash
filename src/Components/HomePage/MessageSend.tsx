import { addDoc, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';

import UserContext from '../../context/UserContext';
import { db } from '../../firebase/firestore/firestore';

const MessageSend = () => {
  const user = useContext(UserContext);
  const [content, setContent] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        try {
          addDoc(collection(db, 'messages'), {
            content: content,
            uid: user?.uid,
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <label>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onInvalid={(e) => {
            e.preventDefault();
          }}
          required
          autoComplete="off"
        />
      </label>
    </form>
  );
};

export default MessageSend;
