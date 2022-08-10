import { CensorSensor } from 'censor-sensor';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../../context/UserContext';
import { db } from '../../firebase/firestore/firestore';
import {
  InputErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './StyledComponents';

const MessageSend = () => {
  const user = useContext(UserContext);
  const [content, setContent] = useState('');
  const [displayProfanityWarning, setDisplayProfanityWarning] = useState(false);
  const censor = new CensorSensor();
  censor.disableTier(4); // Disables possibly offensive terms
  censor.disableTier(2); // Disables common profanity

  useEffect(() => {
    if (censor.isProfane(content)) {
      setDisplayProfanityWarning(true);
    } else {
      if (!censor.isProfane(content)) setDisplayProfanityWarning(false);
    }
  }, [content]);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (censor.isProfane(content)) return;
        try {
          addDoc(collection(db, 'messages'), {
            content: content,
            uid: user?.uid,
            timestamp: serverTimestamp(),
            profilePicture: user?.photoURL,
            userName: user?.displayName,
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <StyledLabel>
        <StyledInput
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
          placeholder="Type message"
        />
        {displayProfanityWarning && (
          <InputErrorMessage>Please remove profane content.</InputErrorMessage>
        )}
      </StyledLabel>
    </StyledForm>
  );
};

export default MessageSend;
