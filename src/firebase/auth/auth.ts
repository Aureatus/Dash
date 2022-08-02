import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import app from '../app/app';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
