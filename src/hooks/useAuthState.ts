import { onAuthStateChanged } from 'firebase/auth';
import { User as FirebaseUser } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '../firebase/auth/auth';

const useAuthState = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUser(user);
          setLoading(false);
        }
        if (!user) {
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        let message = 'Unknown Error';
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setError(message);
      }
    });
  }, []);
  return [user, loading, error] as const;
};

export default useAuthState;
