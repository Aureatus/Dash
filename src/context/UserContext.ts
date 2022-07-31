import { User as FirebaseUser } from 'firebase/auth';
import { createContext } from 'react';

const UserContext = createContext<FirebaseUser | null>(null);

export default UserContext;
