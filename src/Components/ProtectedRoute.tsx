import { User as FirebaseUser } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Location, Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({
  currentUser,
  desiredUserStatus,
}: {
  currentUser: FirebaseUser | null;
  desiredUserStatus: null | true;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState<null | Location>(null);

  useEffect(() => {
    if (
      lastLocation?.pathname === '/home' &&
      (location.pathname === '/sign-up' || location.pathname === '/sign-in')
    )
      navigate(lastLocation.pathname, { replace: true });
    setLastLocation(location);
  }, [location]);

  useEffect(() => {
    // Navigates back to last location in history stack
    if (desiredUserStatus === null && currentUser) {
      if (window.history.length <= 2) {
        navigate('/home', { replace: true });
      } else navigate(-1);
    }
    if (desiredUserStatus === true && !currentUser)
      if (window.history.length <= 2) {
        navigate('/landing', { replace: true });
      } else navigate(-1);
  }, []);

  // Handles protection of authentication routes (sign-in, sign-up and landing)
  if (desiredUserStatus === null && currentUser) return null;

  // Handles protection of authenticated routes (home)
  if (desiredUserStatus === true && !currentUser) return null;
  else return <Outlet />;
};

export default ProtectedRoute;
