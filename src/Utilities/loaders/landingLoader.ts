import { User as FirebaseUser } from 'firebase/auth';
import { redirect } from 'react-router-dom';

export default function landingLoader(user: FirebaseUser | null) {
  if (user) {
    if (window.history.length <= 2) return redirect('/home');
    else return redirect('/home');
  }
}
