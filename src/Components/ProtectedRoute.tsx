import { User as FirebaseUser } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({
  currentUser,
  desiredUserStatus,
}: {
  currentUser: FirebaseUser | null;
  desiredUserStatus: null | true;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigates back to last location in history stack
    if (desiredUserStatus === null && currentUser) {
      if (window.history.length <= 1) {
        navigate('/home');
      } else navigate(-1);
    }
    if (desiredUserStatus === true && !currentUser)
      if (window.history.length <= 1) {
        navigate('/landing');
      } else navigate(-1);
  }, []);

  // Handles protection of authentication routes (sign-in, sign-up and landing)
  if (desiredUserStatus === null && currentUser) return null;

  // Handles protection of authenticated routes (home)
  if (desiredUserStatus === true && !currentUser) return null;
  else return <Outlet />;
};

export default ProtectedRoute;
