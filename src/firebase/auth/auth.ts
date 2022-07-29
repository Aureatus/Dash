import { getAuth } from 'firebase/auth';

import app from '../app/app';

const auth = getAuth(app);

export default auth;
