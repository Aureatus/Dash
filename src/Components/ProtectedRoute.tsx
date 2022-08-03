import { User as FirebaseUser } from 'firebase/auth';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  currentUser,
  redirectPath,
  children,
}: {
  currentUser: FirebaseUser | null;
  redirectPath: string;
  children?: ReactElement;
}) => {
  if (!currentUser) return <Navigate to={redirectPath} replace />;
  return (
    <>
      {children ? children : <Outlet />} [// Renders children when ProtectedRoute is not
      used as a Layout component.]
    </>
  );
};

export default ProtectedRoute;
