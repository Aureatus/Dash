import { getFirestore } from 'firebase/firestore';

import app from '../app/app';

const db = getFirestore(app);

export { db };
