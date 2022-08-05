import { User as FirebaseUser } from 'firebase/auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  currentUser,
  redirectPath,
  desiredUserStatus,
}: {
  currentUser: FirebaseUser | null;
  redirectPath: string;
  desiredUserStatus: null | true;
}) => {
  let componentJSX = <Outlet />;
  // Handles protection of authentication routes (sign-in, sign-up and landing)
  if (desiredUserStatus === null && currentUser)
    return <Navigate to={redirectPath} replace />;

  // Handles protection of authenticated routes (home)
  if (desiredUserStatus === true && !currentUser)
    return <Navigate to={redirectPath} replace />;
  else return componentJSX;
};

export default ProtectedRoute;
