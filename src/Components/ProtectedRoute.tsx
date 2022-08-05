import { User as FirebaseUser } from 'firebase/auth';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  currentUser,
  redirectPath,
  desiredUserStatus,
  children,
}: {
  currentUser: FirebaseUser | null;
  redirectPath: string;
  desiredUserStatus: null | true;
  children?: ReactElement;
}) => {
  let componentJSX = <div></div>;
  // Handles protection of authentication routes (sign-in, sign-up and landing)
  if (desiredUserStatus === null) {
    if (currentUser) componentJSX = <Navigate to={redirectPath} replace />;
    else
      componentJSX = (
        <>
          {children ? children : <Outlet />}
          {/*Renders children when ProtectedRoute is not
        used as a Layout component. */}
        </>
      );
  }
  // Handles protection of authenticated routes (home)
  if (desiredUserStatus === true) {
    if (!currentUser) componentJSX = <Navigate to={redirectPath} replace />;
    else
      componentJSX = (
        <>
          {children ? children : <Outlet />}
          {/*Renders children when ProtectedRoute is not
        used as a Layout component. */}
        </>
      );
  }

  return componentJSX;
};

export default ProtectedRoute;
