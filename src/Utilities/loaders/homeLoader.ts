import { User as FirebaseUser } from 'firebase/auth';
import { redirect } from 'react-router-dom';

export default function homeLoader(user: FirebaseUser | null) {
  if (!user)
    if (window.history.length <= 2) return redirect('/landing');
    else return redirect('/landing');
}
